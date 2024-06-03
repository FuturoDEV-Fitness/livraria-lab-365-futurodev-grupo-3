const fs = require("fs");

class AuditorioCrud {
    
    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    readData() {
        try {
            const data = fs.readFileSync(this.filePath,'utf-8');
            return JSON.parse(data)
        } catch (error) {
            console.error("Não foi possível ler os dados:", error);
            return [];
        }
    }

    async writeData(data) {
        try {
            await fs.writeFileSync(
                this.filePath,
                JSON.stringify(data,null,2),
                'utf-8',
            )
            
        } catch (error) {
            console.error("Não foi possível escrever os dados, erro:", error);
        }
    }

    async createAuditoruim(auditorium){
        const currentData = await this.readData();

        currentData.push({
            codigo: auditorium.getCodigo,
            nome: auditorium.getNome,
            descricao: auditorium.getDescricao,
            lotacaoMaxima: auditorium.getLotacaoMaxima
        })

        this.writeData(currentData);
    }

    async readAuditorium(name){
        //*************** verificar o por que ao finalizar a busca nao retorna para o menu principal ***************
        const auditoriums = await this.readData();
        const auditoriumsFind = auditoriums.find((auditorio) => auditorio.nome === name)

        if(auditoriumsFind){
            console.log(auditoriumsFind)
        }else{
            console.log('Não foi possível encontrar um auditório com o nome passado, verifique a digitação e tente novamente')
        }
    }

    async updateAuditorium(code, newData) {
        let auditoriums = await this.readData();
        const index = auditoriums.findIndex((auditorium) => auditorium.codigo === code);
        
        if(index !== -1){
            auditoriums[index] = {... auditoriums[index], ... newData}
            this.writeData(auditoriums);
        }
    }

    async deleteAuditorium(code) {
        let auditoriums = await this.readData();
        auditoriums.map(auditorium =>{
            if(auditorium.codigo === code){
                console.log(auditorium)
            }
        })
        auditoriums = auditoriums.filter((auditorium) => auditorium.codigo !== code);
        this.writeData(auditoriums)
    }
}

module.exports = AuditorioCrud;