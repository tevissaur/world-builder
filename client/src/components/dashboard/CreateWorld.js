import React, { useEffect } from "react";
// import { useDispa } from 'redux'
import { Box, Button, Container, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material'
import bannerImg from '../../assets/banner.jpg'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { setDrawerOpen } from "../../utils/actions";


const CreateWorld = (props) => {
    const state = store.getState()

    useEffect(() => {
        store.dispatch(setDrawerOpen(false))
    }, [])


    return (
        <>
            <Box
                display='flex' justifyContent='center'
                position='relative'
                sx={{
                    height: '150px',
                    backgroundImage: `url(${testImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Typography
                    variant="h3"
                    color='white'
                    paddingX={2} paddingY={1}
                    position='absolute' bottom={0} left={0}
                    sx={{
                        backgroundColor: '#000000be'
                    }}
                >
                    Create Your World
                </Typography>
            </Box>
            <Box padding={5} margin='auto'
                display='flex' justifyContent='center'
            >
                <FormControl variant="filled"
                    sx={{
                        justifyContent: 'center',
                        margin: 'auto', padding: '10px 5px 50px 5px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        width: '50%',
                    }}
                >
                    <FormLabel sx={{
                        padding: '15px',
                        fontSize: '20px',
                        margin: 'auto'
                    }}
                    >
                        Enter a name for your world!
                    </FormLabel>
                    <TextField
                        label="World Name"
                        sx={{
                            width: '80%',
                            margin: 'auto'
                        }}

                    />
                    <FormLabel
                        sx={{
                            padding: '15px',
                            fontSize: '20px',
                            margin: 'auto'
                        }}
                    >
                        Write a little bit about your world
                    </FormLabel>
                    <TextField
                        label="Description"
                        multiline
                        minRows={10}
                        sx={{
                            width: '80%',
                            margin: 'auto',
                            paddingBottom: '10px'
                        }}

                    />
                    <Button
                        type="submit"
                        variant='contained'
                        sx={{
                            width: 'min-content',
                            margin: 'auto'
                        }}
                    >
                        Save and continue
                    </Button>

                </FormControl>

            </Box>
        </>
    )
}

export default CreateWorld