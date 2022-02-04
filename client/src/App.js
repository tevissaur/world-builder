import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './sass/style.css';
import { MainLayout, DashboardLayout, WikiPageLayout, LandingPage, SignInSide, SignUp } from './pages'
import { CharacterMain, CreateWorld, Main, PantheonTable } from './components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});




function App() {


  useDispatch()
  useSelector((state) => state)


  return (
    <ApolloProvider client={client}>


      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="home" element={<LandingPage />} />
            <Route path="log-in" element={<SignInSide />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="wiki/*">
              <Route index element={<WikiPageLayout />} />
              <Route path="home" element={<WikiPageLayout />} />
              <Route path="bestiary" element={<WikiPageLayout />} />
            </Route>
            <Route path="dashboard/*" element={<DashboardLayout />}>
              <Route index element={<Main />} />
              <Route path="create-new-world" element={<CreateWorld />} />
              <Route path="pantheon" element={<PantheonTable />} />
              <Route path="characters" element={<CharacterMain />} />
              <Route path="regions" element={<PantheonTable />} />
            </Route>


          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}


export default App