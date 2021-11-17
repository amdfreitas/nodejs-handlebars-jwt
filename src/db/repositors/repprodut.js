const mongoose = require('mongoose');

module.exports = (app) => {

     modelprodut = {

            modprodut: () =>{

                schemaproduto = {
                    txcdprod:{
                        type:Number,
                        required:true
                    },
                    txnmprod:{
                        type:String,
                        required:true
                    },
                    txdcprod:{
                        type:String,
                        required:true
                    },
                    txpcprod:{
                        type: Number,
                        required:true
                    }
                }

                let produtSchema = mongoose.Schema(schemaproduto);

               return  mongoose.model('PRODUTOS',produtSchema);

            }

     }

     return modelprodut;

}
