'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilSemuaBuku);

    app.route('/tambah')
    .post(jsonku.tambahBuku);

    app.route('/ubah')
    .put(jsonku.ubahBuku);

    app.route('/hapus')
    .delete(jsonku.hapusBuku);

    app.get('/test', (req, res) => {
        res.render('index');
    });
}