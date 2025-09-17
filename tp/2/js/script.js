const monTitre = document.getElementById('monTitre')

addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        monTitre.style.color = "#ffffff"
        monTitre.style.opacity = 1
        monTitre.innerHTML = "Coucou c'est moi"
        document.body.style.background = "#FF0000"

    }, 5000)
})