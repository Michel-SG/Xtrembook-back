const livre = require("../models/livre");
const livreDao = require("../dao/livre.dao");
const livreAuteurDao = require("../dao/livre-auteur.dao");

exports.getOneById = async (req, res, next) => {
  const id = parseInt(req.params.referenceArticle);
  let livres = await livreDao.getOneById(id).catch((err) => {
    return res.status(500).json({
      error: `Aucun article avec la référence ${id}`,
    });
  });
  let l = livres[0];
  l.auteurs = await livreAuteurDao
    .getAllAuteursOfLivre(l.idL)
    .catch((err) => {
      res.status(500).json({
        error: `problème de récupération d'adresses : ${err}`,
      });
    });

  res.status(200).json(l);
};
