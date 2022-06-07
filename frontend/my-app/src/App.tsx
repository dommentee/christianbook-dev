//dependecies 
//axios/@types/axios


//create header
//create form filed for search
//connect submit with get route
//display product if any

import React, {useEffect, useState} from 'react';
import axios from 'axios'
//@ts-ignore
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//types for type checking 
import {Product} from './helpers/types'
import './App.scss';


//set api 
const API = 'http://localhost:3003'
const App = () =>  {
  //setting state for input
  const [searchInput, setSearchInput] = useState(null as any)

  //product route
  const getProduct = () => {

  }

  //handle search
  const handleSearch = () => {
    console.log('search activated');
    
  }
  return (
    <div className="app">
      <Router>
        <div className='header'>
          <Link to="/"><div className='homebutton'>Christianbook</div></Link>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="search" onChange={(e: any) => setSearchInput(e.target.value)}
              className="search-input"
              placeholder='search product'
              value={searchInput}
            />
            <input type="submit" value="search" className='search-button'/>
          </form>
        </div>

      </Router>
    </div>
  );
}

export default App;
