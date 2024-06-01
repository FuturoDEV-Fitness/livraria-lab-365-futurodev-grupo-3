const fs = require('fs');
class LeitorCrud {

    constructor() {
        this.filePath = './src/files/leitores.json';
    }

    criar(leitor) {

        // lê o conteúdo que já existe no JSON
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        // adiciona o novo leitor ao JSON
        conteudoAtual.push({
            codigo: leitor.getCodigo,
            nome: leitor.getNome,
            cpf: leitor.getCpf,
            dataNascimento: leitor.getDataNascimento
        });

        // escreve o conteúdo atualizado no JSON
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2), // null, 2 é para organizar o JSON
            'utf-8'
        )
    }

    consultar(palavra) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        const leitorEncontrado = conteudoAtual.find(leitor => leitor.nome === palavra);

        if (leitorEncontrado) {
            console.log('Leitor encontrado: ', leitorEncontrado);
        } else {
            console.log('Leitor não encontrado.');
        }
    }

}

module.exports = LeitorCrud;