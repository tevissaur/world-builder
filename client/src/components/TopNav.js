import React from 'react';
import ProfileNavIcons from './ProfileNavIcons'
import { styled } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu'
import { AppBar as MuiAppBar, Toolbar, Box, Slide, Link, IconButton, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import auth from '../utils/auth';
import store from '../utils/store';
import { setDrawerOpen } from '../utils/actions';


const drawerWidth = 240;
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    background: theme.palette.primary.main,
    minHeight: '64px',
    zIndex: 999,
    transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0'
        },
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const NavLink = styled(Link)({
    fontSize: 18,
    fontFamily: 'Arial',
    textDecoration: 'none',
    marginRight: 2,
    color: 'white',
    alignSelf: "center",
    padding: '7.5px 10px',
    borderRadius: '3px',
    ':hover': {
        backgroundColor: '#614330'
    }
})

const TopNav = () => {
    const { world: { openWorld }, ui: { drawerOpen } } = store.getState()

    return (
        <HideOnScroll>

            <AppBar position="fixed" open={drawerOpen} sx={{ justifyContent: 'center' }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={() => store.dispatch(setDrawerOpen(!drawerOpen))}
                        edge="start"
                        sx={{
                            m: 1,
                            backgroundColor: 'darkgrey',
                            padding: '5.5px 7.5px',
                            borderRadius: '3px',
                            ':hover': {
                                backgroundColor: 'gray'
                            }
                        }}

                    >
                        <Menu />
                    </IconButton>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }} >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%'
                        }}>
                            <NavLink component={ReactLink} to="/home">
                                Home
                            </NavLink>
                            <NavLink component={ReactLink} to="/dashboard">
                                {openWorld?.name}
                            </NavLink>

                        </Box>
                        {auth.loggedIn() ? (
                            <ProfileNavIcons />
                        ) : (
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '100%'
                            }}>

                                <NavLink component={ReactLink} to='/log-in'>
                                    Log In
                                </NavLink>
                                <NavLink component={ReactLink} to='/sign-up'>
                                    Sign Up
                                </NavLink>
                            </Box>
                        )}


                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default TopNav