
const nombre = 'Yuber'
const apellido = 'Miranda'

// const nombreCompleto = nombre + apellido
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

function getSaludo(nombreCompleto) {
    return `Hola ${nombreCompleto}`
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)