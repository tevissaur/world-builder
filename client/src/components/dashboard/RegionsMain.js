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



const RegionsMain = (props) => {
    const { world: { openWorld } } = store.getState()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <TitleBanner image={testImg} title={`Regions of ${openWorld.name}`} />
            <Grid container spacing={2} justifyContent='space-between'>
                <Grid item xs={12} sm={12} md={12} lg={3}>

                    <Card sx={{ minWidth: 200, maxHeight: 350, margin: 2 }}>

                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            src={placeholderImage}
                        />
                        <Link component={ReactLink} to='/dashboard/create-new-region' underline="none">

                            <CardContent sx={{
                                backgroundColor: 'gray'
                            }}>
                                <Typography gutterBottom variant="h5" textAlign='center'>
                                    Create New Region
                                </Typography>

                            </CardContent>
                        </Link>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={9} columnSpacing={5}>
                    {openWorld.regions?.map((region) => (
                        <Grid item xs={12} sm={12} md={6} key={region.name}>

                            <Card sx={{ minWidth: '30%', margin: 2 }}>
                                <Link component={ReactLink} to={`/dashboard/region/${region._id}`} >
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
                                            {region.name}
                                        </Typography>
                                        <IconButton id={region._id} sx={{
                                        }} >
                                        
                                            <Edit fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                                <CardActions disableSpacing>
                                </CardActions>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>

    )
}

export default RegionsMain