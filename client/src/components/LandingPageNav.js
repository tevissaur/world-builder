import React from "react"
import { Link as ReactLink } from "react-router-dom";
import ProfileNavIcons from '../components/ProfileNavIcons'
import { useScrollTrigger, Slide, AppBar as MuiAppBar, Toolbar, Link, Typography, styled } from '@mui/material'
import { Box } from "@mui/system";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(() => ({
    background: '#201209',
}));



const LandingPageNav = () => {

    return (
        <>

            <AppBar>
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Link component={ReactLink} to="/" variant="h5" alignSelf="center" underline="none" color='white'>
                            Welcome to Fantasy World Builder
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default LandingPageNav