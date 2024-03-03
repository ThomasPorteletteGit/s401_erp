-- Table ProduitEnergie
CREATE TABLE ProduitEnergie (
    id_produit_energie INT PRIMARY KEY,
    nom VARCHAR(255),
    prix DECIMAL(10, 2),
    quantite_stock INT,
    description TEXT,
    type ENUM('Produit', 'Energie'),
    id_reappro INT,
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro)
);

-- Table Ticket
CREATE TABLE Ticket (
    id_ticket INT PRIMARY KEY,
    prixTotal DECIMAL(10, 2),
    moyen_paiement VARCHAR(50),
    date DATE,
    id_transaction_journaliere INT,
    FOREIGN KEY (id_transaction_journaliere) REFERENCES TransactionJournaliere(id_transaction)
);

-- Table TicketProduit
CREATE TABLE TicketProduit (
    id_ticket INT,
    id_produit_energie INT,
    quantite_achetee INT,
    PRIMARY KEY (id_ticket, id_produit_energie),
    FOREIGN KEY (id_ticket) REFERENCES Ticket(id_ticket),
    FOREIGN KEY (id_produit_energie) REFERENCES ProduitEnergie(id_produit_energie)
);

-- Table Reapprovisionnement
CREATE TABLE Reapprovisionnement (
    id_reappro INT PRIMARY KEY,
    id_fournisseur INT,
    date_reappro DATE,
    FOREIGN KEY (id_fournisseur) REFERENCES Fournisseur(id_fournisseur)
);

-- Table Fournisseur
CREATE TABLE Fournisseur (
    id_fournisseur INT PRIMARY KEY,
    nom VARCHAR(255)
);

-- Table TransactionJournaliere
CREATE TABLE TransactionJournaliere (
    id_transaction INT PRIMARY KEY,
    date_validation DATE,
    montant_total DECIMAL(10, 2)
);

-- Table Incident
CREATE TABLE Incident (
    id_incident INT PRIMARY KEY,
    date DATE,
    description TEXT,
    niveau INT
);

-- Table Pompe
CREATE TABLE Pompe (
    id_pompe INT PRIMARY KEY,
    est_active BOOLEAN,
    en_cours_utilisation BOOLEAN
);

-- Table Client
CREATE TABLE Client (
    id_client INT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    adresse_mail VARCHAR(255)
);

-- Table Carte
CREATE TABLE Carte (
    id_carte INT PRIMARY KEY,
    typeCarte ENUM('Membre', 'Energie'),
    credit DECIMAL(10, 2),
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES Client(id_client)
);

-- Table LignesReapprovisionnement
CREATE TABLE LignesReapprovisionnement (
    id_reappro INT,
    id_produit_energie INT,
    qte_livree INT,
    PRIMARY KEY (id_reappro, id_produit_energie),
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro),
    FOREIGN KEY (id_produit_energie) REFERENCES ProduitEnergie(id_produit_energie)
);

-- Table Livraison
CREATE TABLE Livraison (
    id_livraison INT PRIMARY KEY,
    date_livraison DATE,
    id_reappro INT,
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro)
);

-- Table Boutique
CREATE TABLE Boutique (
    horaire_ouverture TIME,
    horaire_fermeture TIME
);