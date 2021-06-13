DROP DATABASE IF EXISTS xxtrembook;
CREATE DATABASE IF NOT EXISTS xxtrembook;
USE xxtrembook;

CREATE TABLE Article (
    referenceArticle int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
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

CREATE TABLE Administrateur (
    idAd int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    resumed VARCHAR(255) NOT NULL,
    prixUnit int(11) NOT NULL,
    imageUrl text,
    imageV text   
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
    dateCommande DATE NOT NULL,
    userCommande int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_commande_user FOREIGN KEY (userCommande) REFERENCES User(idU)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Facture(
    numFacture int(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateFacture DATE NOT NULL,
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

INSERT INTO adresse (idA, num, typeVoie, nomVoie, codePostal, ville, pays)
VALUES(1, 10, "chemin", "chemin du bassin", "13014", "Marseille", "France");

INSERT INTO user (idU, email, motDePasse, nom, prenom, idAfacturation, idadmin)
VALUES(1,"michel.sadeu@yahoo.fr", "$2b$10$1VMgUZXQbIuLYGjWT4eR1utIN5MJBYAWkHDHOAu8KdovDp4808cU2",
        "SADEU NGAKOU", "Michel", 1, 1970);

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
    ),
    (
        'Data science : fondamentaux et études de cas',
        "Nous vivons une époque très excitante, qui ramène l'analyse de données et les méthodes quantitatives au coeur de la société.",
        50,
        20,
        "https://images-na.ssl-images-amazon.com/images/I/71TljvWc5HL.jpg"
    ),
    (
        'Bases de données - Concepts, utilisation et développement',
        "Ce manuel vise un triple objectif : comprendre les concepts théoriques, apprendre à utiliser des bases de données, 
        et enfin savoir en construire de nouvelles.",
        45,
        50,
        "https://images-na.ssl-images-amazon.com/images/I/71anmupSeJL.jpg"
    ),
    (
        'Apprenez à programmer en Java',
        "Vous tenez dans vos mains un livre conçu pour les débutants qui souhaitent se former à Java, 
        le langage de programmation incontournable des professionnels !",
        40,
        80,
        "https://m.media-amazon.com/images/P/B07L52KK7Z.01._SCLZZZZZZZ_SX500_.jpg"
    ),
    (
        'Développer un site web en Php, Mysql et Javascript, Jquery, CSS3 et HTML5', 
        "Créez des sites web interactifs et axés sur les données grâce à la puissante combinaison de technologies 
        en source libre et de normes du Web, même si vous n'avez que des connaissances de base en HTML.",
        50,
        60,
        "https://images-na.ssl-images-amazon.com/images/I/81O8ys1C64L.jpg"
    ),
    (
        'Cinquante nuances de Grey',
        "Romantique, libérateur et totalement addictif, ce roman vous obsédera, vous possédera et vous marquera à jamais.",
        99,
        99,
        "https://images-na.ssl-images-amazon.com/images/I/81hm-mY-QkL.jpg"
    ),
    (
        'Cybersécurité - 6e éd. - Analyser les risques, mettre en oeuvre les solutions',
        "Le but de cet ouvrage est de fournir une vision globale des problématiques de 
        sécurité et de criminalité informatique.",
        999,
        50,
        "https://images-na.ssl-images-amazon.com/images/I/71c0eEyXLQL.jpg"
    );

INSERT INTO
    genre (genre)
VALUES
    ("Back-End"),
    ("Front-End"),
    ("Data-Science"),
    ("Database"),
    ("Cravate-End"),
    ("Cybersécurité");

INSERT INTO
    Editeur (nomEditeur)
VALUES
    ("Eni"),
    ("Eyrolles"),
    ("Dunod"),
    ("Reynald Goulet"),
    ("JC Lattès");

INSERT INTO
    livre (
        isbn13,
        formatLivre,
        livreArticle,
        livreGenre,
        livreEditeur
    )
VALUES
    ("978-2746089785", "PDF", 1, 1, 1),
    ("978-2409020926", "PDF", 2, 2, 1),
    ("978-2212142433", "Broché", 3, 3, 2), 
    ("978-2100790685", "Broché", 4, 4, 3),
    ("978-2212675214", "Broché", 5, 1, 2),
    ("978-2893775760", "Broché", 6, 2, 4),
    ("978-2709642521", "Broché", 7, 5, 5),
    ("978-2100790548", "Broché", 8, 6, 3);

INSERT INTO
    auteur (nom, prenom)
VALUES
    ("Fontanet", "Julien"),
    ("Ollivier", "Sébastien"),
    ("Djordjevic", "Daniel"),
    ("Michel", "Lutz"),
    ("Eric", "Biernat"),
    ("Jean-Luc", "Hainaut"),
    ("Cyrille", "Herby"),
    ("Robin", "Nixon"),
    ("E L", "James"),
    ("Solange", "Ghernaouti");

INSERT INTO
    livreAuteur (livreIdAuteur, livreIdLivre)
VALUES
    (1, 1),
    (2, 2),
    (3, 2),
    (4, 3),
    (5, 3),
    (6, 4),
    (7, 5),
    (8, 6),
    (9, 7),
    (10, 8);