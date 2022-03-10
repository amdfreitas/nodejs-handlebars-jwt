module.exports = (app) =>{
    const produt = app.db.repositors.repprodut;
    const Produt = produt.modprodut(); 

    prodcontroller = {

        listaprodut: async (req,res) => {

                await   Produt.find({})
                    .then((data) =>{
                        res.render('produto/lista', {prod:data});
                    })
                    .catch(erro => console.log(erro)); 
        },
        addprodut:  (req,res) =>{
            new Produt(req.body).save()
                .then(() => res.redirect('/produto/lista' ))
                .catch(erro => console.log(erro)); 
        }



    }

    return prodcontroller;

}