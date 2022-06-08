import React,{useState} from "react";
import { useNavigate} from 'react-router-dom'
// import '/App.scss'

const Home = (props: any)=> {

  // const navagate = useNavigate()
  // let [searchInput, setSearchInput] = useState('')
  // const handleSearch = (e: any) => {
  //   e.preventDefault()
  //   navagate('/search/' + searchInput)
  // }
  return (
    <div className="container">
      <h4>Home</h4>

      {/* <form onSubmit={handleSearch} className="search-form">
        <input
          type="search" onChange={(e: any) => setSearchInput(e.target.value)}
          className="search-input"
          placeholder='search product'
          value={searchInput}
        />
        <input type="submit" value="search" className='search-button'/>
      </form> */}
    </div>
   )
}

export default Home