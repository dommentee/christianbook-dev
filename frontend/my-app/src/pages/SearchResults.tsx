import React,{useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Product, SearchedProductResponse} from '../helpers/types'

const SearchResults = (props: any) => {
    const params = useParams<{id:string}>()//params will awalys have a string for id
    console.log(params);

    const [searchResults, setSearchResults] = useState<Product | null>(null)

    const searchProduct = (filter: any) => {
        axios.get('http://localhost:3003/products/' + filter )
        .then((response) => setSearchResults(response.data),
        (err) => console.error(err.message))
    }
    useEffect(() => {
        searchProduct(params.id)
    },[params])

    if(searchResults === null) {
        return <>404</>
    }
    
    return(
        <div className="container">
            <h3>Results page</h3>
           <h4>{searchResults.title}</h4>


            {/* <img src={props.SearchResults.image}/> */}

        </div>
    )
}
export default SearchResults