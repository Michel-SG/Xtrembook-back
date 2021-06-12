const connection = require('../database.js');

exports.add = (referenceArticle, numCommande, quantite) => {
    return new Promise((resolve, reject) => {
        const req = connection.query(
            "INSERT INTO ligneCommande SET ligneCommandeArticle = ?, ligneCommandeCommande = ?, quantiteCommandee = ?",
             [referenceArticle, numCommande, quantite], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};