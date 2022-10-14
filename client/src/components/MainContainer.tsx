import React from 'react'
import Box from '@mui/material/Box'
import { Outlet } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';


const drawerWidth = 240;




const MainContainer = () => {
    const { ui: { drawerOpen } } = useSelector((state: RootState) => state)
    const theme = useTheme()

    return (
        <Box component={'main'} style={{
            flexGrow: 1,
            padding: 0,
            marginTop: '64px',
            zIndex: '0',
            marginLeft: `-${drawerOpen ? 0 : drawerWidth}px`,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.leavingScreen,
            })
        }}>
            <Outlet/>
        </Box>
    )
}

export default MainContainer