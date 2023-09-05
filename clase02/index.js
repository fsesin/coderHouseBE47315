//ES7

const exp = Math.pow(2, 3)
const expES7 = 2 ** 3
// console.log(exp,expES7);

// const array = [1,2,3,4,5,6,7,8,9]
// const isIncluded = array.includes(0)
// console.log(isIncluded);

//ES8

// const obj = {
//     first_name: 'Luis',
//     last_name: 'Osorio',
//     email: 'losorio@mail.com'
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const objArray = Object.entries(obj)
// const objArrayMod = objArray.map(([clave,valor])=>[clave,`${valor} modificado`])
// //console.log(objArrayMod);
// const objMod = Object.fromEntries(objArrayMod)
// console.log(objMod);

//ES9

// SPREAD
const animales1 = ['perro', 'gato', 'raton', 'pajaro']
const animales2 = ['jirafa', 'elefante', 'leon', 'serpiente']

const obj1 = {
  first_name: 'Luis',
  last_name: 'Osorio',
  email: 'losorio@mail.com',
}

const obj2 = {
  dni: '12345678',
  isSingle: true,
  age: 35,
}

//const animales = animales1.concat(animales2)
const animales = [...animales1, ...animales2]
const obj = { ...obj1, ...obj2 }

//const animalesCopia = animales
const animalesCopia = [...animales]
animalesCopia[0] = 'Pato'
//console.log(animales);

// REST
function suma(num1, num2, ...otrosNumeros) {
  console.log(num1, num2)
}

//suma(1,2,4,5,6,7,8,9)

//console.log(obj);
const { first_name, last_name, ...otrasProps } = obj
//console.log(otrasProps);

//ES10
const text = '         '
//console.log(text.length);
//console.log(text.trim().length);

const arrayNum = [
  1,
  2,
  3,
  4,
  [5, 6, 7, 8, 9, [2, 3, 4, 5, [1, 2, 3, 4, [2, 3, 4, 5, [3, 4, 5, 6, 7]]]]],
]
const newArray = arrayNum.flat(Infinity)
//console.log(newArray);

// ES11
const numero = null
const string = undefined
// console.log(numero || 15);
// console.log(numero ?? 15);
// console.log(string || 'chao');
// console.log(string ?? 'chao');

// HANDS ON LAB

class TicketManager {
  #precioBaseDeGanancia = 5
  constructor() {
    this.eventos = []
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    // let id
    // if(!this.eventos.length){
    //     id=1
    // } else {
    //     id=this.eventos[this.eventos.length-1].id+1
    // }

    const evento = {
      id: !this.eventos.length
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1,
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    }

    this.eventos.push(evento)
  }
}

const manager1 = new TicketManager()
manager1.agregarEvento('Final mundial','Catar',12000,50000)
manager1.agregarEvento('Final libertadores','Bogota',1000,100)
console.log(manager1.getEventos())
