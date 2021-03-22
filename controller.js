'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi jalan",res)
};

// Menampilkan Data Buku
exports.tampilSemuaBuku = function(req,res){
    connection.query('SELECT * FROM buku', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

// Menambah Data Buku
exports.tambahBuku = function(req,res){
    var judul = req.body.judul;
    var penulis = req.body.penulis;
    var stock = req.body.stock;
    var kondisi = 'Tersedia';

    connection.query('INSERT INTO buku (judul, penulis, stock, kondisi) VALUES(?,?,?,?)',[judul,penulis,stock,kondisi],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambah data!",res)
        }
    });
};