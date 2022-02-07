import React from "react"
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import ListItemText from '@mui/material/ListItemText'
import { Link as ReactLink } from 'react-router-dom'
import auth from '../utils/auth'
import DrawerHeader from "./DrawerHeader"
import HomeMax from '@mui/icons-material/HomeMax'
import store from "../utils/store"
import { setWorldAction } from "../utils/actions"
import InputBase from '@mui/material/InputBase';
import styled from '@mui/material/styles/styled'


const drawerWidth = 240;


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 3,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 20,
        textAlign: 'center',
        padding: '5px 26px 5px 6px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const SideNavListItem = styled(ListItem)({
    ':hover': {
        backgroundColor: 'black'
    }
})

const SideDrawer = () => {
    const { ui: { drawerOpen }, world: { worlds } } = store.getState()


    const handleWorldChange = async (id) => {
        console.log(id)
        try {
            store.dispatch(setWorldAction(worlds[id]))
        } catch (err) {
            console.log(err)
        }
    }



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
            <DrawerHeader />
            {auth.loggedIn() ? (
                <>
                    <FormControl fullWidth variant="standard">
                        <InputLabel
                            htmlFor="world-select"
                            sx={{ marginLeft: '5px', color: 'white', fontSize: '20px' }}>
                            Open World
                        </InputLabel>
                        <Select
                            id='world-select'
                            label="Open World"
                            defaultValue={0}
                            onChange={(e) => handleWorldChange(e.target.value)}
                            input={<BootstrapInput />}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        left: '1px!important'
                                    },
                                },
                            }}
                        >
                            {worlds?.map((world, itx) => (
                                <MenuItem
                                    id={itx}
                                    value={itx}
                                    key={world._id}
                                >
                                    {world.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <List>
                        <Link component={ReactLink} to='/dashboard/create-new-world' underline='none' color='white' >
                            <SideNavListItem button sx={{ borderBottom: '1px solid #EAEDD4' }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Create New World" />
                            </SideNavListItem>
                        </Link>
                        <Link component={ReactLink} to='/dashboard' underline='none' color='white' >
                            <SideNavListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Dashboard" />
                            </SideNavListItem>
                        </Link>
                        <Link component={ReactLink} to='/wiki/home' underline='none' color='white' >
                            <SideNavListItem button sx={{ borderBottom: '1px solid #EAEDD4' }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="World Wiki" />
                            </SideNavListItem>
                        </Link>



                        <Link component={ReactLink} to='dashboard/pantheon' underline='none' color='white' >
                            <SideNavListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Pantheon of Deities" />
                            </SideNavListItem>
                        </Link>
                        <Link component={ReactLink} to='dashboard/characters' underline='none' color='white' >
                            <SideNavListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Characters" />
                            </SideNavListItem>
                        </Link>
                        <Link component={ReactLink} to='dashboard/regions' underline='none' color='white' >
                            <SideNavListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Regions" />
                            </SideNavListItem>
                        </Link>
                        <Link component={ReactLink} to='dashboard/bestiary' underline='none' color='white' >
                            <SideNavListItem button>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    <HomeMax />
                                </ListItemIcon>

                                <ListItemText primary="Bestiary" />
                            </SideNavListItem>
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