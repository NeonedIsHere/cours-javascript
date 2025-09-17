const monTexte = document.querySelector('textarea')
const maDiv = document.querySelector('div')

monTexte.addEventListener('keyup', (e) => {

    console.log(e)
    maDiv.innerHTML = marked(monTexte.value )
    localStorage.setItem(maDiv, monTexte.value)
})