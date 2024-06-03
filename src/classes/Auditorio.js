const crypto = require("crypto");

class Auditorio {
    #codigo = 0;
    #nome = "";
    #descricao = "";
    #lotacaoMaxima = 1;

    constructor(nome, descricao, lotacaoMaxima) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#descricao = descricao;
        this.#lotacaoMaxima = lotacaoMaxima;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getNome() {
        return this.#nome;
    }
    set setNome(nome) {
        this.#nome = nome;
    }

    get getDescricao() {
        return this.#descricao;
    }
    set setDescricao(descricao) {
        this.#descricao = descricao;
    }

    get getLotacaoMaxima() {
        return this.#lotacaoMaxima;
    }
    set setLotacaoMaxima(lotacaoMaxima) {
        this.#lotacaoMaxima = lotacaoMaxima;
    }
}

module.exports = Auditorio;