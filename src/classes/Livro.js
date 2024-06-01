const crypto = require("crypto");

class Livro {
  #codigo = 0;
  #nome = "";
  #paginas = 0;
  #genero = "";
  #autor = "";
  constructor(nome, paginas, genero, autor) {
    this.#codigo = crypto.randomUUID();
    this.#nome = nome;
    this.#paginas = paginas;
    this.#genero = genero;
    this.#autor = autor;
  }

  get nome() {
    return this.#nome;
  }

  get codigo() {
    return this.#codigo;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get genero() {
    return this.#genero;
  }

  set genero(genero) {
    this.#genero = genero;
  }

  get autor() {
    return this.#autor;
  }

  set autor(autor) {
    this.#autor = autor;
  }

  get paginas() {
    return this.#paginas;
  }

  set paginas(paginas) {
    this.#paginas = paginas;
  }
}

module.exports = Livro;
