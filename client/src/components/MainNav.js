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



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    marginTop: '64px',
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}),
);



export default function MainNav({ main }) {

    const { data: { _id } } = auth.getProfile()
    const [open, setOpen] = useState(true);
    const [openWorld, setOpenWorld] = useState({
        name: 'Aerden'
    })
    const { data, loading, error } = useQuery(GET_ME, {
        variables: {
            id: _id
        }
    })

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true)
    };

    useEffect(() => {
        // loading ? setOpenWorld()
        // setOpenWorld(data?.me.worlds[0])
        console.log(data)
        console.log(openWorld)
        // console.log(openWorld)
    }, [openWorld, data, loading])



    return (
        <Box sx={{ display: 'flex' }}>
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
                                {openWorld.name}
                            </Link>
                            <ProfileNavIcons />

                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <SideDrawer open={ open } />
            <Main
                open={open}
            >
                { main }

            </Main>
        </Box >
    );
}