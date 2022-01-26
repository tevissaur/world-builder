import React from "react"
import DashboardLayout from "./DashboardLayout"
import { } from '@mui/material'
import MainNav from '../components/MainNav'
import { } from '@mui/material/styles';
import WikiPageLayout from "./WikiPageLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'





const MainLayout = () => {



    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<MainNav main={<DashboardLayout />} />} />
                    <Route path="/wiki" element={<MainNav main={<WikiPageLayout />} />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainLayout