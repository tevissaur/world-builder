import React from "react"
import Nav from '../components/wiki/Nav';
import Header from '../components/wiki/Header'
import Quote from '../components/wiki/Quote'
import SectionLeft from '../components/wiki/SectionLeft'
import SectionRight from '../components/wiki/SectionRight'
import Footer from '../components/wiki/Footer'
import Box from "@mui/material/Box";



const WikiPageLayout = () => {



    return (
        <Box component='section' className="wiki-site-wrapper">
            <Nav />
            <Header />
            <Quote />
            <SectionLeft />
            <SectionRight />
            <Footer />
        </Box>
    )
}


export default WikiPageLayout