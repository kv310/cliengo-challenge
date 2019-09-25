

module.exports = function(app) {

    app.use('/api', (req, res, next) => {
        if(req.header('token') != 123456789) {
            console.log('error');
            return res.status(401).json({ msg: "El token no es válido."});
        }
            
        next();
    });

};