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

// Mengubah data berdasarkan id
exports.ubahBuku = function(req,res){
    var id = req.body.id;
    var judul = req.body.judul;
    var penulis = req.body.penulis;
    var stock = req.body.stock;
    var kondisi = req.body.kondisi;

    connection.query('UPDATE buku SET judul=?, penulis=?, stock=?, kondisi=? WHERE id=?', [judul, penulis, stock, kondisi, id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil mengubah data!",res)
        }
    });
};