export default class IMC {
    constructor (nom, poid, taille) {
        this.nom = nom,
        this.poid = poid,
        this.taille = taille
    }

    display() {
        const imc = this.poid / (this.taille * this.taille)
        return `${this.nom} (${this.poid} kg, ${this.taille} m) à un IMC de ${imc.toFixed(2)}`
    }
}