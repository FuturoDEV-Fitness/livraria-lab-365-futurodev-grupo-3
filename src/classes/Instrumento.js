const shortid = require('shortid');

class Instrumento {
    #codigo = "";
    #nome = "";
    #tipo = "";
    #estado = "";

    constructor(nome) {
        this.#nome = nome;
        this.#codigo = shortid.generate();
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getTipo() {
        return this.#tipo;
    }

    set setTipo(tipo) {
        this.#tipo = tipo;
    }

    get getEstado() {
        return this.#estado;
    }

    set setEstado(estado) {
        this.#estado = estado;
    }
}

module.exports = Instrumento;
