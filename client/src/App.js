import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './sass/style.css';
import MainLayout from './pages/MainLayout';
import DashboardLayout from "./pages/DashboardLayout"
import WikiPageLayout from "./pages/WikiPageLayout";
import LandingPage from './pages/LandingPage'
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainNav from './components/MainNav'
import { CreateWorld, Main } from './components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});




function App() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state)


  return (
    <ApolloProvider client={client}>


      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="log-in" element={<SignInSide />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="wiki">
              <Route index element={<WikiPageLayout />} />
              <Route path="home" element={<WikiPageLayout />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<Main />} />
              <Route path="create-new-world" element={<CreateWorld />} />
            </Route>


          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}


export default App