import React, { useEffect, useState } from "react";
import store from "../../utils/store";
import { useParams } from 'react-router-dom'
import { CardActionArea, CardActions, List, ListItem } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@mui/material/styles/styled'
import placeholderImage from '../../assets/river_mountains.jpeg'
import { Link as ReactLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import TitleBanner from "../TitleBanner";
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import { SINGLE_GOD } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { setCharacter, setGod } from "../../utils/actions";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const SingleGod = (props) => {
    const { character: { character }, god: { god }, world: { openWorld } } = store.getState()
    const [expanded, setExpanded] = useState(false)
    const { _id } = useParams()
    const { data, loading, error } = useQuery(SINGLE_GOD, {
        variables: {
            _id
        }
    })
    useEffect(() => {
        loading ? console.log(loading) : (
            store.dispatch(setGod(data?.singleGod))
        )

    }, [data, loading])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <TitleBanner image={testImg} title={`${god.name || ''}`} />
            {loading ? (
                <>
                </>
            ) : (
                <>
                    <Grid component='section' container justifyContent='center'>

                        <Grid item xs={12} sm={12} md={6} key={god.name}>

                            <Card sx={{ minWidth: '30%', margin: 2 }}>

                                <CardMedia
                                    component="img"
                                    height="140"
                                    alt="green iguana"
                                    src={placeholderImage}
                                />
                                <CardContent>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {god.name}
                                        </Typography>
                                        <IconButton id={god._id} sx={{}} >
                                            <Edit fontSize="small" />
                                        </IconButton>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {god.description}
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <Typography variant="body2" color="text.secondary">
                                                Symbol: {god.symbol}
                                            </Typography>
                                        </ListItem>
                                        {god.domains?.map((domain) => (
                                            <ListItem key={domain}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {domain}
                                                </Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions disableSpacing>
                                </CardActions>
                            </Card>

                        </Grid>
                    </Grid>
                </>

            )}
        </>

    )
}

export default SingleGod