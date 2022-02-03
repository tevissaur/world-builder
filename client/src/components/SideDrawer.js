import React from "react"
import { AppBar as MuiAppBar, Toolbar, Box, Slide, Drawer, List, Link, IconButton, ListItem, ListItemIcon, MenuItem, InputLabel, FormControl, Select, ListItemText, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import ProfileNavIcons from './ProfileNavIcons'
import auth from '../utils/auth'
import { styled } from '@mui/material/styles';
import { Menu, HomeMax } from '@mui/icons-material'
import store from "../utils/store"


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const SideDrawer = () => {

    const { drawerOpen } = store.getState()


    return (
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
            open={drawerOpen}
        >
            <DrawerHeader>

            </DrawerHeader>
            {auth.loggedIn() ? (
                <>
                    <List>
                        {/* <ListItem>
                            <FormControl variant='filled' sx={{ backgroundColor: "white" }} fullWidth>
                                <InputLabel sx={{ color: 'black' }} id="demo-simple-select-label">Change World</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                    Aerden
                                </Select>
                            </FormControl>
                        </ListItem> */}
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

                        <Link component={ReactLink} to='dashboard/pantheon' underline='none' color='white' >
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Pantheon of Deities" />
                            </ListItem>
                        </Link>
                        <Link component={ReactLink} to='dashboard/characters' underline='none' color='white' >
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Characters" />
                            </ListItem>
                        </Link>
                        <Link component={ReactLink} to='dashboard/regions' underline='none' color='white' >
                            <ListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Regions" />
                            </ListItem>
                        </Link>
                    </List>
                </>
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

        </Drawer>
    )
}

export default SideDrawer