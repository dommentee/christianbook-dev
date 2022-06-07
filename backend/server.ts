
//dependecies 
//express typescript @types/node ts-node
//npx tsc --init for for typesctipt version of nodemon
//@types/express 
//ts-node-dev
//npm run dev for nodemon

//get express server running
//make product.json file into a route

import express from 'express'
import productController from './controllers/products'

const app = express()
const PORT = 3003

app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is the back')
})
app.use('/products', productController)//setting produt route

app.listen(PORT, () => {
    console.log(`app is listening to 'http://localhost:${PORT}'`);
})