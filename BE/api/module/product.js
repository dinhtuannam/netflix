const mysql= require('../../database');

const db={};

db.selectAll = () =>{
    return new Promise((resolve,reject)=>{
        const sqlQuery = 'Select * from sanpham';
        mysql.query(sqlQuery,'',(err,results)=>{
            if(err){
                console.log(err);
                return reject(err);
            }
            mysql.end();
            return resolve(results);
        })
    })
}

db.getUser = () =>{
    return new Promise((resolve,reject)=>{
        const sqlQuery = 'Select * from taikhoan';
        mysql.query(sqlQuery,'',(err,results)=>{
            if(err){
                console.log(err);
                return reject(err);
            }
            mysql.end();
            return resolve(results);
        })
    })
}

db.login = (data) =>{
    return new Promise((resolve,reject)=>{
        const sqlQuery = `Select * from taikhoan where tendangnhap = '${data.name}' and matkhau = '${data.password}' `;
        mysql.query(sqlQuery,'',(err,results)=>{
            if(err){
                console.log(err);
                return reject(err);
            }
            mysql.end();
            if(results.length > 0){
                return resolve(true)
            }
            else{
                return resolve(false)
            }
        })
    })
}
module.exports = db