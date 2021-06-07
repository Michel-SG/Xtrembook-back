const connection = require('../database.js');

exports.addUser = (client, idAdresse) => {
    let idAdmin = 0;
    // console.log("voici mon mot de passe"+client.motDePasse)
    return new Promise((resolve, reject) => {
        const req = connection.query(
            "INSERT INTO user SET email = ?, motDePasse = ?, nom = ?, prenom = ?, idAfacturation = ?, idadmin = ?", [client.email, client
                .motDePasse, client.nom, client.prenom, idAdresse, idAdmin], (err, result) => {
                    console.log(req.sql)
                    err ? reject(err) : resolve(result);
                });
    });
};

exports.verifyUser = (email) => {
    return new Promise((resolve, reject) => {
        const req = connection.query(
            "SELECT * FROM user WHERE email = ?", email, (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};
