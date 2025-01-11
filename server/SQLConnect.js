const mysql = require('mysql');
const MySQLObj = {
    host:"localhost",
    user:"root",
    password:"",
    database:"vue3_zxl"
}

const pool = mysql.createPool(MySQLObj);

function SQLConnect(sql, arr, callback){
    pool.getConnection((err, connection) => {
        if(err){
            console.log('连接失败');
            return;
        }
        connection.query(sql, arr, (err, result) => {
            //  释放连接
            connection.release();
            if(err){
                console.log('查询失败,报错原因：' + err);
                return;
            }
            callback(result);
        });
    });
}

module.exports = SQLConnect;