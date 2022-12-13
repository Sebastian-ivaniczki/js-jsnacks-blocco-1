/*
In un array sono contenuti i nomi degli invitati alla 
festa del grande Gatsby, l’utente inserisce il suo nome 
tramite un input.comunicagli se può partecipare o 
no alla festa. (vietato usare includes() )

*/

// creo un aray con i nomi dei partecipanti

const partecipants = ['Giulio', 'Gigi', 'Francesto', 'Ale'];
console.log(partecipants)
//prendo gli elementi in pagina

const userName = document.getElementById('name');
const button = document. getElementById('btn');
const target = document.getElementById('target')

//creo un event listener sul bottone
button.addEventListener('click' , function() {
    const nameElement = userName.value.trim()
    
    let flag = false;

   for(let i = 0; i < partecipants.length && !flag; i++ ){
    
    const curentPartecipant = partecipants[i]
    console.log(curentPartecipant)
    
    if(nameElement === curentPartecipant)
    console.log('e vero')
    flag = true;
   }

   if(flag){
    target.innerText = 'puoi entrare alla festa'
   }else{
   target.innerText = 'non puoi entrare'
    }
});