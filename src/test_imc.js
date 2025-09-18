import IMC from "./imc.js";

const list = [
	new IMC("Sébastien Chabal", 135, 1.7),
	new IMC("Escaladeuse", 45, 1.65),
	new IMC("JOJO", 300, 2),
	new IMC("Gontrand", 90, 1.75),
	new IMC("Colonel Clock", 200, 1.75),
	new IMC("Josiane de la vega", 99, 1.55)
];

function imc(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i].display());
	}
}

imc(list);
