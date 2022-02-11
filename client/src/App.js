import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './sass/style.css';
import { MainLayout, DashboardLayout, WikiPageLayout, LandingPage, SignInSide, SignUp } from './pages'
import { CharacterMain, CreateWorld, Main, PantheonTable } from './components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import SingleCharacter from './components/dashboard/SingleCharacter';
import CreateCharacter from './components/dashboard/CreateCharacter';
import CreateReligion from './components/dashboard/CreateReligion';
import SingleReligion from './components/dashboard/SingleReligion'
import GodsMain from './components/dashboard/SingleGod';
import CreateGod from './components/dashboard/CreateGod';
import RegionsMain from './components/dashboard/RegionsMain';

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
            <Route path="dashboard/*">
              <Route index element={<Main />} />
              <Route path="create-new-world" element={<CreateWorld />} />
              <Route path="create-new-religion" element={<CreateReligion />} />
              <Route path="create-new-god" element={<CreateGod />} />
              <Route path="create-new-character" element={<CreateCharacter />} />
              <Route path="pantheon" element={<PantheonTable />} />
              <Route path="characters" element={<CharacterMain />} />
              <Route path="regions" element={<RegionsMain />} />
              <Route path="bestiary" element={<PantheonTable />} />
            </Route>
            <Route path="religion/:id" element={<SingleReligion />}/>
            <Route path="character/:_id" element={<SingleCharacter />} />
            <Route path="god/:_id" element={<GodsMain />} />


          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}


export default App