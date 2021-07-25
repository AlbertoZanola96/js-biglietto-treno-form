// Creiamo un finto biglietto del treno con:
// - Nome passeggero
// - Codice treno (numero casuale tra 90000 e 100000 escluso)
// - Numero carrozza
// - Prezzo calcolato
// - Categoria selezionata dall'utente
// - Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
// BONUS: predisporre l'interfaccia grafica responsiva

var btnGenera = document.getElementById("prezzoBtn");

btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia-eta").value;
        var container_2 = document.getElementById("container_2");
        container_2.style.display = "block";
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