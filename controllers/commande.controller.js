const adresseDao = require('../dao/adresse.dao');
const ligneCommandeDao = require('../dao/ligne-commande.dao');
const commandeDao = require('../dao/commande.dao');
const userDao = require('../dao/user.dao');
//const factureDao = require('../dao/facture.dao');
// const ligneFactureDao = require('../dao/ligne-facture.dao');

exports.creerCommande = async (req, res, next) => {
    const products = req.body.products;
    const user = req.body.user;
    const adresse = req.body.user.adresse;
    // const factureArticle = {};
    let adress = await adresseDao.addAdresse(adresse).catch(err => {
        return res.status(500).json({
            error: `problème d'insertion dans adresse: ${err}`
        });
    });
    console.log(adress)
    adresse.idA = adress.insertId;
    userDao.updateUser(adresse.idA, user.email).catch(err => {
        return res.status(500).json({
            error: `problème de modification dans user: ${err}`
        });
    });
    await userDao.getidU(user.email)
        .then(async (result) => {
            resultC = await commandeDao.add(user.date, result[0].idU).catch(err => {
                return res.status(500).json({
                    error: `problème d'insertion dans commande: ${err}`
                });
            });
            let numCommande = resultC.insertId;
            for (let product of products) {
                await ligneCommandeDao.add(product.id, numCommande, product.quantite).catch(err => {
                    return res.status(500).json({
                        error: `problème d'insertion dans ligneCommande: ${err}`
                    });
                });
            }
            res.status(201).json(products);

        })
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de user: ${err}`
            })
        });

}