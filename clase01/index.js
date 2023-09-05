let name = 'Juan'
let age = 50
let isSingle = true

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let obj = {
  name: 'Carlos',
  lastName: 'Abello',
}

//obj.

let var1 = 10
var var2 = 15
{
  var var3 = 20
  let var4 = 25
}
//console.log(var3);
//console.log(var4);

const num1 = 10
//num1 = 15;
//console.log(num1);

const array2 = [1, 2]
array2.push(3)
//console.log(array2);

// funciones
function sumar(n1, n2) {
  console.log(n1 + n2)
  return n1 + n2
}

const sumarF = (n1, n2) => n1 + n2

const resultado = sumarF(5, 10)

//console.log('El resultado de esta suma es: '+resultado+'. Esto es todo');
//console.log(`El resultado de esta suma es: ${resultado}. Esto es todo`);

//HANDS ON LAB

const mostrarLista = (array) => {
  if (Array.isArray(array)) {
    if (!array.length) {
      return 'Lista vacia'
    }
    array.forEach((e) => console.log(e))
    return `La longitud de la lista es ${array.length}`
  } else {
    return 'No es un arreglo'
  }
}

//console.log(mostrarLista([1,2]))

const producto1 = {
    name: 'Iphone',
    description: 'Iphone 14 256',
    price: 500,
    stock: 25
}


class Product {
    constructor(name,description,price,stock){
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
    }

    mostraNombre(){
        return this.name
    }
}

const producto2 = new Product('Ipad','Ipad Pro',250,10)
const producto3 = new Product('TV','Samsung LED', 1000,10 )

//console.log(producto3.mostraNombre());

// HANDS ON LAB

class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.contadorIndividual = 0
    }

    static contadorGlobal = 0

    getResponsable(){
        console.log(this.nombre);
    }

    contar(){
        this.contadorIndividual++
        Contador.contadorGlobal++
    }

    getCuentaIndividual(){
        console.log(`La cuenta individual de ${this.nombre} es ${this.contadorIndividual}`);
    }

    getCuentaGlobal(){
        console.log(`La cuenta global es ${Contador.contadorGlobal}`);
    }
}

const contador1 = new Contador('Contador 1')
const contador2 = new Contador('Contador 2')

contador1.contar()
contador1.contar()
contador1.contar()
contador2.contar()
contador2.contar()
contador1.getCuentaIndividual()
contador2.getCuentaIndividual()
contador1.getCuentaGlobal()
contador2.getCuentaGlobal()