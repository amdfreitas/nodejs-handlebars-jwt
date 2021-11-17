process.env.NODE_ENV = "produto";
const conf = require('config');
const mongoose = require('mongoose');

let conn = null;
const options = {
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

if (conf.util.getEnv('NODE_ENV') === "development") {
    const url = 'mongodb://' + conf.get('mongoo.user') + ':' + conf.get('mongoo.pass') + '@' + conf.get('mongoo.host') + ':' + conf.get('mongoo.port') + '/' + conf.get('mongoo.db') + '?authSource=admin';
    //console.log(url);
    conn = mongoose.connect(url,options);
} else {
    const url = 'mongodb://' + conf.get('produc_mongoo.user') + ':' + conf.get('produc_mongoo.pass') + '@' + conf.get('produc_mongoo.host') + ':' + conf.get('mongoo.port') + '/' + conf.get('produc_mongoo.db') + '?authSource=admin';
    conn = mongoose.connect(url,options);
}

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('connect teste ');
});

mongoose.connection.on('reconnected', () => {
    console.log('Foi reconnected');
});

mongoose.connection.on('error', (error) => {
    console.log('Ocorreu um erro !!! \n ' + error);
});



