'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');
const { connect } = require('./koneksi');

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
    var ketersediaan = 'Tersedia';

    connection.query('INSERT INTO buku (judul, penulis, stock, ketersediaan) VALUES(?,?,?,?)',[judul,penulis,stock,ketersediaan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambah data!",res)
        }
    });
};

// Mengubah data berdasarkan id
exports.ubahBuku = function(req,res){
    var id = req.body.id;
    var judul = req.body.judul;
    var penulis = req.body.penulis;
    var stock = req.body.stock;
    var ketersediaan = req.body.ketersediaan;

    connection.query('UPDATE buku SET judul=?, penulis=?, stock=?, ketersediaan=? WHERE id=?', [judul, penulis, stock, ketersediaan, id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil mengubah data!",res)
        }
    });
};

// Menghapus data berdasarkan id
exports.hapusBuku = function(req,res){
    var id = req.body.id;

    connection.query('DELETE FROM buku WHERE id=?', [id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menghapus data!",res)
        }
    });
};