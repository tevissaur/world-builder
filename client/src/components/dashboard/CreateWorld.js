import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { setDrawerOpen, setWorldsAction } from "../../utils/actions";
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


    useEffect(() => {
        console.log(worldDesc)
    }, [worldDesc])
    
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
                
                store.dispatch(setWorldsAction([...state.worlds, newWorld]))
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TitleBanner image={testImg} title='Create Your World' />
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

            </Box>
        </>
    )
}

export default CreateWorld