const conf = require('config');
const app = require('./www/app');
const http = require('http');

const server = http.createServer(app);

server.listen(conf.get('servidor.porta'), () =>{
    console.log('Servidor online !!!');
});

