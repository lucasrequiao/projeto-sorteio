import Pessoa from "../model/pessoa";

export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
    let restantes = [...pessoas]

    for (let i = 0; i < pessoas.length; i++) {
        restantes = todosMenosUm(restantes)
    }
    return restantes[0]
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[] {
    if (pessoas.length === 1) return pessoas

    const sorteado = Math.floor(Math.random() * pessoas.length)
    const pessoaRemovida = pessoas.splice(sorteado, 1)
    //console.log(`A pessoa removida foi: ${pessoaRemovida.toString()}`)
    return pessoas
}