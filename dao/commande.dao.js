const connection = require('../database.js');

exports.add = (temps,idUser) => {
    return new Promise((resolve, reject) => {
        const req = connection.query(
            "INSERT INTO commande SET dateCommande = ?, userCommande = ?", [temps, idUser], (err, result) => {
                console.log(req.sql);
                console.log(result.insertId);
                err ? reject(err) : resolve(result);
            });
    });
};