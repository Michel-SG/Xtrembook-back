const connection = require('../database.js');

exports.getAllAuteursOfLivre = (idL) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT nom, prenom FROM auteur JOIN livreAuteur ON livreAuteur.livreIdAuteur = auteur.idAu  WHERE livreIdLivre = ? ", idL, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};