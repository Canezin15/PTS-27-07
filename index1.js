//class pessoa
class Pessoa{
    constructor(nome, data_Nascimento, altura){
    this.nome = nome;
    this.data_Nascimento = data_Nascimento
    this.altura = altura 
    }

//mostra dados
mostrar_dados(){
    return this.nome + " " + this.data_Nascimento + " " + this.altura
}

//calcula idade
calcula_idade(){
    let nascido =  this.data_Nascimento.split("/")[2];
    return (2023 - nascido) + " anos de idade";
}
}




const pessoa = new Pessoa("Canezin", "16/03/2007", 1.80)
console.log(pessoa.calcula_idade())
console.log(pessoa.mostrar_dados())




