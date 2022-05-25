// class Pessoa{
//     constructor(){
//         this.nome 
//         this.idade
//         this.cor
//         this.ListadePessoas = [];
//     }
//     AdicionarPessoa(...lista){
//         this.ListadePessoas.push(lista);
//         console.log(this.ListadePessoas)
//     }
// }
// const minhaLista = new Pessoa();
// minhaLista.AdicionarPessoa("Luiz",25,"Branco");
//////////
class Pessoa{
    constructor(){
        this.nome;
        this.sobrenome
        this.listNomes = [];
    }
    nomePessoa(primeironome){
        this.nome = primeironome;
        this.listNomes.push(primeironome);
        console.log(`Meu nome é ${this.nome}`)
        
    }
}
let pessoa = new Pessoa();
let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();
let pessoa3 = new Pessoa();
let pessoa4 = new Pessoa();

pessoa.nomePessoa("Luiz Henrique")
pessoa1.nomePessoa("Zezinho123")
pessoa2.nomePessoa("Galo Zeio")
pessoa3.nomePessoa("Ovo de Codorna")
pessoa4.nomePessoa("Penalti")
