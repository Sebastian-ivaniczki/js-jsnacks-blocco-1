/*
Il software deve chiedere per 10 volte all’utente di inserire un 
numero. (qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti. 
*/




let sum = 0;

  for (let i = 0; i < 10; i++){
     let number = parseInt(prompt("inserisci un numero"));
     
     sum += number;
  }
      console.log("La somma dei numeri inseriti è " + somma);

