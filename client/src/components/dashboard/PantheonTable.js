import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Grid } from "@mui/material";
// import Delete from '@mui/icons-material/Delete'
// import DeleteForeverTwoTone from '@mui/icons-material/DeleteForeverTwoTone'
// import FilterList from '@mui/icons-material/FilterList'
// import { visuallyHidden } from '@mui/utils'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store from "../../utils/store";
import TitleBanner from "../TitleBanner";


const PantheonTable = () => {
    const { world: { openWorld } } = store.getState()


    return (
        <>
            <TitleBanner image={testImg} title={`Pantheons of ${openWorld.name}`} />
            <Grid container justifyContent='center' spacing={3}>
                {/* <Card display='flex' justifyContent='flex-start' flexWrap='wrap' flexDirection='col' >
                
            </Card> */}
                <Grid item xs={12} sm={11} md={10} lg={8}>
                    {openWorld.religions?.map((religion) => (

                        <TableContainer
                            component={Paper}
                            key={religion._id}
                            sx={{
                                margin: '20px auto',
                            }}
                        >
                            <Table
                                sx={{
                                    minWidth: '200px'
                                }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="center"
                                            colSpan={5}
                                        >

                                            <Typography
                                                fontSize={24} fontFamily='Arial' textAlign='center'
                                                width='100%'
                                                margin='auto'
                                            >
                                                {religion.name}

                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            Names
                                        </TableCell>
                                        <TableCell align="left">
                                            Alignment
                                        </TableCell>
                                        <TableCell align="left">
                                            Domains
                                        </TableCell>
                                        <TableCell align="left">
                                            Symbol
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {religion.gods?.map((god) => (
                                        <TableRow
                                            key={Math.floor(Math.random() * 10000)}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" >
                                                <Typography variant="h6">
                                                    {god.name}
                                                </Typography>
                                                {god.description}
                                            </TableCell>
                                            <TableCell align="left">{god.alignment}</TableCell>
                                            <TableCell align="left">
                                                {god.domains.map((domain) => (
                                                    <Typography key={Math.floor(Math.random() * 10000)}>
                                                        {domain}
                                                    </Typography>
                                                ))}
                                            </TableCell>
                                            <TableCell align="left">{god.symbol}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ))}

                </Grid>
                {/* <Card display='flex' justifyContent='flex-end' flexWrap='wrap' flexDirection='col' >
               
            </Card> */}

            </Grid>

        </>
    );
}
export default PantheonTable