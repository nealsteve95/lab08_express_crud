var mongoose = require('mongoose');
var Usuario = require("../models/usuario");

var usuarioController = {};

usuarioController.list = function(req, res){
    
    Usuario.find({}).exec()
    .then(usuarios => {
        console.log("The INDEX");
        res.render('../views/usuario/index', {usuarios: usuarios,titulo:'INDEX'} );
    })
    .catch(err => {
        console.log('Error: ', err);
    });
    
};

usuarioController.show = function(req, res){

    Usuario.findOne({ _id: req.params.id }).exec()
    .then(usuario => {
      res.render('../views/usuario/show', { usuario: usuario });
    })
    .catch(err => {
      console.log('Error: ', err);
    }); 
     
};

usuarioController.create = function(req, res){
    res.render('../views/usuario/create');
};

usuarioController.save = function(req, res){
    var usuario = new Usuario( req.body );
    
    usuario.save()
    .then(() => {
      console.log("Successfully created a usuario. :)");
      res.redirect("/usuarios/show/" + usuario._id);
      //res.redirect("/usuarios");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  
};

usuarioController.edit = function(req, res) {
  Usuario.findOne({_id: req.params.id}).exec()
  .then(usuario => {
    res.render("../views/usuario/edit", {usuario: usuario});
  })
  .catch(err => {
    console.log("Error:", err);
  })
};

usuarioController.update = function(req, res){
    Usuario.findByIdAndUpdate(req.params.id, {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          estado: req.body.estado
        }
    }, { new: true })
    .then(usuario => {
        console.log(usuario);
        res.redirect('/usuarios/show/' + usuario._id);
    })
    .catch(err => {
        console.log('Error: ', err);
        res.render('../views/usuario/edit', { usuario: req.body });
    });
};

usuarioController.delete = function(req, res){
    
    Usuario.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Usuario deleted!");
      res.redirect("/usuarios");
    })
    .catch(err => {
      console.log('Error: ', err);
    });
    
};

module.exports = usuarioController;
