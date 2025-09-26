import { key } from "./config.json"

const meteoBlock = document.getElementById('bloc_meteo')
const inputTextCity = document.getElementById('city')
const loadButton = document.getElementById('charger')

const box = document.createElement('div')

box.style.display = 'flex'
box.style.flexDirection = 'column'

meteoBlock.appendChild(box)

for (let i = 1; i < 4; i++) {
    const boxTitle = document.createElement('h2')

    boxTitle.style.width = 'auto'
    boxTitle.style.height = '10vh'
    boxTitle.style.backgroundColor = 'gray'
    boxTitle.style.textAlign = 'center'
    boxTitle.style.alignContent = "center"
    boxTitle.style.paddingTop = '20px'
    boxTitle.style.paddingBottom = '20px'

    boxTitle.textContent = "vide"
    boxTitle.setAttribute('id', `id_title${i}`)
    box.appendChild(boxTitle)
}

async function getMeteoCity(city) {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=c0fee4bc4ad17e1efd2d2f4f7b4fca87`)
        .then(res => {
            return res.json() 
        })
        .catch(err => { return console.log(err) })
}

const boxTitle1 = document.getElementById('id_title1')
const boxTitle2 = document.getElementById('id_title2')
const boxTitle3 = document.getElementById('id_title3')

loadButton.addEventListener('click', async (e) => {
    if (inputTextCity.value === null || undefined) {
        boxTitle1.innerText = 'L\'input est vide ou undefined' 
    }

    await getMeteoCity(inputTextCity.value).then(json => {
        boxTitle1.innerText = json.name
        boxTitle2.innerText = json.main.temp
        boxTitle3.innerText = json.weather[0].main
    })
})

