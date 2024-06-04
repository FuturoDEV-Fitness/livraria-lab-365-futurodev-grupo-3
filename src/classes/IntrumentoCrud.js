const fs = require('fs');
const Instrumento = require('./Instrumento');
class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    criar(instrumento) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        conteudoAtual.push({
            codigo: instrumento.getCodigo,
            nome: instrumento.getNome,
            tipo: instrumento.getTipo,
            estado: instrumento.getEstado
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
        console.log(`Instrumento cadastrado! Código: ${instrumento.getCodigo}, Instrumento: ${instrumento.getNome}, Tipo: ${instrumento.getTipo}, Estado: ${instrumento.getEstado}`);
    }

    consultar(codigo) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const instrumentoEncontrado = conteudoAtual.find(instrumento => instrumento.codigo === codigo)
        if (instrumentoEncontrado) {
            console.log(instrumentoEncontrado)
        } else {
            console.log("Código não encontrado!")
        }
    }

    deletar(codigo) {
        let conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        const conteudoFiltrado = conteudoAtual.filter(instrumento => instrumento.codigo !== codigo);
        if (conteudoFiltrado.length !== conteudoAtual.length) {
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(conteudoFiltrado, null, 2),
                'utf-8'
            );
            console.log(`Instrumento deletado com sucesso!`);
        } else {
            console.log("Código não encontrado!");
        }
    }
}

module.exports = InstrumentoCrud;