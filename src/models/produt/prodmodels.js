module.exports = (app) =>{
    const produtcontrol = app.controller.produtcontroller
    modproduto = {

            viewprod: (req, res) =>{

                res.render('produto/addprod');
            },
            listprod: (req, res) =>{
                produtcontrol.listaprodut(req,res);                
            },
            addprod: (req, res) =>{
                produtcontrol.addprodut(req,res);                
            }
    }

    return modproduto;

}