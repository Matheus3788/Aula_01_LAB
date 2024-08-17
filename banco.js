const Sequelize = require('sequelize') //importação do recurso
const sequelize = new Sequelize('atividade', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
})       // manipulação do recurso


sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(error){
    console.log('Falha ao se conectar: '+ error)
})

const Cliente = sequelize.define('cliente',{
    nome: {
        type: Sequelize.STRING

    },
    endereco: {
        type: Sequelize.STRING

    },
    bairro: {
        type: Sequelize.STRING

    },
    cep: {
        type: Sequelize.STRING

    },
    telefone: {
        type: Sequelize.STRING

    },
    celular: {
        type: Sequelize.STRING

    }
})

//Cliente.sync({force: true})

Cliente.create({
    nome:'Gabriela',
    endereco: 'Av. Aguia de Haia, 2021',
    bairro: 'São Pedro',
    cep: '08797-000',
    telefone: '2093-5690',
    celular: '98745-0983'
})

Cliente.create({
    nome:'Jessica',
    endereco: 'Av. Rio Branco, 1',
    bairro: 'São Lucas',
    cep: '08657-000',
    telefone: '2053-0900',
    celular: '98215-2183'
})

Cliente.create({
    nome:'Amanda',
    endereco: 'Av. Lucar Farias, 198',
    bairro: 'São Rafael',
    cep: '00907-000',
    telefone: '0083-0900',
    celular: '96525-0803'
})