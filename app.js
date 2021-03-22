const express = require('express');
const app = express();
var connection = require('./koneksi');
const bodyParser = require('body-parser');
// file
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'));

// templating engine

app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// navigation
// app.get('/', (req, res) => {
//     res.render('index');
// });

var obj = {};
app.get('/', function(req, res){

    connection.query('SELECT * FROM buku', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {print: result};
            res.render('index', obj);                
        }
    });

});

app.get('/tambah', function(req, res){            
            res.render('tambah');
});

app.post('/tambahBuku', function(req, res){
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

});


app.post('/hapus', function(req, res){
    var id = req.body.id;

    connection.query('DELETE FROM buku WHERE id=?', [id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menghapus data!",res);
        }
    });
});

// listen port 5000
app.listen(5000, () => {
    console.log(`Server started on port`);
});