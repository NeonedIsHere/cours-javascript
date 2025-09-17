//Exercice : Empêcher la soumission d'un formulaire

//Empêcher qu'un formulaire se soumette normalement et afficher un message dans la console à la place.
//Quand on clique sur le bouton "Submit" du formulaire, la page ne se recharge pas et à la place, "OK" s'affiche dans la console.
//Le formulaire se vide automatiquement après la soumission (Utilisez un ".reset()").

const monLien = document.querySelector("button");
const monForm = document.querySelector('form')
const monInput = document.getElementById('monInput')
monLien.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clic intercepté, pas de redirection !");
    monForm.reset()
});