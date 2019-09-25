

module.exports = function(app) {

    app.use('/', (req, res, next) => {
        if(req.header('token') != 123456789) {
            console.log('error');
            return res.status(401).json({ msg: "El token no es válido."});
        }
            
        next();
    });

};