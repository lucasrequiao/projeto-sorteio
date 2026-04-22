import carregarPessoas from "./function/carregar-pessoas";

const pessoas = carregarPessoas("src/data/dados.csv")

pessoas.forEach(pessoa => console.log(pessoa.toString()))