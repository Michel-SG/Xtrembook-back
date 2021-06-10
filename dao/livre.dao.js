const connection = require("../database.js");

exports.getOneById = (referenceArticle) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "SELECT referenceArticle, titre, resumed, isbn13 FROM article, livre WHERE livre.livreArticle = ? AND article.referenceArticle = ?",
      [referenceArticle, referenceArticle],
      (err, result) => {
        console.log(req.sql);
        err ? reject(err) : resolve(result);
      }
    );
  });
};
