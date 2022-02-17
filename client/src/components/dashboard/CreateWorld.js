import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { setWorldsAction } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { CREATE_WORLD } from "../../utils/mutations";
import auth from "../../utils/auth";
import TitleBanner from '../TitleBanner'


const CreateWorld = (props) => {
    const { data: { _id } } = auth.getProfile()
    const state = store.getState()
    const [worldName, setWorldName] = useState('')
    const [worldDesc, setWorldDesc] = useState('')
    const [createWorld] = useMutation(CREATE_WORLD)

    
    const handleSubmit = async () => {
        try {
            const { data: { createWorld: newWorld } } = await createWorld({
                variables: {
                    world: {
                        name: worldName,
                        description: worldDesc,
                        creator: _id
                    }
                }
            })
            if (newWorld) {
                setWorldDesc('')
                setWorldName('')
                
                store.dispatch(setWorldsAction([...state.world.worlds, newWorld]))
                window.history.back()
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TitleBanner image={testImg} title='Create Your World' paths={['dashboard', 'create world']} />
            <Grid container item spacing={5} margin='20px auto' xs={10} md={9} lg={6} >
                <FormControl variant="filled"
                    sx={{
                        justifyContent: 'center',
                        margin: 'auto', padding: '10px 5px 50px 5px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        width: '100%',
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
                        value={worldName}
                        onChange={(e) => setWorldName(e.target.value)}
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
                        multiline
                        minRows={10}
                        value={worldDesc}
                        onChange={(e) => setWorldDesc(e.target.value)}
                        sx={{
                            width: '80%',
                            margin: 'auto',
                            paddingBottom: '10px'
                        }}

                    />
                    <Button
                        // href="/dashboard"
                        type="submit"
                        variant='contained'
                        onClick={handleSubmit}
                        sx={{
                            width: 'min-content',
                            margin: 'auto'
                        }}
                    >
                        Save and continue
                    </Button>

                </FormControl>

            </Grid>
        </>
    )
}

export default CreateWorld