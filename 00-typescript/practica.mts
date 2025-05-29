// TIPOS PRIMITIVOS
let nombre: string = 'Yuber'
let age: number = 23
let isActive: boolean = true
let phone: null | number = null
let address: undefined | string = undefined



// FUNCIONES TIPADAS
function suma (number1: number, number2: number): number {
    return number1 + number2
} 

const saludar = (nombre: string): string => {
    return `Hola, ${nombre}`
}



// TIPOS 
type InfoUser = {
    nombre: string,
    edad: number
}

let informacionUsuario: InfoUser = {
    nombre: 'Yuber',
    edad: 32
}

const imprimirInfoUsuario = (info: InfoUser) => {
    return `Nombre: ${info.nombre}, Edad: ${info.edad}`
}

imprimirInfoUsuario(informacionUsuario)

type InfoEmpleado = InfoUser & {
    cargo: string | null
}

let informacionEmpleado: InfoEmpleado = {
    nombre: 'Esteban',
    edad: 32,
    cargo: 'Programador'
}

const imprimirInfoEmpleado = (info: InfoEmpleado) => {
    return `Nombre: ${info.nombre}, Edad: ${info.edad}, Cargo: ${info.cargo}`
}

imprimirInfoEmpleado(informacionEmpleado)



// INTERFACES
