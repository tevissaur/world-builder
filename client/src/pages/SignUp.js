import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material'
import { LockRounded } from '@mui/icons-material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CREATE_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../utils/auth';
// import {  } from ''


const theme = createTheme();

export default function SignUp() {

    const [loginData, setLoginData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [createUser] = useMutation(CREATE_USER)


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const { data: { createUser: { token, user } } } = await createUser({
                variables: {
                    ...loginData
                }
            })
            console.log(user)
            auth.login(token)
            setLoginData({
                username: '',
                email: '',
                password: ''
            })

        } catch (err) {
            console.log(err)
            alert(err)
        }
    };

    // useEffect(() => {
    //     console.log(loginData)
    // }, [loginData])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" sx={{ height: '94vh', marginTop: '5vh' }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockRounded />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    value={loginData.username}
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        username: e.target.value,
                                    })}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={loginData.email}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        email: e.target.value,
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={loginData.password}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        password: e.target.value,
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}