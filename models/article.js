exports.Article = class {
  constructor(
    referenceArticle,
    titre,
    resumed,
    prixUnit,
    stock,
    imageUrl,
    livre,
    auteur,
    editeur,
    genre
  ) {
    this.referenceArticle = referenceArticle;
    this.titre = titre;
    this.resumed = resumed;
    this.prixUnit = prixUnit;
    this.stock = stock;
    this.imageUrl = imageUrl;
    this.livre = livre;
    this.auteur = auteur;
    this.editeur = editeur;
    this.genre = genre;
  }
};
