//Créer un compte à rebours qui se déclenche quand on clique sur un titre <h1> de la page.

//- Au clic sur le titre, un compte à rebours de 3 secondes commence
//- Le titre affiche successivement : "3", "2", "1", puis "GO GO GO"
//- Chaque changement se fait toutes les secondes
//pensez a arreter l'interval à la fin !

const monTitre = document.getElementById('monTitre')

monTitre.addEventListener('click', () => {
    let c = 3
    monTitre.innerHTML = c

    let inter = setInterval(() => {
        c--
        if (c > 0) monTitre.innerHTML = c
    
    }, 1000)

    setTimeout(() => {
        clearInterval(inter)
        monTitre.innerHTML = "Partez !!!!"
    }, 3000)
})