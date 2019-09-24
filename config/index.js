var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@cluster0-5chir.mongodb.net/cliengodb?retryWrites=true&w=majority';
    }
}

