var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    tipo: {type: String, required: true, max: 20},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true, max:20},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('productos', ProductoSchema);
