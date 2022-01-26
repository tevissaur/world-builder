
import React from "react"
import { Box, Container } from '@mui/material'


const Dashboard = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
            <Box sx={{marginRight: '0', width: "100%", height: '100%', background: '#0E0A06', color: 'white', padding: '20px' }}>
                
            </Box>
    );
}


export default Dashboard