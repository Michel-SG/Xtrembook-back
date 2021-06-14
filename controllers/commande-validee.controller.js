const commandeValideeDao = require("../dao/commande-validee.dao");

exports.getCommande = (req, res, next) => {
  const id = parseInt(req.params.numCommande);
  commandeValideeDao
    .getCommande(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      return res.status(500).json({
        error: `problème de récupération de donnees: ${err}`,
      });
    });
};