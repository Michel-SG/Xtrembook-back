const auteur = require("../models/auteur");
const auteurDao = require("../dao/auteur.dao");

exports.getAll = (req, res, next) => {
  auteurDao
    .getAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      return res.status(500).json({
        error: `problème de récupération de donnees: ${err}`,
      });
    });
};
exports.add = (req, res, next) => {
    const a = new auteur.Auteur(
      req.body.idAu,
      req.body.nom,
      req.body.prenom,
    );
    console.log(a);
    auteurDao
      .add(a)
      .then((result) => {
        a.idAu = result.insertId;
        return res.status(201).json(a);
      })
      .catch((err) => {
        return res.status(500).json({
          error: `problème d'insertion : ${err}`,
        });
      });
  };