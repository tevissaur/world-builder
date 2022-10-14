import React from "react";
import { Box, Table, TableBody, Card, CardMedia, CardActionArea, CardContent, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Grid, Link } from "@mui/material";
import { Link as ReactLink } from "react-router-dom";
// import Delete from '@mui/icons-material/Delete'
// import DeleteForeverTwoTone from '@mui/icons-material/DeleteForeverTwoTone'
// import FilterList from '@mui/icons-material/FilterList'
// import { visuallyHidden } from '@mui/utils'
import testImg from '../../assets/205201-fantasy_art-landscape-arch.jpg'
import store, { RootState } from "../../utils/store";
import TitleBanner from "../TitleBanner";
import { useSelector } from "react-redux";


const PantheonTable = () => {
    const { world: { openWorld } } = useSelector((state: RootState) => state)


    return (
        <>
            <TitleBanner image={testImg} title={`Pantheons of ${openWorld?.name}`} />
            <Grid container justifyContent='space-between' spacing={2} >
                <Grid item xs={12} sm={12} md={12} lg={3}>

                    <Card sx={{ minWidth: 200, maxHeight: 350, margin: 2 }}>

                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            src={testImg}
                        />
                        <Link component={ReactLink} to='/dashboard/create-new-religion' underline="none">

                            <CardContent sx={{
                                backgroundColor: 'gray'
                            }}>
                                <Typography gutterBottom variant="h5" textAlign='center'>
                                    Create New Religion
                                </Typography>

                            </CardContent>
                        </Link>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} lg={9}>
                    {openWorld?.religions?.map((religion) => (

                        <TableContainer
                            component={Paper}
                            key={religion?._id}
                            sx={{
                                margin: 2,
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

                                            <Link
                                                component={ReactLink}
                                                fontSize={24}
                                                underline='none'
                                                to={`/dashboard/religion/${religion._id}`}
                                                fontFamily='Arial' textAlign='center'
                                                width='100%'
                                                margin='auto'
                                                sx={{
                                                    textShadow: '1px 2px 7px lightgray',
                                                    ':hover': {
                                                        textShadow: '2px 3px 5px gray'
                                                    }
                                                }}
                                            >
                                                {religion.name}

                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
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
                                    {religion?.gods?.map((god) => (
                                        <TableRow
                                            key={Math.floor(Math.random() * 10000)}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" >
                                                <Typography variant="h6">
                                                    <Link component={ReactLink} underline='none' sx={{
                                                        textShadow: '1px 1px 7px lightgray',
                                                        ':hover': {
                                                            textShadow: '2px 3px 5px gray',
                                                            
                                                        }
                                                    }} to={`/dashboard/god/${god._id}`}>
                                                        {god.name}
                                                    </Link>

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