const readline = require('readline/promises');
const crypto = require('crypto');
const Leitor = require('./classes/Leitor');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function generateRandomCode() {
    return crypto.randomUUID();
}

async function run() {

    const resposta = await input.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const leitor = new Leitor();
            leitor.codigo = generateRandomCode();
            leitor.nome = await input.question('Digite o nome do leitor: ');
            leitor.cpf = await input.question('Digite o CPF do leitor: ');
            leitor.dataNascimento = await input.question('Digite a data de nascimento do leitor: ');

            console.log('\n')
            console.log('Leitor criado com sucesso!');
            console.log(leitor);
            input.close();
            break;

        case 'deletar': {
            /* Coloque sua resposta aqui */
            input.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            input.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            input.close();
    }

}

run();
