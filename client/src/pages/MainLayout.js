import React, { useEffect } from "react"
import Box from '@mui/material/Box'
import { Outlet } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import auth from '../utils/auth';
import MainContainer from '../components/MainContainer'
import TopNav from "../components/TopNav";
import SideDrawer from "../components/SideDrawer";
import store from '../utils/store'
import { setWorldAction, setWorldsAction } from "../utils/actions";








const MainLayout = () => {
    const { data: { _id } } = auth.getProfile()
    const { drawerOpen } = store.getState()
    const state = store.getState()
    const { data, loading, error } = useQuery(GET_ME, {
        variables: {
            id: _id
        }
    })
    // const { data: worldData, loading: worldLoading, error: worldError } = useQuery(GET_USER_WORLDS, {
    //     variables: {
    //         creator: _id
    //     }
    // })



    useEffect(() => {
        if (error) {
            console.log(error)
        } else {

            loading ? console.log(loading) : store.dispatch(setWorldAction(data?.me?.worlds[0]))

            console.log(data)
            loading ? console.log(loading) : store.dispatch(setWorldsAction(data?.me?.worlds))
        }
    }, [data, loading, _id, error])

    useEffect(() => {
        console.log(state)
    }, [drawerOpen, state])

    return (
        <Box sx={{ display: 'flex' }}>
            <TopNav />
            <SideDrawer />

            <MainContainer
                open={drawerOpen}
            >
                <Outlet />
            </MainContainer>
        </Box>
    )
}

export default MainLayout