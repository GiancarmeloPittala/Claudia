// dichiato una costante 
const persona = "Claudia"; //tipo const non modificabile
let my_dog = "pippo"; // tipo let modificabile
// var my_const = 2; è stato deprecato nel 2015 !!!


// Tipi dati 
const numeri = 2; // 2.3
const stringhe = "il mio nome" // 'il mo nome'
const boleano = true // true, false

// tipi complessi 
const array = [1,2,3,"asd"] 
const mario = { 
  nome: "Mario",
  eta: 30,
  residenze: [ {
    via: "via 1",
    secondaProd: 2
  }, {
    via: "via 2",
    secondaProd: 1
  } ]
}

// stampo il nome dell'oggetto mario
console.log( mario.nome )

// stampo la prima residenza
console.log( mario.residenze[1].via )

// aggiungere una residenza alla fine
mario.residenze.push( {
  via: "via 3",
  secondaProd: 3
})

// stampo l'ultima residenza
console.log( mario.residenze[2].via )

// aggiungere una residenza alla fine
mario.residenze.unshift( {
  via: "via 0",
  secondaProd: 3
})


// stampo l'ultima residenza
console.log( mario.residenze[0].via )



// funzioni 
function somma(a,b){
  return a + b;
}

const somma_variabile = function (a,b) {
  return a + b
}


console.log( 'La somma di 2 e 4 è: ' + somma(2,4) ) //concatenazione di stringhe
// uso del apice inverso con placeholder
console.log( `La somma di 2 e 4 è: ${somma(2,4)}`)
console.log( `La somma di 2 e 4 è: ${somma_variabile(2,4)}`)


// definizione dell'oggetto persona

const Persona = {
  nome: "nome",
  cognome: 'Pluto',
  getFullName: function (start, secondo = "", terzo = "" ) { // metodo / funzione
    return `${start} ${secondo} ${terzo} ${this.nome}, ${this.cognome}`
  },
  getFullName1: function (){

  }
}

class Persona_{
  constructor(_nome, _cognome){
    this.nome = _nome;
    this.cognome = _cognome;
  }
  getFullName(start, secondo = "", terzo = "") { 
    return `${start} ${secondo} ${terzo} ${this.nome}, ${this.cognome}`
  }
}

// definire un instanza di Persona_
const claudia = new Persona_("Claudia", "Cognome")

console.log( Persona.getFullName("Ciao", "secondo", 2) )
console.log( Persona.getFullName("Hello") )
console.log( claudia.getFullName("Hello") )






