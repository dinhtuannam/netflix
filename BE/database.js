const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: process.env.DATANAME
})

conn.connect((err)=>{
    if(err){
        console.log('err connect',err);
    }
    else{
        console.log('connect success');
    }
})



module.exports = conn