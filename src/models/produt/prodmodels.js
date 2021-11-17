module.exports = (app) =>{
    const produt = app.db.repositors.repprodut;
    const Produt = produt.modprodut(); 
    modproduto = {

            viewprod: (req, res) =>{

                res.render('produto/addprod');
            },
            listprod: async (req, res) =>{

                   
                  await   Produt.find({})
                                .then((data) =>{
                                    res.render('produto/lista', {prod:data});
                                })
                                .catch(erro => console.log(erro)); 
                
            },
            addprod: (req, res) =>{

                  
                   new Produt(req.body).save()
                                .then(() => res.redirect('/produto/lista' ))
                                .catch(erro => console.log(erro)); 
                
            }
    }

    return modproduto;

}