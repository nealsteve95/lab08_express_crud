var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correo: {type: String, required: true},
    fecha_nacimiento: {type: String, required: true},
    sexo: {type: String, required: true},
    edad: {type: Number, required: true},
    
});

module.exports = mongoose.model('empleados', EmpleadoSchema);