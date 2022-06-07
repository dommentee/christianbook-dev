
//dependecies 
//express typescript @types/node ts-node
//npx tsc --init for for typesctipt version of nodemon
//@types/express 
//ts-node-dev
//npm run dev for nodemon

import express from 'express'


const app = express()
const PORT = 3003

app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is the back')
})

app.listen(PORT, () => {
    console.log(`app is listening to 'http://localhost:${PORT}'`);
})