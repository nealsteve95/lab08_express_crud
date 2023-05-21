var mongoose = require('mongoose');
var Empleado = require('../models/empleado');

var EmpleadoController = {};

EmpleadoController.list = function(req, res){
    
    Empleado.find({}).exec()
    .then(Empleados => {
        res.render('../views/empleado/index.hbs',{empleados: Empleados,titulo:'INDEX'});
    })
    .catch(err => {
        console.log('Error: ', err);
    });
    
};

EmpleadoController.show = function(req, res){
    Empleado.findOne({_id: req.params.id }).exec()
    .then(Empleados =>{
        res.render('../views/empleado/show.hbs', {empleados: Empleados});
    })
    .catch(err => {
        console.log('Error: ', err);
    });
};

EmpleadoController.create = function(req, res){
    res.render('../views/empleado/create');
};

EmpleadoController.save = function(req, res) {
    console.log(req);
        var empleado = new Empleado(req.body);
        empleado.save()
          .then((empleado) => {
            console.log("Succesfully created an empleado. :)");
            res.redirect("/empleados/show/" + empleado._id);
          })
          .catch(err => {
            console.log('Error: ', err);
          });
    };

EmpleadoController.edit = function(req, res) {
        Empleado.findOne({_id: req.params.id}).exec()
        .then(empleados => {
            res.render("../views/empleado/edit", {empleados: empleados});
        })
        .catch(err => {
            console.log("Error:", err);
        })
        };


EmpleadoController.update = function(req, res){
        Empleado.findByIdAndUpdate(req.params.id, {
                $set: {
                  nombre: req.body.nombre,
                  apellido: req.body.apellido,
                  correo: req.body.correo,
                  fecha_nacimiento: req.body.fecha_nacimiento,
                  sexo: req.body.sexo,
                  edad: req.body.edad

                }
            }, { new: true })
            .then(empleados => {
                console.log(empleados);
                res.redirect('/empleados/show/' + empleados._id);
            })
            .catch(err => {
                console.log('Error: ', err);
                res.render('../views/empleados/edit', { empleados: req.body });
            });
        };

EmpleadoController.delete = function(req, res){
    
        Empleado.deleteOne({ _id: req.params.id })
            .then(() => {
              console.log("Empleado deleted!");
              res.redirect("/empleados");
            })
            .catch(err => {
              console.log('Error: ', err);
            });
            
        };



module.exports = EmpleadoController;