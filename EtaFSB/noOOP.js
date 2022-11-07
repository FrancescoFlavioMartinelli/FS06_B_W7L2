let f = document.getElementById("form")
f.addEventListener("submit", (event)=>{
    event.preventDefault(); //per evitare che il form ricarichi la pagina quando facciamo il submit

    console.log(event); //metodo preventDefault e prop target

    //leggiamo i dati
    let n = event.target[0].value
    let c = event.target[1].value
    let d = event.target[2].value
    console.log(n, c, d);

    //convertire la data in età
    let dataNascita = new Date(d)
    let annoNascita = dataNascita.getFullYear()
    console.log(annoNascita);

    let oggi = new Date()
    let annoOggi = oggi.getFullYear()

    let eta = annoOggi - annoNascita

    if(dataNascita.getMonth() > oggi.getMonth() 
    || (dataNascita.getMonth() == oggi.getMonth() && dataNascita.getDate() > oggi.getDate())) {
        eta--
    }

    //aggiungiamo una riga alla tabella
    let tr = document.createElement("tr")
    let tdNome = document.createElement("td")
    tdNome.innerText = n;
    let tdCogn = document.createElement("td")
    tdCogn.innerText = c;
    let tdEta = document.createElement("td")
    tdEta.innerText = eta;

    tr.appendChild(tdNome)
    tr.appendChild(tdCogn)
    tr.appendChild(tdEta)

    // tr.appendChild(tdNome, tdCogn, tdEta)

    document.getElementById("table").append(tr)

})