const router = require('koa-router')();
const constantes = require('../_config/config');
const movieController = require('../_controller/movie-controller');

const api = 'movies';

router.prefix(`/${constantes.baseApi}/${api}`);
router.get('/', movieController.findAll);
router.post('/', movieController.add);
router.get('/:id', movieController.findById);
router.get('/paginado/:page', movieController.findPaginado);

module.exports = router;

