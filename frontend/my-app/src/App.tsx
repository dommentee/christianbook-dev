//dependecies 
//axios/@types/axios


//create header
//create form filed for search
//connect submit with get route
//display product if any
//try not to pass props to routes.. beaces data be still be present


//id to test "705255",820657  

import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
//types for type checking 
import {Product, SearchedProductResponse} from './helpers/types'
import './App.scss';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import SearchBar from './components/Searchbar';

//set api 
const API = 'http://localhost:3003/products/'
const App = () =>  {
  //setting state for input
  let [searchInput, setSearchInput] = useState('')
  //state of search results 
  const [searchResults, setSearchResults] = useState<Product>()  

  //handle search
  // const handleSearch = (e: any) => {
  //   e.preventDefault()
  //   searchRequest(`${searchInput}`)
  //   console.log(searchResults);
  // }

  useEffect(() => {
    // getProducts()
  },[searchResults])



  return (
  
    <div className="app">
        <div className='header'>
          <Link to="/"><div className='homebutton'>Christianbook</div></Link>
          {/* <SearchBar handleSearch={handleSearch}/>//not working */}
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search/:id' element={<SearchResults />}></Route>

 
        </Routes>

    </div>
  );
}

export default App;
