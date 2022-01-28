
import React from "react"
import { Box, Container } from '@mui/material'
import auth from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom'


const Dashboard = () => {

    return (<Outlet />);
}


export default Dashboard