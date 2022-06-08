import React, {useState} from "react";
import { useNavigate} from 'react-router-dom'

const SearchBar = (props: any) => {
    const [searchInput, setSearchInput] = useState('')
    return(
        <form onSubmit={props.handleSearch} className="search-form">
            <input
                type="search" onChange={(e:any) => setSearchInput(e.target.value)}
                className="search-input"
                placeholder='search product'
                value={searchInput}
            />
            <input type="submit" value="search" className='search-button'/>
        </form>
    )
}
export default SearchBar