import React from 'react';
import { Route, Routes } from 'react-router-dom'

export default function Nav(props) {

  return (
    <>
      <Routes>
        <Route path="home">

        </Route>
      </Routes>
      <nav id="nav-bar">

        <img className="logo" src="/assets/border.png" alt="This is alt text" />

        <a className="world-name" href="/home">The Continent of Forene</a>


        <div className="nav-container">
          <div className="dropdown">
            <a href="/home"> Home </a>
          </div>
          <div className="dropdown">
            <a href="/bestiary"> Bestiary</a>

          </div>

          <div className="dropdown">
            <a href="/races">Races</a>
            <div className="dropdown-content">
              <a href="/wiki">Humans</a>
              <a href="/wiki">Dwarves</a>
              <a href="/wiki">Elves</a>
              <a href="/wiki">Orcs</a>
              <a href="/wiki">Gnomes</a>
              <a href="/wiki">Halflings</a>
              <a href="/wiki/races#hafies">Hafies</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/geography"> Geography</a>
            <div className="dropdown-content">
              <a href="/wiki">The Human Realms</a>
              <a href="/wiki">The Elven Domains</a>
              <a href="/wiki">The Dwarven Holds</a>
              <a href="/wiki">The Orcish Wastes</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/history">History</a>
          </div>
          <div className="dropdown">
            <a href="/pantheons"> Pantheons</a>
            <div className="dropdown-content">
              <a href="pantheons.html#">The Gods of the Empire</a>
              <a href="pantheons.html#">The Convent of the Commons</a>
              <a href="pantheons.html#">The Old Gods</a>
              <a href="pantheons.html#">Elven Gods</a>
              <a href="pantheons.html#">Dragon Gods</a>
              <a href="pantheons.html#">Orcish Gods</a>
              <a href="pantheons.html#">Dwarven Gods</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/organizations"> Organizations</a>
            <div className="dropdown-content">
              <a href="organizations.html#">The Black Order</a>
              <a href="organizations.html#">Sycamore Circle</a>
              <a href="organizations.html#">The Khelen Monestary</a>
              <a href="organizations.html#">Nobody</a>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}