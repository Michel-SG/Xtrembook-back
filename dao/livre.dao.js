const connection = require("../database.js");

exports.getOneById = (referenceArticle) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "SELECT referenceArticle, titre, resumed, isbn13, imageUrl, prixUnit, formatLivre, genre, nomEditeur, nom, prenom, idL FROM Article LEFT JOIN Livre ON Article.referenceArticle = Livre.livreArticle LEFT JOIN Genre ON Livre.livreGenre = Genre.IdG LEFT JOIN Editeur ON Livre.livreEditeur = Editeur.IdE LEFT JOIN LivreAuteur ON Livre.idL = LivreAuteur.livreIdLivre LEFT JOIN Auteur ON LivreAuteur.idLA = Auteur.idAu WHERE article.referenceArticle = ?",
      referenceArticle,
      (err, result) => {
        console.log(req.sql);
        err ? reject(err) : resolve(result);
      }
    );
  });
};
