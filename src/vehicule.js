export default class Vehicule {
    constructor (nomVehicule, nbrRoue, vitesse) {
        this.nomVehicule = nomVehicule,
        this.nbrRoue = nbrRoue,
        this.vitesse = vitesse
    }

    detect(vehicule) {
        if (this.nbrRoue == 2) {
            return `Type: Moto`
        } else if (this.nbrRoue == 4) {
            return `Type: Voiture`
        }
    }

    boost() {
        return this.vitesse + 50
    }

    plusRapide(obj) {
        if (this.vitesse > obj.vitesse) {
            return `le vehicule : "${this.nomVehicule}" est le plus rapide`
        } else if (this.vitesse < obj.vitesse) {
            return `le vehicule : "${obj.nomVehicule}" est le plus rapide`
        }
    }
}