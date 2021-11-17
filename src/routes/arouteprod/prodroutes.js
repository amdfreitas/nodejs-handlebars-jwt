const {Router} = require('express');
const rotas = Router();
const conf = require('config');
module.exports = (app) => {

    const produt = app.models.produt.prodmodels;
    rotas.get(conf.get('produt.home'),produt.viewprod);
    rotas.get(conf.get('produt.lista'),produt.listprod);
    rotas.post(conf.get('produt.addprodut'),produt.addprod);


    return rotas;

}