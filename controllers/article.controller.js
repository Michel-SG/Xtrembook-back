const article = require("../models/article");
const articleDao = require("../dao/article.dao");

exports.getAll = (req, res, next) => {
  articleDao
    .getAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      return res.status(500).json({
        error: `problème de récupération de donnees: ${err}`,
      });
    });
};
exports.add = (req, res, next) => {
    const a = new article.Article(
      req.body.referenceArticle,
      req.body.titre,
      req.body.resumed,
      req.body.prixUnit,
      req.body.stock,
      req.body.imageUrl
    );
    console.log(a);
    articleDao
      .add(a)
      .then((result) => {
        a.referenceArticle = result.insertId;
        return res.status(201).json(a);
      })
      .catch((err) => {
        return res.status(500).json({
          error: `problème d'insertion : ${err}`,
        });
      });
  };