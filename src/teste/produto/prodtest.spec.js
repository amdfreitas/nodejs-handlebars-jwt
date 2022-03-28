/*
const request = require('supertest');
const app = require('../../../www/app');

describe('teste lista de produtos', () => {

   it('produto', async () => {
      const res = await request(app).get('/produto/lista');
      console.log(res.body);
      expect(res.body).toHaveProperty('prod');
   });
    

});
*/

const axios = require('axios');


list = async () => {
   const test = await axios.get('http://localhost:3000/produto/lista');
   test

}

list();