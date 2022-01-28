import React, { useState, useEffect } from 'react';
import ProfileNavIcons from './ProfileNavIcons'
import { styled, useTheme } from '@mui/material/styles';
import { Menu, InboxSharp, MailSharp, HomeMax } from '@mui/icons-material'
import { AppBar as MuiAppBar, Toolbar, Box, Typography, Slide, Drawer, List, Link, Divider, IconButton, ListItem, ListItemIcon, MenuItem, InputLabel, FormControl, Select, ListItemText, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import auth from '../utils/auth';

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

const AppBar = styled(MuiAppBar, {  shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));






export default function PersistentDrawerLeft({ main }) {
    const theme = useTheme();
    const { data: { _id } } = auth.getProfile()
    const [open, setOpen] = useState(true);
    const [openWorld, setOpenWorld] = useState('Aerden')
    const { data, loading, error } = useQuery(GET_ME, {
        variables: {
            id: _id
        }
    })

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true)
    };

    useEffect(() => {
        setOpenWorld(data?.me.world)
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
                                { openWorld.name }
                            </Link>
                            <ProfileNavIcons />

                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box', background: '#372B1B',
                        color: 'white'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>

                </DrawerHeader>
                <List>
                    <ListItem>
                        <FormControl variant='filled' sx={{ backgroundColor: "white" }} fullWidth>
                            <InputLabel sx={{ color: 'black' }} id="demo-simple-select-label">Change World</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={openWorld.name}
                                onChange={(e) => setOpenWorld(e.target.value)}
                            >
                                {data?.me.worlds.map((world) => {
                                    return (<MenuItem value={world.name}>{world.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </ListItem>
                    <Link component={ReactLink} to='/dashboard/create-new-world' underline='none' color='white' >
                        <ListItem button sx={{ borderBottom: '1px solid #EAEDD4' }}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <HomeMax />
                            </ListItemIcon>

                            <ListItemText primary="Create New World" />
                        </ListItem>
                    </Link>
                    <Link component={ReactLink} to='/dashboard' underline='none' color='white' >
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <HomeMax />
                            </ListItemIcon>

                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link component={ReactLink} to='/wiki/home' underline='none' color='white' >
                        <ListItem button sx={{ borderBottom: '1px solid #EAEDD4' }}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <HomeMax />
                            </ListItemIcon>

                            <ListItemText primary="World Wiki" />
                        </ListItem>
                    </Link>

                </List>
                <List>

                    <Link component={ReactLink} to='/dashboard' underline='none' color='white' >
                        <ListItem button>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <HomeMax />
                            </ListItemIcon>

                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                </List>

            </Drawer>
            <Main
                open={open}
            >
                {main}

            </Main>
        </Box >
    );
}