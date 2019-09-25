
module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('<html><head></head><body><h1> Cliengo Challenge </h1></body></html>')
    });
}