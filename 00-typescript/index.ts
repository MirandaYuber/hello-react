// Inferencia
// Como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
// c tambien sera number

let texto = 'Hola, Yuber'
texto.toLocaleUpperCase()

// X texto = 2

// Any
let obj: any = { x: 0 }

// funciones
function saludar (name: string) {
    console.log(`Hola ${name}`);
}

saludar('Yuber')
// X saludar(2)

// Primera forma para tipar un objeto
// function saludar2 ( persona: {name: string, age: number} ) {
//     const {name, age} = persona
//     console.log(`Hola ${name} de ${age} años`);
// }


// Segunda forma para tipar un objeto
function saludar2 ( {name, age}: {name: string, age: number} ) {
    console.log(`Hola ${name} de ${age} años`);
}

saludar2({name: 'Yuber', age: 30})

// min 35:56
