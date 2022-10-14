import React from 'react';
import ProfileNavIcons from './ProfileNavIcons'
import { styled, useTheme } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu'
import { AppBar as MuiAppBar, Toolbar, Box, Slide, Link, IconButton, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import auth from '../utils/auth';
import store, { RootState } from '../utils/store';
import { setDrawerOpen } from '../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../utils/slices/uiSlice';


const drawerWidth = 240;

const navLinkStyle = {
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
}

export const NavLink = ({ to, text, visible = true }: { to: string; text: string; visible?: boolean; }) => {
    return (
        <Link
            component={ReactLink}
            to={to}
            sx={{
                display: visible ? 'flex' : 'none',
                ...navLinkStyle
            }}>
            {text}
        </Link>
    )
}

const TopNav = () => {

    const theme = useTheme()
    const { world: { openWorld }, ui: { drawerOpen } } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    return (

        <MuiAppBar
            position="fixed"
            sx={{
                justifyContent: 'center',
                background: theme.palette.primary.main,
                minHeight: '64px',
                zIndex: 999,
                marginLeft: `${drawerOpen ? drawerWidth : 0}`,
                width: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
                transition: theme.transitions.create(['width'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.leavingScreen,
                })
            }}>
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    onClick={() => dispatch(toggleDrawer())}
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
                        <NavLink to="/home" text='Home' />
                        <NavLink to="/dashboard" visible={openWorld?.name != undefined} text={`${openWorld?.name}`} />

                    </Box>
                    {auth.loggedIn() ? (
                        <ProfileNavIcons />
                    ) : (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%'
                        }}>

                            <NavLink to='/log-in' text='Log In' />
                            <NavLink to='/sign-up' text='Sign Up' />
                        </Box>
                    )}


                </Box>
            </Toolbar>
        </MuiAppBar>
    )
}

export default TopNav