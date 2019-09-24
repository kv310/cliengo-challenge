Planes = require('../models/planesModel');

module.exports = function(app) {

    app.get('/api/setupPlanes', (req, res) => {

        //seed database
        var starterPlanes = [
            {
                domain: "www.planes.com.ar",
                ownerId: 123456789,
                plan: 'BRONCE',
                labels: ["PRIVATE", "UPDATED"]                
            }
        ];

        Planes.create(starterPlanes, (err, results) => {
            if(err) throw err;

            res.send(results);
        });

    })

}