const consultationDao = require("../dao/consultation.dao");
const article = require("../models/article");

exports.add = (req, res, next) => {
    const articl = new article.Article(
        req.body.referenceArticle,
        req.body.titre,
        req.body.resumed,
        req.body.prixUnit,
        req.body.stock,
        req.body.imageUrl
    );
    consultationDao.addConsultation(articl)
        .then((result) => {
            articl.referenceArticle = result.insertId;
            return res.status(201).json(articl);
        })
        .catch((err) => {
            return res.status(500).json({
                error: `problème d'insertion : ${err}`,
            });
        });
};




exports.getAll = (req, res, next) => {
    

    consultationDao.getAllconsultation()
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            return res.status(500).json({
                error: `problème de récupération des articles consultés: ${err}`,
            });
        });
};