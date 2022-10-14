import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './sass/style.css';
import { useDispatch, useSelector } from "react-redux";
import WorldRouter from './WorldRouter';

export const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});




function App() {




  return (
    <ApolloProvider client={client}>

      <WorldRouter />

    </ApolloProvider>
  )
}


export default App