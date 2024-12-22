const activo = true
let mensaje = ''

if (activo) {
    mensaje = 'Activo'
} else {
    mensaje = 'Incativo'
}

console.log('Mensaje: ', mensaje)

// Ternario que procesa if y else
const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo'
console.log('Mensaje2: ', mensaje2);

// Si solo necesitamos que procese el if
const mensaje3 = ( !activo ) && 'Activo'
console.log('Mensaje 3: ', mensaje3);

