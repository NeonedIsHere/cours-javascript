import Vehicule from "./vehicule.js";

const voiture = new Vehicule("Mercedes CLK", 4, 280)
const moto = new Vehicule("Honda CBR", 2, 250)

console.log(voiture, moto)
console.log(voiture.detect(), moto.detect())
console.log(voiture.boost(), moto.detect())
console.log(voiture.plusRapide(voiture), moto.plusRapide(voiture))