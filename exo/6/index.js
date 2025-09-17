function mention (a, b, c) {
    const r = a + b + c
    let moyenne = r / 2
    
    if (moyenne >= 15) {
        return console.log('Très bien')
    } else if (moyenne >= 10) {
        return console.log("Assez bien")
    } else {
        console.log('Refus')
    }
}

mention(5, 5, 10)