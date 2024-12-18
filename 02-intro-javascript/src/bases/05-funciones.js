// const saludar = function (nombre) {
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`

console.log(saludar2('Yuber'));
console.log(saludar3('Esteban'));
console.log(saludar4());

// Los parentesis () simulan el return de las funciones
const getUser = () => (
    {
        uid: 'ABC123',
        username: 'Mimimo'
    }
)

console.log(getUser())

// Tarea
// 1. Transformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC123',
//         username: 'Mimimo'
//     }
// }

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC123',
        username: 'Maximo'
    }
)

const usuarioActivo = getUsuarioActivo('Yuber')
console.log(usuarioActivo);

