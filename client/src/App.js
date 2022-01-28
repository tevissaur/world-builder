import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import logo from './logo.svg';

import './sass/style.css';
import MainLayout from './pages/MainLayout';
import { styled, useTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

import { createTheme } from '@mui/system';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});




function App() {
  

  return (
    <ApolloProvider client={client}>


        <MainLayout />

    </ApolloProvider>
  )
}


export default App