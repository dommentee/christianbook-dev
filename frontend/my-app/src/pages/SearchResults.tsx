import React,{useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Product, SearchedProductResponse} from '../helpers/types'
import '../pages/searchresults.scss'

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
            <div className="product">
                <div className="product-cover">
                    <img src={searchResults.image} width='300'/>
                </div>
                <div className="product-info">
                    <p className="title">{searchResults.title}</p>
                    <p className="rating">Customer Rating: <span>{searchResults.customer_rating}</span></p>
                    <p>{searchResults.isbn13}</p>
                    <p>{searchResults.isbn}</p>
                    <p>{searchResults.isbn13}</p>

                    <a href={searchResults.link} target="_blank">buy now</a>
                </div>

            </div>
        </div>
    )
}
export default SearchResults