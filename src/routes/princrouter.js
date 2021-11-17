const conf = require('config');
module.exports = (app) =>{
   // app.db.repositors.dbconnect;
    const prod = app.routes.arouteprod.prodroutes;

    app.use(conf.get('rotas.produt'),prod);
}