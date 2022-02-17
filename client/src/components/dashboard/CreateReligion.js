import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { setWorldAction, setWorldsAction } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { CREATE_WORLD, CREATE_RELIGION } from "../../utils/mutations";
import auth from "../../utils/auth";
import TitleBanner from '../TitleBanner'


const CreateReligion = (props) => {
    const { data: { _id } } = auth.getProfile()
    const state = store.getState()
    const [religionName, setreligionName] = useState('')
    const [religionDesc, setreligionDesc] = useState('')
    const [createReligion] = useMutation(CREATE_RELIGION)


    const handleSubmit = async () => {
        try {
            const { data: { createReligion: world } } = await createReligion({
                variables: {
                    religion: {
                        name: religionName,
                    },
                    worldId: state.world.openWorld._id
                }
            })
            if (world) {
                setreligionDesc('')
                setreligionName('')

                store.dispatch(setWorldAction(world))
                window.history.back()
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TitleBanner image={testImg} title='Create New Religion' />
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
                        Enter a name for the religion
                    </FormLabel>
                    <TextField
                        label="Religion Name"
                        value={religionName}
                        onChange={(e) => setreligionName(e.target.value)}
                        sx={{
                            width: '80%',
                            margin: 'auto'
                        }}

                    />
                    <Button
                        // href="/dashboard"
                        type="submit"
                        variant='contained'
                        onClick={handleSubmit}
                        sx={{
                            width: 'max-content',
                            margin: '10px auto 0 auto'
                        }}
                    >
                        Save and continue
                    </Button>

                </FormControl>

            </Grid>
        </>
    )
}

export default CreateReligion