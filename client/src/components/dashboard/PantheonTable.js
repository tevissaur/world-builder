import React from "react";
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, FormControl, Switch, Container, Card } from "@mui/material";
import { Delete, DeleteForeverTwoTone, FilterList } from "@mui/icons-material";
import { visuallyHidden } from '@mui/utils'
import store from "../../utils/store";


const PantheonTable = () => {
    const state = store.getState()


    return (
        <Box display='flex' justifyContent='center' flexWrap='nowrap' maxWidth='100%'>
            
            <Card display='flex' justifyContent='flex-start' flexWrap='wrap' flexDirection='col' >
                
            </Card>
            <Box display='flex' justifyContent='center' flexWrap='wrap' flexDirection='col' >
                {state.openWorld.religions?.map((religion) => (

                    <TableContainer
                        component={Paper}
                        key={religion.name}
                        sx={{ marginBottom: 5, maxWidth: '70%' }}
                    >
                        <Table sx={{ minWidth: '200px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        colSpan={5}
                                    >

                                        <Typography fontSize={24} fontFamily='Arial' textAlign='center' width='100%' margin='auto'>
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
                                        key={god.name}
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
                                                <Typography>
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

            </Box>
            <Card display='flex' justifyContent='flex-end' flexWrap='wrap' flexDirection='col' >
               
            </Card>

        </Box>
    );
}
export default PantheonTable