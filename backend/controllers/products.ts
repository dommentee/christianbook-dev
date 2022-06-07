import express from 'express'
import fs from 'fs'// to file system
import path from 'path'//to set specific path for the route
//to use express router
const router = express.Router()

//typescript class for products

//get route
router.get('/:id', (req,res) => {
    const id = req.params;

})



