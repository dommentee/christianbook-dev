import express from 'express'
import fs from 'fs'// to file system
import path from 'path'//to set specific path for the route
//to use express router
const router = express.Router()

//typescript class for products
//outlines data type of each item in records
interface ProductRecord {
    title: string,
    isbn13: string,
    isbn: string,
    image: string,
    id: string,
    link: string,
    customer_rating: number
}

interface ProductsFile {//
    records: ProductRecord[]//is an array of products
}



//get route
router.get('/:id', (req,res) => {
    const {id} = req.params;//setting the peramters I want 
    //read json file
    //reference https://www.geeksforgeeks.org/creating-a-simple-json-based-api-using-node-js/
    const file = fs.readFileSync(path.resolve()+'/resources/products.json', 'utf-8') //to read file in utf-8 format
    const data = JSON.parse(file) as ProductsFile// reads as json object
    //for statement to loop through each proct till id matches 
    for(let i = 0; i < data.records.length; i++) {
        if(data.records[i].id === id) {
            res.json(data.records[i])//respond with data
            return//end loop 
        }
        //if no reconrds are found 
        res.status(404).end()
    }


})


export default router


