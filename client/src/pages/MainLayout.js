import React, { useState, useEffect } from "react"
import { Box } from '@mui/material'
import { } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_ME, GET_USER_WORLDS, GET_WORLD } from '../utils/queries'
import auth from '../utils/auth';
import { styled } from '@mui/material/styles';
import TopNav from "../components/TopNav";
import SideDrawer from "../components/SideDrawer";
import store from '../utils/store'
import { setWorldAction, setWorldsAction } from "../utils/actions";

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
    const { drawerOpen } = store.getState()
    const state = store.getState()
    const { data, loading, error } = useQuery(GET_ME, {
        variables: {
            id: _id
        }
    })
    const { data: worldData, loading: worldLoading, error: worldError } = useQuery(GET_USER_WORLDS, {
        variables: {
            creator: _id
        }
    })



    useEffect(() => {
        if (error) {
            console.log(error)
        } else {

            loading ? console.log(loading) : store.dispatch(setWorldAction(data?.me.worlds[0]))
    
            console.log(worldData)
            worldLoading ? console.log(worldLoading) : store.dispatch(setWorldsAction(worldData.userWorlds))
        }
    }, [data, loading, _id, worldLoading, worldData])

    useEffect(() => {
        console.log(state)
    }, [drawerOpen])

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <TopNav />
                <SideDrawer />

                <Main
                    open={drawerOpen}
                >
                    <Outlet />
                </Main>
            </Box>
        </>
    )
}

export default MainLayout