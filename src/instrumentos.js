const readline = require('readline');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/IntrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function run() {
    const resposta = await askQuestion('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeInstrumento = await askQuestion("Qual o nome do instrumento? ");
            const tipoInstrumento = await askQuestion("Qual o tipo de instrumento? (corda / sopro / percussão) ");
            const estadoInstrumento = await askQuestion("Qual o estado do instrumento? (novo / usado / danificado) ");
            const instrumento = new Instrumento(nomeInstrumento);
            instrumento.setTipo = tipoInstrumento;
            instrumento.setEstado = estadoInstrumento;
            const crud = new InstrumentoCrud();
            crud.criar(instrumento)
            rl.close();
            break;
        case 'deletar': {
            const codigo = await askQuestion("Qual é o código do instrumento que você deseja deletar? ");
            const crud = new InstrumentoCrud();
            crud.deletar(codigo)
            rl.close();
            break;
        }
        case 'consultar': {
            const codigo = await askQuestion("Qual é o código do instrumento que você deseja consultar? ");
            const crud = new InstrumentoCrud();
            crud.consultar(codigo)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
