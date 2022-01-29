import { List, ListItem } from "@mui/material";
import React from "react";
import store from "../../utils/store";
// import { Box, Button, Container, Grid } from '@mui/material'
// import store from "../../utils/store";

const Main = (props) => {
    const state = store.getState()

    return (
        <>
            THIS IS THE MAIN
            <List>
            {state.openWorld.regions?.map((region, itx) => {
                
                return (
                    <ListItem key={itx}>
                        {region.name}
                    </ListItem>
                )
            })}

            </List>
        </>
    )
}

export default Main