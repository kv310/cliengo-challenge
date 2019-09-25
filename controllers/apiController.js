var express = require('express');
var Planes = require('../models/planesModel');

module.exports = function(app) {

    app.use(express.json({ extended: true }));

    app.get('/api/websites/:id', (req, res) => {
        
        Planes.findById({ _id: req.params.id }, (err, planes) => {
            if(err) {
                console.log(err);
                throw err;  
            } 

            res.send(planes);
        });                                                                                                                                 
    });

    app.post('/api/websites', (req, res) => {
        
        if (req.body.id) {
            Planes.findByIdAndUpdate(req.body.id, {
                domain: req.body.domain,
                ownerId: req.body.ownerId,
                plan: req.body.plan,
                labels: req.body.labels
            }, (err, plan) => {
                debugger;
                if(err) {
                    console.log(err);
                    throw err;
                }

                res.send('Plan Actualizado!');
            });
        }

        else {
            var newPlan = Planes({
                domain: req.body.domain,
                ownerId: req.body.ownerId,
                plan: req.body.plan,
                labels: req.body.labels 
            });
            
            newPlan.save((err, plan) => {
              if(err) throw err;
              res.send('Plan Creado!');
            });

        }

    });

    app.delete('/api/websites', (req, res) => {
        Planes.findByIdAndRemove(req.body.id, (err) => {
            if(err) throw err;
            res.send('Plan Eliminado');
        })
    });

}