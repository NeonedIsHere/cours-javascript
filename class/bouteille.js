class Bouteille {
    // Constructeur
    constructor (name, content, mark, type) {
        // Attribut
        this.name = name,
        this.content = content,
        this.mark = mark,
        this.type = type
    }
}

const verre = new Bouteille("eau", 100, "vittel", "plastique")
console.log(verre)