const fs = require("fs");
class LivroCrud {
  constructor() {
    this.filePath = "./src/files/livros.json";
  }

  async lerDados() {
    try {
      const dados = await fs.readFileSync(this.filePath, "utf-8");
      return JSON.parse(dados);
    } catch (error) {
      console.error("Erro ao ler dados: ", error);
      return [];
    }
  }

  async escreverDados(data) {
    try {
      await fs.writeFileSync(
        this.filePath,
        JSON.stringify(data, null, 2),
        "utf-8"
      );
    } catch (error) {
      console.error("Erro ao escrever dados: ", error);
    }
  }

  async criar(livro) {
    const conteudoAtual = await this.lerDados();

    conteudoAtual.push({
      nome: livro.nome,
      codigo: livro.codigo,
      genero: livro.genero,
      autor: livro.autor,
      paginas: livro.paginas,
    });

    this.escreverDados(conteudoAtual);
  }

  async deletar(codigo) {
    let livros = await this.lerDados();
    livros = livros.filter((livro) => livro.codigo !== codigo);
    this.escreverDados(livros);
  }

  async alterar(codigo, novosDados) {
    let livros = await this.lerDados();
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros[index] = { ...livros[index], ...novosDados };
      this.escreverDados(livros);
    }
  }

  async consultar(nome) {
    const livros = await this.lerDados();
    return livros.find((livro) => livro.nome == nome);
  }
}

module.exports = LivroCrud;
