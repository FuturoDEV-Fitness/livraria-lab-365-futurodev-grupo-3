class Leitor {

    #codigo = 0;
    #nome = '';
    #cpf = '';
    #dataNascimento = '';

    constructor(codigo, nome, cpf, dataNascimento) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
    }
    get getCodigo() {
        return this.#codigo;
    }
    get getNome() {
        return this.#nome;
    }
    get getCpf() {
        return this.#cpf;
    }
    get getDataNascimento() {
        return this.#dataNascimento;
    }
    set setCodigo(codigo) {
        this.#codigo = codigo;
    }
    set setNome(nome) {
        this.#nome = nome;
    }
    set setCpf(cpf) {
        this.#cpf = cpf;
    }
    set setDataNascimento(dataNascimento) {
        this.#dataNascimento = dataNascimento;
    }
}

module.exports = Leitor;