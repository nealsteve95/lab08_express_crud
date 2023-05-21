var mongoose = require('mongoose');
var Producto = require('../models/Productos');

var ProductoController = {};

ProductoController.list = function(req, res){
    
    Producto.find({}).exec()
    .then(Productos => {
        res.render('../views/producto/index.hbs',{productos: Productos,titulo:'INDEX'});
    })
    .catch(err => {
        console.log('Error: ', err);
    });
    
};

ProductoController.show = function(req, res){
    Producto.findOne({_id: req.params.id }).exec()
    .then(productos =>{
        res.render('../views/producto/show.hbs', {productos: productos});
    })
    .catch(err => {
        console.log('Error: ', err);
    });
};

ProductoController.create = function(req, res){
    res.render('../views/producto/create');
};

ProductoController.save = function(req, res) {
    console.log(req);
        var producto = new Producto(req.body);
        producto.save()
          .then((producto) => {
            console.log("Succesfully created a producto. :)");
            res.redirect("/productos/show/" + producto._id);
          })
          .catch(err => {
            console.log('Error: ', err);
          });
    };

ProductoController.edit = function(req, res) {
    Producto.findOne({_id: req.params.id}).exec()
    .then(productos => {
        res.render("../views/producto/edit", {productos: productos});
    })
    .catch(err => {
        console.log("Error:", err);
    })
    };

ProductoController.update = function(req, res){
        Producto.findByIdAndUpdate(req.params.id, {
            $set: {
              nombre: req.body.nombre,
              tipo: req.body.tipo,
              precio: req.body.precio,
              descripcion: req.body.descripcion
            }
        }, { new: true })
        .then(productos => {
            console.log(productos);
            res.redirect('/productos/show/' + productos._id);
        })
        .catch(err => {
            console.log('Error: ', err);
            res.render('../views/producto/edit', { productos: req.body });
        });
    };


ProductoController.delete = function(req, res){
    
    Producto.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Usuario deleted!");
      res.redirect("/productos");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
    
};
    

module.exports = ProductoController;