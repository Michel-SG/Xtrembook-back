exports.Livre = class {
    constructor(
      idL,
      isbn13,
      auteurs,
      editeur,
      genre
    ) {
      this.idL = idL;
      this.isbn13 = isbn13;
      this.auteurs = auteurs;
      this.editeur = editeur;
      this.genre = genre;
    }
  };
  