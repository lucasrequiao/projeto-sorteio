export default class Pessoa {
    constructor(
        readonly nome: string,
        readonly email: string
    ){}

    toString(): string {
        return `${this.nome}: <${this.email}>`
    }
}