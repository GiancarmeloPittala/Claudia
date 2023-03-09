const prodotti = [];

// popolare array prodotti
// inserire 20 prodotti su l'array prodotti 
//   dichiarazione;  condizione; operazione
// finchè la condizione è vera il ciclo sarà eseguito 
for(let i = 0; i < 20; i++){
  // i = 0; 0 < 20 ?? true
  // i = 1; 1 < 20 ?? true
  // ...
  // i = 20; 20 < 20 ?? false

  prodotti.push({
    id: i,
    nome: `prodotto ${i}`,
    prezzo: ((Math.random() * 100) + 10).toFixed(2)
  })
  // operazione; i++
} 

console.log(prodotti) 

// map, ritorna un nuovo array con le proprietà desiderate

// una sola proprietà
const nomi_prodotto = prodotti.map( prodotto => prodotto.nome ) 

/**
 * const nomi_id_prodotto = prodotti.map( prodotto => { 
 * if(123) 
 * return{
 *  nome: prodotto.nome,
    id: prodotto.id
 * }
 
  } ) 
 */

const nomi_id_prodotto = prodotti.map( prodotto => ({ 
  nome: prodotto.nome,
  id: prodotto.id
}) ) 

// prendere i dati del prodotto con id 16, ritorna oggetto
const prodotto_16 = prodotti.find( prodotto => prodotto.id === 16 )
console.log( prodotto_16.prezzo)

// prendere i prodotti con id maggiore 16, return lista, array
const prodotto_16_filter = prodotti.filter( prodotto => prodotto.id >= 16 )
console.log( prodotto_16_filter[0].prezzo)


