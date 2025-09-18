class Habitation {
    constructor (name, x, y, step) {
        this.name = name,
        this.height = x,
        this.width = y,
        this.step = step
    }
    superficie() {
        return this.height * this.width * this.step
    }
}

const v = new Habitation("Maison V", 50, 20, 1)
const w = new Habitation("Maison W", 43, 75, 2)
const x = new Habitation("Maison X", 678, 40, 4)
const y = new Habitation("Maison Y", 554, 54, 5)

console.log(`L'habitation : ${v.name} à une superficie de : ${v.superficie()}m2`)
console.log(`L'habitation : ${w.name} à une superficie de : ${w.superficie()}m2`)
console.log(`L'habitation : ${y.name} à une superficie de : ${y.superficie()}m2`)