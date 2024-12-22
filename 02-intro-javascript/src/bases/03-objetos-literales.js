const persona = {
    nombre: 'Yuber',
    apellido: 'Miranda',
    edad: 45,
    direccion: {
        ciudad: 'Sogamoso',
        zip: 543534543,
        lat: 14/543534,
        long: 43.4324423
    }
}

// Hace una copia del objeto persona
const persona2 = {...persona}
persona2.nombre = 'Esteban'

console.log(persona)
console.log(persona2);

