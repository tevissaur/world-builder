import React from "react"

import { gql, useQuery } from "@apollo/client";

import Nav from '../components/wiki/Nav';
import Header from '../components/wiki/Header'
// import Quote from '../components/wiki/Quote'
import SectionLeft from '../components/wiki/Section-Left'
import SectionRight from '../components/wiki/Section-Right'
import Footer from '../components/wiki/Footer'

const WikiPageLayout = (props) => {


    return (
        <>
            <main className="wiki-site-wrapper">
                <Nav />
                <Header />
                {/* <Quote /> */}
                <SectionLeft />
                <SectionRight />
                <Footer />
            </main>
        </>
    )
}


export default WikiPageLayout