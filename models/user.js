exports.User = class {
    constructor(idU, email, motDePasse, nom, prenom, adresse,idadmin) {
        this.idU = idU;
        this.email = email;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.idadmin = idadmin;
    }
}