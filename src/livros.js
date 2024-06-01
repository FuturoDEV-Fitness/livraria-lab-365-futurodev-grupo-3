const readline = require("readline/promises");
const Livro = require("./classes/Livro");
const LivroCrud = require("./classes/LivroCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );
  const crud = new LivroCrud();

  switch (resposta) {
    case "criar":
      const genero = await rl.question("Qual o gênero do livro?");
      const nome = await rl.question("Qual o título do livro?");
      const paginas = await rl.question(
        "Qual a quantidade de páginas do livro?"
      );
      const autor = await rl.question("Qual o autor do livro?");

      const livro = new Livro(nome, paginas, genero, autor);
      await crud.criar(livro);
      rl.close();
      break;

    case "deletar": {
      const codigo = await rl.question(
        "Qual o código do livro que será deletado?"
      );
      await crud.deletar(codigo);
      console.log(`Livro com o código ${codigo} foi deletado com sucesso`);
      rl.close();
      break;
    }

    case "alterar":
      const codigoAlterar = await rl.question(
        "Qual o código do livro a ser alterado? "
      );
      const novosDados = {};
      const alterarNome = await rl.question(
        "Novo nome (deixe vazio para não alterar): "
      );
      if (alterarNome) novosDados.nome = alterarNome;
      const alterarGenero = await rl.question(
        "Novo gênero (deixe vazio para não alterar): "
      );
      if (alterarGenero) novosDados.genero = alterarGenero;
      const alterarPaginas = await rl.question(
        "Novo número de páginas (deixe vazio para não alterar): "
      );
      if (alterarPaginas) novosDados.paginas = alterarPaginas;
      const alterarAutor = await rl.question(
        "Novo autor (deixe vazio para não alterar): "
      );
      if (alterarAutor) novosDados.autor = alterarAutor;
      crud.alterar(codigoAlterar, novosDados);
      console.log("Livro alterado com sucesso!");
      break;

    case "consultar": {
      const nome = await rl.question(
        "Qual o título do livro que a sr consultado?"
      );

      const livroConsultado = await crud.consultar(nome);
      console.log(livroConsultado ? livroConsultado : "Livro não encontrado.");
      rl.close();
      break;
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
