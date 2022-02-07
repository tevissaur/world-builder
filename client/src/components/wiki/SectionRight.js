import React from "react";
import Box from "@mui/material/Box";
import styled from '@mui/material/styles/styled'



export default function SectionRight(props) {



    return (
        <Box component='section' className="main-page-right">
            <article className="article-container">
                <h1 className="article-title">
                    Welcome to the DMs Guide to Forene!
                </h1>
                <p>
                    This site will tell you everything you need to know about this campaign setting. Cities
                    to start in, sites to go see, and fantastical creatures to meet.
                </p>
            </article>
        </Box>
    )
}