const bcrypt = require('bcrypt');
const adresseDao = require('../dao/adresse.dao');
const userDao = require('../dao/user.dao');
const user = require("../models/user");

exports.creerUser = async (req, res, next) => {
    const client = new user.User(
        req.body.idU,
        req.body.email,
        req.body.motDePasse,
        req.body.nom,
        req.body.prenom,
        req.body.adresse,
        req.body.idadmin
    );
    let adresseFacturation = client.adresse[0];
    let result = await adresseDao.addAdresse(adresseFacturation).catch(err => {
        return res.status(500).json({
            error: `problème d'insertion dans adresse: ${err}`
        });
    });
    let idA = result.insertId;
    bcrypt.hash(req.body.motDePasse, 10, (err, hash) => {
        client.motDePasse = hash;
        let resultat = userDao.addUser(client, idA)
            .catch(err => {
                return res.status(500).json({
                    error: `problème d'insertion dans personne: ${err}`
                });
            });
        client.idU = resultat.insertId;
    })
    res.status(200).json(client);
}