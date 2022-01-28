import React from "react"
import DashboardLayout from "./DashboardLayout"
import { } from '@mui/material'
import MainNav from '../components/MainNav'
import { } from '@mui/material/styles';
import WikiPageLayout from "./WikiPageLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import SignInSide from "./SignIn";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { CreateWorld, Main } from '../components/dashboard'





const MainLayout = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/log-in" element={<SignInSide />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    
                    <Route path="/dashboard" element={<MainNav main={<DashboardLayout main={<Main />} tools={state} />} />} />
                    <Route path="/dashboard/create-new-world" element={<MainNav main={<DashboardLayout main={<CreateWorld />} />} />} />
                    <Route path="/dashboard" element={<MainNav main={<DashboardLayout />} />} />
                    <Route path="/dashboard" element={<MainNav main={<DashboardLayout />} />} />
                    <Route path="/dashboard" element={<MainNav main={<DashboardLayout />} />} />

                    <Route path="/wiki">
                        <Route path="home" element={<MainNav main={<WikiPageLayout  />} />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MainLayout