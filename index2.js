//class alunos
class Alunos{
    constructor(matricula, nome, prova1, prova2, trabalho){
        this.matricula = matricula;
        this.nome = nome;
        this.prova1 = prova1;
        this.prova2 = prova2;
        this.trabalho = trabalho;
    }

//imprime dados
impreme_dados(){
    return this.matricula + " " + this.nome + " " + this.prova1 + " " + this.prova2 + " " + this.trabalho
}

//calculo de notas
media(){
    let media_P = (this.prova1 + this.prova2) * 0.25
    let media_T = this.trabalho * 0.2
    let media_F =  media_P + media_T

    if(media_F > 6){
        return 0 + " pontos"
    }else{
        return "falta " + (6 - media_F).toFixed(2) + " pontos"
    }

}

}

const alunos = new Alunos("IF", "Canezin", 9, 6, 8)
console.log(alunos.media())

