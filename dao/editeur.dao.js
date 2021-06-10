const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM editeur", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.add = (a) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO editeur SET  nomEditeur = ?", [a.nomEditeur], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};