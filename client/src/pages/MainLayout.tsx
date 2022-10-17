import React, { useEffect } from "react"
import Box from '@mui/material/Box'
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries'
import auth from '../utils/auth';
import MainContainer from '../components/MainContainer'
import TopNav from "../components/TopNav";
import SideDrawer from "../components/SideDrawer";
import store, { RootState } from '../utils/store'
import { useDispatch, useSelector } from "react-redux";
import { setOpenWorld, updateWorlds } from "../utils/slices/worldSlice";
import { World } from "../interfaces/IWorld";
import { useGetMeQuery } from "../services/worldMakerApi.service";
import { setUserData } from "../utils/slices/userSlice";








const MainLayout = () => {
    const { data: { _id } } = auth.getProfile()
    const { ui: { drawerOpen } } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const state = store.getState()
    const { data, isLoading, isError } = useGetMeQuery(_id)




    useEffect(() => {
        if (!isLoading && !isError) {
            
            dispatch(updateWorlds(data.worlds))
            dispatch(setUserData(data))
            dispatch(setOpenWorld(data.worlds[0]))
        }
    }, [data, isLoading, isError])

    useEffect(() => {
        console.log(state)
    }, [drawerOpen, state])

    return (
        <Box sx={{ display: 'flex' }}>
            <TopNav />
            <SideDrawer />

            <MainContainer/>
        </Box>
    )
}

export default MainLayout