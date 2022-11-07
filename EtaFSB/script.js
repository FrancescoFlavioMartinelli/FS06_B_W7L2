function Utente(_nome, _cognome, _data) {
    this.nome = _nome
    this.cognome = _cognome
    this.dataNascita = new Date(_data)

    this.generaRiga = function () {
        //aggiungiamo una riga alla tabella
        let tr = document.createElement("tr")
        let tdNome = document.createElement("td")
        tdNome.innerText = una.nome;
        let tdCogn = document.createElement("td")
        tdCogn.innerText = this.cognome;
        let tdEta = document.createElement("td")
        tdEta.innerText = this.calcolaEta();

        tr.appendChild(tdNome)
        tr.appendChild(tdCogn)
        tr.appendChild(tdEta)

        return tr
    }

    this.calcolaEta = function () {
        //convertire la data in età
        let oggi = new Date()
        let eta = oggi.getFullYear() - this.dataNascita.getFullYear()
        if (this.dataNascita.getMonth() > oggi.getMonth() ||
            (this.dataNascita.getMonth() == oggi.getMonth() && this.dataNascita.getDate() > oggi.getDate())) {
            eta--
        }

        return eta;
    }
}

let f = document.getElementById("form")
f.addEventListener("submit", (event) => {
    event.preventDefault(); //per evitare che il form ricarichi la pagina quando facciamo il submit

    console.log(event); //metodo preventDefault e prop target

    //leggiamo i dati
    let n = event.target[0].value
    let c = event.target[1].value
    let d = event.target[2].value
    console.log(n, c, d);

    //creare utente
    let u = new Utente(n, c, d);

    //aggiungere riga
    document.getElementById("table").append(u.generaRiga())
})