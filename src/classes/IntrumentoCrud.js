const fs = require('fs');
class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json';
    }

    criar(instrumento) {
        fs.writeFileSync(
            this.filePath,
            JSON.stringify({
                codigo: instrumento.getCodigo,
                nome: instrumento.getNome,
                tipo: instrumento.getTipo,
                estado: instrumento.getEstado
            }),
            'utf-8'
        )
    }


}

module.exports = InstrumentoCrud;