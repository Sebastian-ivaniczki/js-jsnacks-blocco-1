/*
Il software deve chiedere per 10 volte all’utente di inserire un 
numero. (qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti. 
*/


//creo un aray dove inserire i dati immessi dall'utente

const userNumber = []

//ciclo for per chiedere all'utente un numero

for(let i = 0; i < 10; i++){
userNumber.push(prompt("inserisci un numero"))
};

console.log(userNumber)