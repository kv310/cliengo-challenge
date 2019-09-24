var Planes = require('../models/planesModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended: true }));

    app.get('/api/websites/:id', (req, res) => {
        if(req.header('token') != 123456789) {
            res.send(401);
            return;
        } 

        Planes.findById({ _id: req.params.id }, (err, planes) => {
            if(err) throw err;

            res.send(planes);
        });                                                                                                                                 
    });

    app.post('/api/websites', (req, res) => {
        if(req.header('token') != 123456789) {
            res.send(401);                          
            return;
        }

        if (req.                body.id) {
            Planes.findByIdAndUpdate(req.body.id, {
                domain: req.body.domain,
                ownerId: req.body.ownerId,
                plan: req.body.plan,
                labels: req.body.labels
            }, (err, plan) => {
                debugger;
                if(err) throw err;

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