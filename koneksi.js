var mysql = require('mysql');

//Buat Koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'perpustakaan'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');
});

module.exports = conn;