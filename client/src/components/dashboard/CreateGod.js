import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from '../../utils/store'
import { setWorldAction } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { CREATE_GOD } from "../../utils/mutations";
import auth from "../../utils/auth";
import TitleBanner from '../TitleBanner'
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { unstable_HistoryRouter, useParams } from "react-router-dom";


const CreateGod = (props) => {
    const { data: { _id } } = auth.getProfile()
    const { world: { openWorld } } = store.getState()
    const [religionId, setReligionId] = useState(window.location.search.split('=')[2])
    const [godName, setGodName] = useState('')
    const [godDesc, setGodDesc] = useState('')
    const [godSymbol, setGodSymbol] = useState('')
    const [godDomains, setGodDomains] = useState([])
    const [createGod] = useMutation(CREATE_GOD)


    useEffect(() => {
        console.log(godDomains)
    }, [godDomains])

    const handleCheck = async (domain) => {
        console.log(religionId)
        if (godDomains.includes(domain)) {
            godDomains.pop()

        } else {

            setGodDomains([...godDomains, domain])
        }
    }

    const handleSubmit = async () => {
        try {
            const { data: { createGod: world } } = await createGod({
                variables: {
                    god: {
                        name: godName,
                        description: godDesc,
                        symbol: godSymbol,
                        domains: godDomains
                    },
                    religionId,
                    worldId: openWorld._id
                }
            })
            if (world) {
                setGodDesc('')
                setGodName('')
                setGodSymbol('')

                store.dispatch(setWorldAction(world))
                window.history.back()
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TitleBanner image={testImg} title='Create New God' />
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
                        Enter a name for the God
                    </FormLabel>
                    <TextField
                        label="God Name"
                        value={godName}
                        onChange={(e) => setGodName(e.target.value)}
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
                        What does this God represent to the people?
                    </FormLabel>
                    <TextField
                        multiline
                        minRows={3}
                        value={godDesc}
                        onChange={(e) => setGodDesc(e.target.value)}
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
                        What symbols represent this God?
                    </FormLabel>
                    <TextField
                        multiline
                        minRows={3}
                        value={godSymbol}
                        onChange={(e) => setGodSymbol(e.target.value)}
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
                        What domains does this God influence?
                    </FormLabel>
                    <FormGroup
                        onChange={(e) => handleCheck(e.target.labels[0].textContent)}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            width: '60%',
                            justifyContent: 'space-around',
                            margin: 'auto'
                        }}>

                        <FormControlLabel
                            control={<Checkbox />}
                            label='Nature'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Light'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Druidic'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Arcana'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Protection'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Ambition'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Knowledge'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Grave'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Tricker'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='War'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Forge'
                            labelPlacement="start"
                            sx={{
                                flexDirection: 'row',

                            }}
                        />

                    </FormGroup>

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

export default CreateGod