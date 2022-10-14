import React, { useEffect, useState } from "react";
import store, { RootState } from "../../utils/store";
import { useLocation, useParams, Link as ReactLink } from 'react-router-dom'
import { CardActionArea, CardActions, Link } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit'
import styled from '@mui/material/styles/styled'
import placeholderImage from '../../assets/river_mountains.jpeg'
import { SINGLE_CHARACTER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { setCharacter } from "../../utils/actions";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCharacter } from "../../utils/slices/characterSlice";



const SingleCharacter = () => {
    const { character: { activeCharacter }, world: { openWorld }, ui } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const [expanded, setExpanded] = useState(false)
    const { search } = useLocation()
    const [id, setId] = useState(search.split('=')[1])
    const { data, loading, error } = useQuery(SINGLE_CHARACTER, {
        variables: {
            _id: id
        }
    })
    useEffect(() => {
        if (!loading) {
            dispatch(setActiveCharacter(data?.singleCharacter))
        }
    }, [data, loading])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {loading ? (
                <>
                </>
            ) : (
                <>
                    {/* <Grid component='section' container justifyContent='center'>
                        <Grid item xs={8} key={character.name}>

                            <Card sx={{ minWidth: '30%', margin: '10px' }}>
                                <Link component={ReactLink} to={`/dashboard/character/${character._id}`}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        alt="green iguana"
                                        src={placeholderImage}
                                    />
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
                                </CardActions>
                            </Card>

                        </Grid>
                    </Grid> */}
                </>

            )}
        </>

    )
}

export default SingleCharacter