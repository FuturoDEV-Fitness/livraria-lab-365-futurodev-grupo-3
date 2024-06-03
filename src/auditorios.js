const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {
    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');
    const crud = new AuditorioCrud();

    switch (resposta) {
        case 'criar':
            /* Coloque sua resposta aqui  */
            const nome = await rl.question('Qual o nome do auditório? ');
            const descricao = await rl.question('Adicione uma descrição para o auditório: ');
            const lotacaoMaxima = await rl.question('Qual a capacidade máxima do auditório? ');
            const auditorio = new Auditorio();
            
            auditorio.setNome = nome;
            auditorio.setDescricao = descricao;
            auditorio.setLotacaoMaxima = lotacaoMaxima;

            await crud.createAuditoruim(auditorio)
            console.log('Auditório cadastrado com sucesso!')
            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            const codigo = await rl.question('Informe o código do auditório a ser removido do registro:');
            
            await crud.deleteAuditorium(codigo);

            console.log('Auditório ', codigo ,' removido com sucesso!');
            rl.close();
            break;
        }
        case 'alterar':{
            /* Coloque sua resposta aqui */
            const newData = {};
            const code = await rl.question('Qual o código do auditório a ser alterado? ');
            const newName = await rl.question('Qual o novo nome do auditório (para não alterar pressione somente enter): ');
            const newDescription = await rl.question('Qual a nova descrição do auditório (para não alterar pressione somente enter): ');
            const newMAximumLotation = await rl.question('Qual o novo numero de lotação do auditório (para não alterar pressione somente enter): ');

            if(newName) newData.nome = newName
            if(newDescription) newData.descricao = newDescription
            if(newMAximumLotation) newData.lotacaoMaxima = newMAximumLotation
            
            crud.updateAuditorium(code, newData)

            console.log('Auditório alterado com sucesso!');            
            rl.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            const name = await rl.question('Busca de auditório por nome: ');
            crud.readAuditorium(name);
            
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
