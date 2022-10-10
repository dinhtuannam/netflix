const express = require('express')
const router = express.Router();

const products = require('../module/product')

router.get('/products',async(req,res,next)=>{
    const data = await products.selectAll();
    res.status(200).json({
        message:"product api",
        data:data
    })
})

router.get('/users',async(req,res,next)=>{
    const data = await products.getUser();
    res.status(200).json({
        message:"user api",
        data:data
    })
})

router.post('/login',async(req,res,next)=>{
    const data = req.body
    const response = await products.login(data)
    res.status(200).json({
        message:"login api",
        data:response
    })
})

module.exports = router