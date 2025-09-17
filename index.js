const prd = document.getElementById('nom_produit')
const qte = document.getElementById('quantite')
const prx = document.getElementById('prix_ht')
const btn = document.getElementById('calcul')
const res = document.getElementById('resultat')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!prd.value || !qte.value || !prx.value) {
        res.textContent = "Veuillez remplir tous les champs."
        return
    }
    const quantite = parseFloat(qte.value)
    const prixHT = parseFloat(prx.value)
    
    const montantTTC = prixHT * quantite
    res.textContent = `Montant TTC : ${montantTTC.toFixed(2)}`
})