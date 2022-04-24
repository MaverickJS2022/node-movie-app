const constantes = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect(constantes.connexionString, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('error', function (err) {
    console.log('--- error de conexion a la base de datos ---', err)
})

db.once('open', function () {
    console.log('--- conexion exitosa  a la base de datos ---')
})

exports.mongoose = mongoose;