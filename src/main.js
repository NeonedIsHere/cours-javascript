import CompteBancaire from './class/compteBancaire.js';

const compte1 = new CompteBancaire("Alex", 0)
const compte2 = new CompteBancaire("Clovis", 0)
const compte3 = new CompteBancaire("Marco", 0)

compte1.addToBalance(1000)
compte2.addToBalance(1000)
compte3.addToBalance(1000)