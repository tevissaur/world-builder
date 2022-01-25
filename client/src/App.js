import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';

import './sass/style.css';
import WikiPageLayout from './pages/WikiPageLayout';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/wiki" element={<WikiPageLayout />}>

          </Route>
        </Routes>
      </Router>
      
    </ApolloProvider>
  )
}


export default App