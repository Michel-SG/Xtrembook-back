const livreDao = require("../dao/livre.dao");

exports.getOneById = (req, res, next) => {
    const id = parseInt(req.params.referenceArticle);
    livreDao
      .getOneById(id)
      .then((result) => res.status(200).json(result[0]))
      .catch((err) => {
        if (!err) {
          return res.status(404).json({
            error: `Aucun article avec la reference ${id}`,
          });
        }
        return res.status(500).json({
          error: `problème de récupération de données : ${err}`,
        });
      });
  };