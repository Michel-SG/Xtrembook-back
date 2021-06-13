const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.add = (a) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO article SET  titre = ?, resumed = ?, prixunit = ?, stock = ?, imageUrl = ?", [a.titre, a.resumed, a.prixUnit, a.stock, a.imageUrl], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getAllByParams = (params)=>{
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT DISTINCT titre, resumed,prixUnit, stock, imageUrl FROM article WHERE titre LIKE ?", "%"+params+"%" , (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
}