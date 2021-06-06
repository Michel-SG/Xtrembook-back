const bcrypt = require('bcrypt');
const passwordHash = require('password-hash');
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

    bcrypt.hash(req.body.motDePasse, 10)
    .then((hash)=>{
         console.log("mot hacher "+hash)
        client.motDePasse = hash;
        userDao.addUser(client, idA)
        .then((result) => {
            client.idU = result.insertId;
            res.status(201).json(client);
        })
        .catch(err => {
            return res.status(400).json({
                error: `problème d'insertion dans personne: ${err}`
            });
        });
    
    })
    .catch(error=>res.status(500).json({error}));         
}