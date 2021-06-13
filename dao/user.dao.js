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

exports.updateUser = (idLivraison, email) => {
    return new Promise((resolve, reject) => {
        const req = connection.query(
            "UPDATE user SET idAlivraison = ? WHERE email = ?", [idLivraison, email], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};
exports.getidU = (email) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT idU FROM user WHERE email=?",email, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
