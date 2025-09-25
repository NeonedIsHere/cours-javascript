import './style.css'

async function meteoApi() {
  return await fetch('https://api.openweathermap.org/data/2.5/weather?q=donzere&appid=c0fee4bc4ad17e1efd2d2f4f7b4fca87&lang=fr')
    .then(res => {
      return res.json()
    })
}

await meteoApi().then((res) => console.log(res))