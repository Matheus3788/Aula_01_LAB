const express = require('express')
const app = express()

app.listen(8081, function() {
    console.log('Servidor Ativo')
})

app.get('/', function(req,res){
    res.send('Página Inicial')
})

app.get('/cadastro/:nome/:sobrenome/:idade', function(req,res){
    res.send('Olá, '+ req.params.nome + ' ' + req.params.sobrenome + ' ficamos sabendo que você tem ' + req.params.idade + ' anos')
})