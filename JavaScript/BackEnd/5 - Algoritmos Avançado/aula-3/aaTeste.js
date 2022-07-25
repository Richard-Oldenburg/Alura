const listaLivros = require('./array')

let array = listaLivros
let valorMin = 0
let valorMax = 30


let filtro = array.filter(function(array){
    return array.preco >= valorMin && array.preco <= valorMax
    }
)

filtro.sort((a,b) => a.preco - b.preco)

console.log(filtro)