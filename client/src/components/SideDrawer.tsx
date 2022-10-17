import React, { useEffect } from "react"
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListItemText from '@mui/material/ListItemText'
import { Link as ReactLink } from 'react-router-dom'
import auth from '../utils/auth'
import DrawerHeader from "./DrawerHeader"
import HomeMax from '@mui/icons-material/HomeMax'
import InputBase from '@mui/material/InputBase';
import styled from '@mui/material/styles/styled'
import { RootState } from "../utils/store"
import { useDispatch, useSelector } from "react-redux"
import { setOpenWorld } from "../utils/slices/worldSlice"
import { useLazyGetWorldQuery } from "../services/worldMakerApi.service"


const drawerWidth = 240;


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: 3,
    zIndex: 0,
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
    const { ui: { drawerOpen, sideDrawerLinks }, world: { openWorld, worlds } } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const [getWorld, { isLoading, data, isError }] = useLazyGetWorldQuery()

    const handleWorldChange = async (event: SelectChangeEvent) => {
        try {
            await getWorld(event.target.value)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (!isError && !isLoading) {
            dispatch(setOpenWorld(data))
        }
    }, [ isLoading, data, isError])



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
                        {openWorld?.name != undefined ? (
                        <Select
                            id='world-select'
                            label="Open World"
                            defaultValue={openWorld.name}
                            inputProps={{ 'aria-label': 'controlled' }}
                            input={<BootstrapInput />}
                            onChange={(e) => handleWorldChange(e)}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        left: '1px!important'
                                    },
                                },
                            }}
                        >
                            {worlds?.map((world, i) => (
                                <MenuItem 
                                    key={world.name}
                                    value={world.name}
                                    >
                                    {world.name}
                                </MenuItem>
                            ))}
                        </Select>) : (<></>)}
                        

                    </FormControl>
                    <List>
                        {sideDrawerLinks.map(link => (
                            <Link
                                component={ReactLink}
                                to={link.destUrl}
                                underline='none'
                                color='white'
                                key={link.destUrl}
                            >
                                <SideNavListItem sx={{ borderBottom: '1px solid #EAEDD4' }}>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <HomeMax />
                                    </ListItemIcon>

                                    <ListItemText primary={link.displayText} />
                                </SideNavListItem>
                            </Link>
                        ))}
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