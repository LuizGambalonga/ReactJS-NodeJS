//// Spred Operator
let listNumberOne = [1,2,3]
let listNumberTwo = [4,5,6]
let listaCompleta = [...listNumberOne,...listNumberTwo];
console.log(listaCompleta)
//// Rest Operator
function myList(...nomes){
    console.log(nomes)
}
myList("ZEZINHO123","XABLAU","AVOLTADOSQUENFORAM",{nome:"Luiz",idade:25})

function cadastrar(usuarios, ...novousuario){
let totalusuario = [
    ...usuarios,
    ...novousuario
]
return console.log(totalusuario)
}

let usuarios = ["Luiz","Henrique"]
let novousuario = cadastrar(usuarios, "JOAO","LUCAS")
//// MAP (O map percore todos os itens do Array e faz a tratativa um a um no exemplo a baixo foi fazendo a multiplicação por posição)
const lista = [1,2,3,4,5]
console.log("Lista Sem Map:"+ lista)

let novalistaatualizada = lista.map((item)=>{
   return  item * 2
})
console.log("Lista Atualizada:"+ novalistaatualizada)
//// Reduce (O Reduce percore todos os itens do Array e faz o somatorio dos itens).
let listacomReduce = [10,20,30,40,50]

let newListReduce = listacomReduce.reduce((total, proximo)=>{
return total + proximo
})
console.log(`Reduce totalizador ${newListReduce}`)
//// Função Anomima
