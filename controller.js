'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi jalan",res)
};

// Menampilkan Data Perpus
exports.tampilSemuaBuku = function(req,res){
    connection.query('SELECT * FROM buku', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};