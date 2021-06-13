const connection = require('../database.js');

exports.addConsultation = (article) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO administrateur SET titre = ?, resumed = ?, prixUnit = ?, imageUrl = ? ", [
        article.titre, article.resumed, article.prixUnit,  article.imageUrl], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};

exports.getAllconsultation = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM administrateur", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
