const editeur = require("../models/editeur");
const editeurDao = require("../dao/editeur.dao");

exports.getAll = (req, res, next) => {
  editeurDao
    .getAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      return res.status(500).json({
        error: `problème de récupération de donnees: ${err}`,
      });
    });
};
exports.add = (req, res, next) => {
    const a = new editeur.Editeur(
      req.body.idE,
      req.body.nomEditeur
    );
    console.log(a);
    editeurDao
      .add(a)
      .then((result) => {
        a.idE = result.insertId;
        return res.status(201).json(a);
      })
      .catch((err) => {
        return res.status(500).json({
          error: `problème d'insertion : ${err}`,
        });
      });
  };