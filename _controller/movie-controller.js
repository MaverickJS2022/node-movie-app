const service = require('../_service/movie-service');

module.exports = {

    add: async function (ctx) {

        console.log("request");
        console.log(ctx);
        let status = 500;
        try {
            let response = await service.save(ctx.request.body);
            ctx.body = response;
        } catch (err) {
            console.log(err);
            ctx.throw(status);
        }
    },

    findById: async function (ctx) {
        let status = 500;
        try {
            let response = await service.listarPorId(ctx.params.id);
            if (response === null) {
                status = 404;
                ctx.throw();
            }
            ctx.body = response;
        } catch (err) {
            console.log(err);
            ctx.throw(status);
        }
    },

    findAll: async function (ctx) {
        let status = 500;
        let response = null;
        try {
            response = await service.listar();
            if (response === null) {
                status = 404;
                ctx.throw();
            }
            ctx.body = response;
        } catch (err) {
            console.log(err);
            ctx.throw(status);
        }
    },

    findPaginado: async function (ctx) {
        let status = 500;
        let response = null;
        try {
            response = await service.listarPaginado(ctx.params.page);
            if (response === null) {
                status = 404;
                ctx.throw();
            }
            ctx.body = response;
        } catch (err) {
            console.log(err);
            ctx.throw(status);
        }
    },

};