import React, { useState, useEffect } from "react"
import { Box } from '@mui/material'
import { } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import auth from '../utils/auth';
import { styled } from '@mui/material/styles';
import TopNav from "../components/TopNav";
import SideDrawer from "../components/SideDrawer";

const drawerWidth = 240;


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





const MainLayout = () => {
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


    useEffect(() => {
        // loading ? setOpenWorld()
        // setOpenWorld(data?.me.worlds[0])
        console.log(data)
        console.log(openWorld)
        // console.log(openWorld)
    }, [openWorld, data, loading])


    return (
        <Box sx={{ display: 'flex' }}>
            <TopNav open={open} setOpen={setOpen} />
            <SideDrawer open={open} />
            <Main
                open={open}
                sx={{ p: 3 }}
            >
                <Outlet />
            </Main>
        </Box>
    )
}

export default MainLayout