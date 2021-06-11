DROP DATABASE IF EXISTS xtrembook;
CREATE DATABASE IF NOT EXISTS xtrembook;
USE xtrembook;

CREATE TABLE Article (
    referenceArticle int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(30) NOT NULL,
    resumed VARCHAR(255) NOT NULL,
    prixUnit int(11) NOT NULL,
    stock int(11) NOT NULL,
    imageUrl text
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Adresse(
    idA int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    num int(11) NOT NULL,
    typeVoie VARCHAR(255) NOT NULL,
    nomVoie VARCHAR(255) NOT NULL,
    codePostal VARCHAR(255) NOT NULL,
    ville VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE User (
    idU int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    motDePasse VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    idAfacturation int(11) UNSIGNED,
    idAlivraison int(11) UNSIGNED,
    idadmin int(1),
    CONSTRAINT fk_user_adresse_facturation FOREIGN kEY (idAfacturation) REFERENCES Adresse (idA),
    CONSTRAINT fk_user_adresse_livraison FOREIGN KEY (idAlivraison) REFERENCES Adresse(idA)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Genre (
    idG int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    genre varchar(30) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Editeur (
    idE INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nomEditeur VARCHAR(30) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE Livre (
    idL int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    isbn13 VARCHAR(30) NOT NULL,
    formatLivre VARCHAR(255) NOT NULL,
    livreArticle int(11) UNSIGNED,
    livreGenre int(11) UNSIGNED NOT NULL,
    livreEditeur int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_livre_article FOREIGN KEY (livreArticle) REFERENCES Article(referenceArticle),
    CONSTRAINT fk_livre_genre FOREIGN KEY (livreGenre) REFERENCES Genre(idG),
    CONSTRAINT fk_livre_editeur FOREIGN KEY (livreEditeur) REFERENCES Editeur(idE)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Auteur (
    idAu int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(30) NOT NULL,
    prenom VARCHAR(30) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
CREATE TABLE LivreAuteur (
    idLA int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    livreIdAuteur int(11) UNSIGNED NOT NULL,
    livreIdLivre int(11) UNSIGNED NOT NULL, 
    CONSTRAINT fk_livre_auteur_auteur FOREIGN KEY (livreIdAuteur) REFERENCES Auteur(idAu),
    CONSTRAINT fk_livre_auteur_livre FOREIGN KEY (livreIdLivre) REFERENCES Livre(idL)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Commande(
    numCommande int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateCommande DATETIME NOT NULL,
    userCommande int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_commande_user FOREIGN KEY (userCommande) REFERENCES User(idU)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Facture(
    numFacture int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateFacture DATETIME NOT NULL,
    factureCommande int(11) UNSIGNED NOT NULL,
    factureArticle int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_facture_commande FOREIGN KEY (factureCommande) REFERENCES Commande(numCommande),
    CONSTRAINT fk_facture_article FOREIGN KEY (factureArticle) REFERENCES Article(referenceArticle)
   
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE LigneFacture (
    idLf int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantiteFacturee int(11) NOT NULL,
    ligneFactureArticle int(11) UNSIGNED NOT NULL,
    ligneFactureFacture int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_ligne_facture_article FOREIGN KEY (ligneFactureArticle) REFERENCES Article(referenceArticle),
    CONSTRAINT fk_ligne_facture_facture FOREIGN KEY (ligneFactureFacture) REFERENCES Facture(numFacture)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE LigneCommande (
    idLC int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantiteCommandee int(11) NOT NULL,
    ligneCommandeArticle int(11) UNSIGNED NOT NULL,
    ligneCommandeCommande int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_ligne_commande_article FOREIGN KEY (ligneCommandeArticle) REFERENCES Article(referenceArticle),
    CONSTRAINT fk_ligne_commande_commande FOREIGN KEY (ligneCommandeCommande) REFERENCES commande(numCommande)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO
    article (titre, resumed, prixUnit, stock, imageUrl)
VALUES
    (
        'NodeJS',
        "Ce livre s'adresse aux développeurs souhaitant découvrir et maîtriser le framework JavaScript Node.",
        99,
        10,
        "https://images-na.ssl-images-amazon.com/images/I/415RRgYCW2L._SX417_BO1,204,203,200_.jpg"
    ),
    (
        'Angular',
        "Ce livre permet aux lecteurs de se lancer dans le développement d'applications web avec le framework Angular (en version 8 au moment de l'écriture).",
        99,
        10,
        "https://images-na.ssl-images-amazon.com/images/I/41mKFVuZXBL._SX403_BO1,204,203,200_.jpg"
    );

INSERT INTO
    genre (genre)
VALUES
    ("Front-End"),
    ("Back-End");

INSERT INTO
    Editeur (nomEditeur)
VALUES
    ("Broché");

INSERT INTO
    livre (
        isbn13,
        formatLivre,
        livreArticle,
        livreGenre,
        livreEditeur
    )
VALUES
    ("978-2746089785", "PDF", 1, 2, 1),
    ("978-2409020926", "PDF", 2, 1, 1);

INSERT INTO
    auteur (nom, prenom)
VALUES
    ("Fontanet", "Julien"),
    ("Ollivier", "Sébastien"),
    ("Djordjevic", "Daniel");

INSERT INTO
    livreAuteur (livreIdAuteur, livreIdLivre)
VALUES
    (1, 1),
    (2, 2),
    (3, 2);