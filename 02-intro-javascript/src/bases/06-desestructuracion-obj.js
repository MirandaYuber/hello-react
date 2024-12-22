// Desestructuración / Asignación desestructurada
const persona = {
    nombre: 'Esteban',
    edad: 23,
    clave: '123456252',
    rango: 'Soldado',
}

// No importa el orden
// const { edad, clave, nombre } = persona
// const {nombre:nombre2} = persona // Cambia el nombre de la variable

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { clave, nombre, edad, rango='Capitan' } ) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5435,
            lon: -54.3423
        }
    }
}

const {nombreClave, anios, latlng:{lat,lon}} = retornaPersona(persona)
console.log(nombreClave, anios)
console.log(lat, lon)
