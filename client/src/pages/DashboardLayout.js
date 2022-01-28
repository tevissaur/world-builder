
import React from "react"
import { Box, Container } from '@mui/material'
import auth from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";


const Dashboard = ({ main, state }) => {
    if (!auth.loggedIn()) {
        window.location.pathname = '/'
    }

    // const dispatch = useDispatch()
    // const state = useSelector((state) => state)

    return (
        <>
            {/* <Box sx={{marginRight: '0', width: "100%", height: '100%', background: '#0E0A06', color: 'white', padding: '20px' }}>
                
            </Box> */}
            { main }
        </>
    );
}


export default Dashboard