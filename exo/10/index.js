document.addEventListener("click", function(event) {
    console.log(event.clientX, event.clientY)

    const img = document.createElement("img");
    img.setAttribute("src", "https://placecats.com/millie_neo/300/200")

    img.style.position = "Absolute"
    img.style.left = `${event.clientX - 150}px`
    img.style.top = `${event.clientY - 100}px`

    document.body.appendChild(img)
})