exports.Commande = class {
    constructor(
      numCommande,
      dateCommande,
      nom,
      prenom,
      ville
    ) {
      this.numCommande = numCommande;
      this.dateCommande = dateCommande;
      this.nom = nom;
      this.prenom = prenom;
      this.ville = ville;
    }
  };