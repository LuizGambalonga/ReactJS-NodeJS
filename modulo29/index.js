const express = require('express');
const server = express();
server.use(express.json())

//Query Params = ?nome= tudo que vier depois do igual, será enviado como parametro.
//Route Params = /curso/2
//Request Body = {nome: 'NodeJS', tipo: 'Backend'}

const cursos = ['ADM', 'TI', 'DESIGN', 'ARQUITETURA E URBANISMO']

//Middleware Global
server.use((req,res,next)=>{
console.log(`URL CHAMADA: ${req.url}`)
return next();
})
//MiddleWare para validar que  champo nome não foi informado!

function checkCurso(req,res,next){
    if (!req.body.name){
        return res.status(400).json({error:"É obrigatório informar um nome"})
    }
    return next();
}
function checkIndexCurso(req,res,next){
     const curso = cursos[req.params.index]
     if(!curso){
        return res.status(404).json({error:"O usuario não existe"})
     }
     return next();
}

server.post('/curso', checkCurso, (req,res)=>{
    const name = req.body;
    cursos.push(name);

    return res.json(cursos);
})

server.get('/curso/:index',checkIndexCurso,(req,res)=>{
    const nome = req.query.nome;
    const {index} = req.params;
    return res.json(`ID: ${index} Curso: ${cursos[index]}`)
})
server.put('/curso/:index', checkCurso,checkIndexCurso,(req,res)=>{
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;
    return res.json(cursos);
})
server.get('/curso', (req,res)=>{
    return res.json(cursos)
})
server.delete('/curso/:index', checkIndexCurso,(req,res)=>{
    const {index}= req.params
    cursos.splice(cursos[index],1)
    return res.json(cursos)
})

server.listen(3000)