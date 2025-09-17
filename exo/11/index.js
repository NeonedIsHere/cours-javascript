// const bar = document.querySelector(".bar")

// document.addEventListener("scroll", () => {
//     const scrollMax = document.body.scrollHeight - innerHeight;
//     const whereWeAre = pageYOffset / scrollMax * 100;
//     bar.style.width = whereWeAre + "%";

//     console.log(`
//     Hauteur de la page : ${document.body.scrollHeight}
//     Heure affichage : ${innerHeight}
//     Scroll position : ${pageYOffset}`)
// })

const bar = document.querySelector(".bar");

addEventListener("scroll", function () {

    const scrollMax = document.body.scrollHeight - innerHeight;
    const onEstOu = pageYOffset / scrollMax * 100;
    bar.style.width = onEstOu + "%";

    console.log(`
            Hauteur page = ${document.body.scrollHeight}
            Hauteur affichage : ${innerHeight}
            Scroll Position : ${pageYOffset}
            `);
}
)