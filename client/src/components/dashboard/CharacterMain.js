import React, { useEffect, useState } from "react";
import store from "../../utils/store";
import { CardActionArea, CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Edit from '@mui/icons-material/Edit'
import styled from '@mui/material/styles/styled'
import placeholderImage from '../../assets/river_mountains.jpeg'
import { Link as ReactLink, useLocation } from 'react-router-dom'
import Link from '@mui/material/Link'
import TitleBanner from "../TitleBanner";
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import { setModalOpen } from "../../utils/actions";
import SingleCharacter from "./SingleCharacter";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const CharacterMain = () => {
    const { world: { openWorld }, ui: { modalOpen } } = store.getState()

    const handleModal = () => {

        store.dispatch(setModalOpen(!modalOpen))
    };
    useEffect(() => {

    }, [modalOpen])

    return (
        <>
            <TitleBanner image={testImg} title={`Characters of ${openWorld.name}`} />
            <Grid container spacing={2} justifyContent='space-between'>
                <Grid item xs={12} sm={12} md={12} lg={3}>

                    <Card sx={{ minWidth: 200, maxHeight: 350, margin: 2 }}>

                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            src={placeholderImage}
                        />
                        <Link component={ReactLink} to='/dashboard/create-new-character' underline="none">

                            <CardContent sx={{
                                backgroundColor: 'gray'
                            }}>
                                <Typography gutterBottom variant="h5" textAlign='center'>
                                    Create New Character
                                </Typography>

                            </CardContent>
                        </Link>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={9} columnSpacing={5}>
                    {openWorld.characters?.map((character) => (
                        <Grid item xs={12} sm={12} md={6} key={character.name}>

                            <Card sx={{ minWidth: '30%', margin: 2 }}>
                                <Link component={ReactLink} to={`/dashboard/characters?cid=${character._id}`} onClick={handleModal} >
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
                                        <Link id={character._id} sx={{}} component={ReactLink} to={`/dashboard/characters?cid=${character._id}`} onClick={handleModal} >
                                            <IconButton>

                                                <Edit fontSize="small" />
                                            </IconButton>
                                        </Link>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {character.backstory}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                </CardActions>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Modal
                open={modalOpen}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style}>
                    <SingleCharacter />

                </Box>
            </Modal>
        </>

    )
}

export default CharacterMain