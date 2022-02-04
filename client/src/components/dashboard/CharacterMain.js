import React, { useState } from "react";
import store from "../../utils/store";
import { CardActionArea, CardActions } from '@mui/material'
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



const CharacterMain = (props) => {
    const state = store.getState()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <TitleBanner image={testImg} title={`Characters of ${state.openWorld.name}`} />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={3}>

                    <Card sx={{ minWidth: 200, maxHeight: 350, margin: 2 }}>

                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            src={placeholderImage}
                        />
                        <CardActionArea>

                            <CardContent sx={{
                                backgroundColor: 'gray'
                            }}>
                                <Typography gutterBottom variant="h5" textAlign='center'>
                                    Create New Character
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item container xs={12} md={12} lg={9}>
                    {state.openWorld.characters?.map((character) => (
                        <Grid item xs={4}  key={character.name}>

                            <Card sx={{ minWidth: '30%', margin: 1 }}>
                                <Link component={ReactLink} to={`/character/${character._id}`} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            alt="green iguana"
                                            src={placeholderImage}
                                        />
                                    </CardActionArea>

                                </Link>
                                <CardContent>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {character.name}
                                        </Typography>
                                        <IconButton id={character._id} sx={{}} >
                                            <Edit fontSize="small" />
                                        </IconButton>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {character.backstory}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {/* <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore> */}

                                </CardActions>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>

    )
}

export default CharacterMain