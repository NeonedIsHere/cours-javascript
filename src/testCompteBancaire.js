export default class CompteBancaire {
    constructor(newNom, newSolde = 0) {
        this.nom = newNom;
        this.solde = newSolde;
    }

    crediter(montant) {
        if ( montant < 0) {
            throw new Error("Le montant est négatif");
        }
        this.solde += montant;
    }

    retirer(montant) {
        if (montant < 0) {
            throw new Error("Le montant est négatif");
        }
        if (this.solde < montant) {
            throw new Error("Le solde du compte est insuffisant");
        } 
        this.solde -= montant;
        console.log(`Retrait de : ${montant} pour : ${this.nom}`)
    }

    virer(montant, compte) {
        this.retirer(montant);
        console.log(`Virement de : ${montant} de : ${this.nom} vers ${compte.nom}`);
        compte.crediter(montant);
        console.log(`Ajout de : ${montant} pour ${compte.nom}`)
    }

    afficherCompte() {
        console.log(`Titulaire : ${this.nom}, solde : ${this.solde} `);
    }
}