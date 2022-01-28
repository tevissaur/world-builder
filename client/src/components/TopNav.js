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
        easing: theme.transitions.easing.sharp,
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

const TopNav = ({ open, setOpen }) => {


    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true)
    };

    return (
        <HideOnScroll>

            <AppBar position="fixed" open={open} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                        <Link component={ReactLink} to="/dashboard" variant="h6" underline="none" color='white' alignSelf="center">
                            Aerden
                        </Link>
                        {auth.loggedIn() ? (
                            <ProfileNavIcons />
                        ) : (
                            <Box alignSelf='center'>

                                <Link component={ReactLink} to='/log-in' underline='none' color='white' fontSize={18} fontFamily='Arial'>
                                    Log In
                                </Link>
                                <Link component={ReactLink} to='/sign-up' underline='none' color='white' fontSize={18} fontFamily='Arial' marginLeft={3}>
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