/* 
L'utente inserisce un numero di 4 cifre in un input. Calcola 
la somma di tutte
 le cifre che compongono il numero e stampala in pagina.
*/




// Prendo gli elementi dal dom 
const userNumber = document.getElementById('inputField');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// creo un event listener 
btn.addEventListener('click' , function(){

    numberElement = userNumber.value.trim()
    //! valido affinche i numeri inseriti non siano piu di 4

    if(numberElement.length > 4){
        result.innerText = " puoi inserire una cifra con massimo 4 numeri"
        return;
    }
    // prendo ogni cifra dal numero inserito
    let sum = 0;
    for (let i = 0; i < numberElement.length; i++) {
      // prendo ogni numero singolarmente
      let digit = parseInt(numberElement[i]);
    
      // sommo i numeri uno ad uno
      sum += digit;
    }
    

    console.log(sum);
    // stampo in pagina il risultato 
    result.innerText = "La somma delle cifre all'interno del tuo numero è :" + sum
});


