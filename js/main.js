// Creiamo un finto biglietto del treno con:
// - Nome passeggero
// - Codice treno (numero casuale tra 90000 e 100000 escluso)
// - Numero carrozza
// - Prezzo calcolato
// - Categoria selezionata dall'utente
// - Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var btnGenera = document.getElementById("prezzoBtn");

btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia-eta").value;
        var prezzoKm = 0.21;
        var costobiglietto = prezzoKm * km;
        var offerta = "Biglietto Standard"

        if (fasciaEta == "min") {
            costobiglietto = costobiglietto * 0.80;
            offerta = "Sconto Minorenne";
        } else if (fasciaEta == "over") {
            costobiglietto = costobiglietto * 0.60;
            offerta = "Sconto Over 65";
        }
        costobiglietto = costobiglietto.toFixed(2);

        //numero random e carrozza 
        var numCar = Math.floor(Math.random() * 9)+ 1;
        var numCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        
        var container_2 = document.getElementById("container_2");
        container_2.style.display = "block";    
        
        document.getElementById("nome_biglietto").innerHTML = nome;
        document.getElementById("offerta").innerHTML = offerta;
        document.getElementById("carrozza").innerHTML = numCar;
        document.getElementById("codice-cp").innerHTML = numCp;
        document.getElementById("costo").innerHTML = costobiglietto;
    }
)

var btnAnnulla = document.getElementById("annulla");
btnAnnulla.addEventListener("click",
    function() {
        var container_2 = document.getElementById("container_2");
        container_2.style.display = "none";
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia-eta").value = "";
    }
)