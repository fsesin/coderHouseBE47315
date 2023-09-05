// function sumar(n1,n2){
// return n1+n2
// }

// const restar = (n1,n2)=>{
// return n1-n2
// }

// const array = [1,2,3,4,5,6,7,8]
// array.filter(e=>e!==7)

// const operacion = (n1,n2,cb)=>{
//     const resultado = cb(n1,n2)
//     return resultado
// }

// console.log(operacion(4,2,restar));

//console.log('primer log');
// let resultado
// setTimeout(() => {
//     //console.log('segundo log');
//     resultado = 5+10
// }, 0);
// console.log(`El resultado es ${resultado+5}`);
//console.log('tercer log');

// CALLBACKS ANIDADOS

// TABLA USUARIOS - FAMILIARES
function agregarFamiliar(idUsuario, infoFamiliar) {
  usuarios.findById(idUsuario, (error, usuario) => {
    // 1
    if (error) {
      return error
    } else {
      familiaresT.findAllByLastName(usuario.lastname, (error, familiares) => {
        // 2
        if (error) {
          return error
        } else {
          if (familiares.includes(infoFamiliar)) {
            return 'Familiar ya existe en bd'
          } else {
            familiaresT.createOne(infoFamiliar, (error) => {
              // 3
              if (error) {
                return error
              } else {
                return 'Familiar creado con exito'
              }
            })
          }
        }
      })
    }
  })
}

// .THEN .CATCH

function agregarFamiliarProm(idUsuario, infoFamiliar) {
  usuarios
    .findById(idUsuario) // 1
    .then((usuario) => {
      return familiaresT.findAllByLastName(usuario.lastname) // 2
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'Familiar ya existe en bd'
      } else {
        return familiaresT.createOne(infoFamiliar) // 3
      }
    })
    .then(() => {
      return 'Familiar creado con exito'
    })
    .catch((error) => error)
}

// async await

async function agregarFamiliarAsync(idUsuario, infoFamiliar) {
  try {
    const usuario = await usuarios.findById(idUsuario)
    const familiares = await familiaresT.findAllByLastName(usuario.lastname)
    if (familiares.includes(infoFamiliar)) {
      return 'Familiar ya existe'
    }
    await familiares.createOne(infoFamiliar)
    return 'Familiar creado con exito'
  } catch (error) {
    return error
  }
}
