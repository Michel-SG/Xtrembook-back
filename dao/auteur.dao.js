const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM auteur", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.add = (a) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO auteur SET  nom = ?, prenom = ?", [a.nom, a.prenom], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};