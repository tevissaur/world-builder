import React, { useState, useEffect } from 'react';
import ProfileNavIcons from './ProfileNavIcons'
import { styled } from '@mui/material/styles';
import { Menu, HomeMax } from '@mui/icons-material'
import { AppBar as MuiAppBar, Toolbar, Box, Slide, Drawer, List, Link, IconButton, ListItem, ListItemIcon, MenuItem, InputLabel, FormControl, Select, ListItemText, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import auth from '../utils/auth';
import SideDrawer from './SideDrawer';
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
    background: '#201209',
    transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const TopNav = () => {
    const { openWorld, drawerOpen } = store.getState()
    const state = store.getState()


    return (
        <HideOnScroll>

            <AppBar position="fixed" open={drawerOpen} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => store.dispatch(setDrawerOpen(!drawerOpen))}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                            <Link component={ReactLink} to="/home"
                                fontSize={18}
                                fontFamily='Arial'
                                underline="none"
                                marginRight={2}
                                color='white'
                                alignSelf="center"
                                className="nav-button"
                                paddingX={1}
                                paddingY={0.4}
                                borderRadius={0.75}
                            >
                                Home
                            </Link>
                            <Link component={ReactLink} to="/dashboard"
                                fontSize={18}
                                fontFamily='Arial'
                                underline="none"
                                marginRight={2}
                                color='white'
                                alignSelf="center"
                                className="nav-button"
                                paddingX={1}
                                paddingY={0.4}
                                borderRadius={0.75}
                            >
                                {openWorld.name}
                            </Link>

                        </Box>
                        {auth.loggedIn() ? (
                            <ProfileNavIcons />
                        ) : (
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>

                                <Link component={ReactLink} to='/log-in' fontSize={18}
                                    fontFamily='Arial'
                                    underline="none"
                                    marginRight={2}
                                    color='white'
                                    alignSelf="center"
                                    className="nav-button"
                                    paddingX={1}
                                    paddingY={0.4}
                                    borderRadius={0.75}
                                >
                                    Log In
                                </Link>
                                <Link component={ReactLink} to='/sign-up' fontSize={18}
                                    fontFamily='Arial'
                                    underline="none"
                                    marginRight={2}
                                    color='white'
                                    alignSelf="center"
                                    className="nav-button"
                                    paddingX={1}
                                    paddingY={0.4}
                                    borderRadius={0.75}
                                >
                                    Sign Up
                                </Link>
                            </Box>
                        )}


                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default TopNav