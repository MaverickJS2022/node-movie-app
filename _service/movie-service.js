const dao = require('../_dao/movie-dao');

module.exports = {
    save: function (body) {
        return dao.save(body);
    },

    listarPorId: function (id) {
        return dao.listarPorId(id);
    },

    listar: function () {
        return dao.listar();
    },

    listarPaginado: function (page) {
        return dao.listarPaginado(page);
    }

};