const fs = require('fs')


// Sync

// crear 
//fs.writeFileSync('prueba.txt','primera linea de texto')
//fs.writeFileSync('prueba.txt','segunda linea de texto')
// leer
//const texto = fs.readFileSync('prueba.txt','utf-8')
//console.log(texto);

// eliminar
//fs.unlinkSync('prueba.txt')

// agregar
// fs.appendFileSync('prueba.txt',' y segundo linea de texto')

// buscar
//console.log(fs.existsSync('prueba1.txt'));

// Async
//crear
// fs.writeFile('pruebaAsync.txt','Primera linea de texto',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado con exito');
//     }
// })

//leer
// fs.readFile('pruebaAsync.txt','utf-8',(e,data)=>{
//     if(e){
//         console.log(e);
//     } else {
//         console.log(data);
//     }
// })

// eliminar
// fs.unlink('pruebaAsync.txt',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo eliminado con exito');
//     }
// })

// promesas

// crear
// fs.promises.writeFile('pruebaAsync.txt','Primera linea de texto')
// .then(()=>console.log('Archivo creado con exito'))
// .catch(error=>console.log(error))


// leer
// fs.promises.readFile('pruebaAsync.txt','utf-8')
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// // eliminar
// fs.promises.unlink('pruebaAsync.txt')
// .then(()=>console.log('Archivo eliminado con exito'))
// .catch(error=>console.log(error))

const users = [
    {
        name: 'Juan',
        age: 35
    },
    {
        name: 'Maria',
        age: 25
    },
    {
        name: 'Laura',
        age: 40
    },
    {
        name: 'Luis',
        age: 45
    }
]

// fs.promises.writeFile('User.json',JSON.stringify(users))
// .then(()=>console.log('Archivo creado con exito'))
// .catch(error=>console.log(error))

// fs.promises.readFile('User.json','utf-8')
// .then(data=>console.log(JSON.parse(data)))
// .catch(error=>console.log(error))