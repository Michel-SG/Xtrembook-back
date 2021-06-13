const connection = require('../database.js');

exports.getCommande = (numCommande) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT numCommande, dateCommande, nom, prenom, num, typeVoie, nomVoie, codePostal, ville, pays, titre, quantiteCommandee, prixUnit, prixUnit * quantiteCommandee  FROM  commande LEFT JOIN user ON commande.userCommande = user.idU  LEFT JOIN adresse ON user.idAlivraison = adresse.idA  LEFT JOIN LigneCommande ON commande.numCommande = LigneCommande.ligneCommandeCommande LEFT JOIN article ON LigneCommande.ligneCommandeArticle = article.referenceArticle WHERE commande.numCommande = ? ;", [numCommande], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};