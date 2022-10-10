const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser= require('body-parser')
require('dotenv').config();

const port=3000
const mysql = require('./database')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    // res.header('Access-Control-Allow-Origin','*');
    // res.header('Access-Control-Allow-Header','Origin, X-Requested-With, Content-type, Accept, Authorization');
    // if(req.method === "OPTIONS"){
    //     res.header('Access-Control-Allow-Method','PUT, POST, PATCH, DELETE, GET');
    //     return res.status(200).json({});

    // }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.use('/api',require('./api/routes/product'))


app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({message: error})
})

app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});

module.exports = app;