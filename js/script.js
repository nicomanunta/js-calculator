document.addEventListener('DOMContentLoaded', function() {
    let displayElement = document.querySelector('.font-piccolo span');
    let risultatoElement = document.querySelector('.risultato h1');
    let displayNascosto = document.querySelector('.nascosto span');


    // Seleziona tutti i pulsanti della calcolatrice
    let pulsanti = document.querySelectorAll('button');

    // Aggiungi un gestore di eventi click a ciascun pulsante
    pulsanti.forEach(pulsante => {
        pulsante.addEventListener('click', function() {
            let testoPulsante = pulsante.textContent;

            // Gestisci l'input del pulsante
            inputNascosto(testoPulsante);
            gestisciInput(testoPulsante);
            
        });
    });

    // Funzione per gestire l'input dei pulsanti
    function inputNascosto(testo) {
        if (testo === 'AC') {
            // Cancella l'operazione corrente
            displayNascosto.textContent = '';
            risultatoElement.textContent = '';
        } else if (testo === '=') {
            // Calcola il risultato dell'operazione e visualizzalo
            let espressione = displayNascosto.textContent;
            let risultato = eval(espressione);
            risultatoElement.textContent = risultato;

        } else if (testo === 'C') {
            // Cancella l'ultimo carattere inserito
            let testoDisplay = displayNascosto.textContent;
            displayNascosto.textContent = testoDisplay.slice(0, -1);
        } else {
            // Visualizza il testo del pulsante sul display
            // Conversione dei simboli degli operatori matematici
            let operatore = testo === 'x' ? '*' : testo === ':' ? '/' : testo === ',' ? '.' : testo === '%' ? '/100' : testo ;
            displayNascosto.textContent += operatore;
        }

        
    }
    function gestisciInput(testo) {
        if (testo === 'AC') {
            // Cancella l'operazione corrente
            displayElement.textContent = '';
            risultatoElement.textContent = '';
        }
        else if (testo === 'C') {
            // Cancella l'ultimo carattere inserito
            const testoDisplay = displayElement.textContent;
            displayElement.textContent = testoDisplay.slice(0, -1);
        } else {
            // Visualizza il testo del pulsante sul display
            displayElement.textContent += testo;
           
        }
    }
    
});
