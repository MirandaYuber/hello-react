// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']
const [ , , p3] = personajes
console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123]
}
console.log(retornaArreglo())

const [texto, numero] = retornaArreglo()
console.log(texto)
console.log(numero)

// Tarea
// 1. El primer valor del array se lamará nombre
// 2. Se llamara setNombre
const use = (valor) => {
    return [
        valor,
        ()=>{
            console.log('Hola Mundo')
        }
    ]
}
const [nombre, setNombre] = use('Yuber')
console.log(nombre)
setNombre()