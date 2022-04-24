const Movie = require('../_model/movie');

module.exports = {

    save: function (body) {
        let respuesta = null;
        let movie = new Movie({
            title:body.title,
            year:body.year,
            released:body.released,
            genero:body.genero,
            director:body.director,
            actors:body.actors,
            plot:body.plot,
            ratings:body.ratings
        });
        movie.save();
        respuesta = movie._id;
        return respuesta;

    },

    listarPorId: function (id) {
        return Movie.findById(id);
    },

    listar: function () {
        return Movie.find().sort({name:"asc"});
    },

    listarPaginado: function (page) {
        const resultadoPorPagina = 5;
        let pageActual = page >= 1 ? page : 1;
        pageActual = pageActual-1;
        return Movie.find()
                    .sort({name:"asc"})
                    .limit(resultadoPorPagina)
                    .skip(resultadoPorPagina * pageActual);
    }
};