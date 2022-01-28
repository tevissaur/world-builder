import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material'
import { LockRounded } from '@mui/icons-material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPageNav from '../components/LandingPageNav';
import { LOG_IN } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../utils/auth';

const theme = createTheme();

export default function SignInSide() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [login] = useMutation(LOG_IN)

    const handleSubmit = async (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        try {
            const { data: { login: { token, user } }} = await login({
                variables: {
                    ...loginData
                }
            })
            console.log(token, user)
            auth.login(token)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '95vh', marginTop: '5vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockRounded />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={loginData.email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setLoginData({
                                    ...loginData,
                                    email: e.target.value
                                })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={loginData.password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setLoginData({
                                    ...loginData,
                                    password: e.target.value
                                })}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}