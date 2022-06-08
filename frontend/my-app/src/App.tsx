//dependecies 
//axios/@types/axios


//create header
//create form filed for search
//connect submit with get route
//display product if any


//id to test "705255", 705071

import React, {useEffect, useState} from 'react';
import axios from 'axios'
//@ts-ignore
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//types for type checking 
import {Product, SearchedProductResponse} from './helpers/types'
import './App.scss';

//set api 
const API = 'http://localhost:3003/products/'
const App = () =>  {
  //setting state for input
  const [searchInput, setSearchInput] = useState('')
  //state of search results 
  const [searchResults, setSearchResults] = useState<SearchedProductResponse>()

  //state of product 
  const [product, setProduct] = useState(null as any)

  //search route 
  const searchRequest = async (filter:any) => {
    const response = await axios.get(API + filter)
    setSearchResults(response.data)
    return response.data
  } 

  //handle search
  const handleSearch = (e: any) => {
    e.preventDefault()
    searchRequest(`${searchInput}`)
    
    console.log(searchResults);
  }

  useEffect(() => {
  },[searchResults])


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
