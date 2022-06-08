
//dependecies 
//express typescript @types/node ts-node
//npx tsc --init for for typesctipt version of nodemon
//@types/express 
//ts-node-dev
//npm run dev for nodemon

//get express server running, npm start, npm run dev for developement
//make product.json file into a route

import express from 'express'
import productController from './controllers/products'
import path from 'path'
import cors, {CorsOptions} from 'cors'

const app = express()
const PORT = 3003
let whitelist = ['http://localhost:3000']
var corsOptions: CorsOptions = {
    credentials: true,
    origin: whitelist
}
app.use(cors(corsOptions));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is the back')
})
app.use('/products', productController)//setting produt route

app.listen(PORT, () => {
    console.log(`app is listening to 'http://localhost:${PORT}'`);
})