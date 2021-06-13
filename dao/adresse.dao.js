const connection = require('../database.js');

exports.addAdresse = (client) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO adresse SET num = ?, typeVoie = ?, nomVoie = ?, codePostal = ?, ville = ?, pays = ?", [client.numero, client
            .typeDeVoie, client.nomDeVoie, client.codePostal, client.ville, client.pays], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};



