import React from "react";
import TitleBanner from "../TitleBanner";

import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from "../../utils/store";
// import { Box, Button, Container, Grid } from '@mui/material'

const Main = () => {
    const { world: { openWorld } } = store.getState()

    return (
        <>
          <TitleBanner image={testImg} title={`${openWorld.name} Dashboard`} />  
        </>
    )
}

export default Main