import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { useMutation } from "@apollo/client";
import { CREATE_CHARACTER } from "../../utils/mutations";
import auth from "../../utils/auth";
import TitleBanner from '../TitleBanner'
import { addCharacter, setWorldAction } from "../../utils/actions";


const CreateCharacter = (props) => {
    const { data: { _id } } = auth.getProfile()
    const { world: { openWorld: { _id: worldId, characters } } } = store.getState()

    const [characterName, setCharacterName] = useState('')
    const [characterDesc, setCharacterDesc] = useState('')
    const [characterBackstory, setCharacterBackstory] = useState('')
    const [createCharacter] = useMutation(CREATE_CHARACTER)


    const handleSubmit = async () => {
        try {
            if (characterName) {
                const { data: { createCharacter: world } } = await createCharacter({
                    variables: {
                        character: {
                            name: characterName,
                            description: characterDesc,
                            backstory: characterBackstory
                        },
                        worldId
                    }
                })

                if (world) {
                    setCharacterName('')
                    setCharacterDesc('')
                    store.dispatch(setWorldAction(world))
                    window.location.replace('/dashboard/characters')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TitleBanner image={testImg} title='Create New Character' />
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
                        What is this character's name?
                    </FormLabel>
                    <TextField
                        label="Character Name"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                        required
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
                        Add a description
                    </FormLabel>
                    <TextField
                        multiline
                        minRows={8}
                        value={characterDesc}
                        onChange={(e) => setCharacterDesc(e.target.value)}
                        required
                        sx={{
                            width: '80%',
                            margin: 'auto',
                            paddingBottom: '10px'
                        }}

                    />
                    <FormLabel
                        sx={{
                            padding: '15px',
                            fontSize: '20px',
                            margin: 'auto'
                        }}
                    >
                        Do they have a backstory yet?
                    </FormLabel>
                    <TextField
                        multiline
                        minRows={8}
                        value={characterBackstory}
                        onChange={(e) => setCharacterBackstory(e.target.value)}
                        required
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

export default CreateCharacter