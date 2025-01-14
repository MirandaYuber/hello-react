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
// function saludar2 ( {name, age}: {name: string, age: number} ) {
//     console.log(`Hola ${name} de ${age} años`);
// }

// saludar2({name: 'Yuber', age: 30})

// function saludar2 ( {name, age}: {name: string, age: number} ): number {
//     console.log(`Hola ${name} de ${age} años`);

//     // TypeScript infiere que age es un número en caso de no 
//     // agregar el tipo de retorno
//     return age
// }

// Esto dara error
// let username: string
// username = saludar2({name: 'Yuber', age: 30})


// Tipar funciones enviadas como parametros 
// (las funciones no tienen inferencia)
// const sayHifromFunction = (fn: (name: string) => void) => {
//     return fn('Yuber')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`);
// }

// sayHifromFunction(sayHi)


// Tipar array funtion
// const sumer = (a: number, b: number): number => {
//     return a + b
// }


// never: es usado en funciones que se sabe que nunca van a devolver nada
// function throwError(message: string): never {
//     throw new Error(message)
// }


// Inferencia funciones anonimas segun el contexto
// const avengers = ['spiderman', 'Hulk', 'Avengers']

// avengers.forEach((avenger) => {
//     console.log(avenger.toUpperCase());
// })

// Objetos: tienen inferencia
// let hero = {
//     name: 'Spiderman',
//     age: 30
// }

// function createHero(name: string, age: number) {
//     return {
//         name,
//         age
//     }
// }

// const spiderman = createHero('Spiderman', 30)


// Type alias: Se definen en Pascal Case
// type Hero = {
//     name: string,
//     age: number
// }

// let hero: Hero = {
//     name: 'Spiderman',
//     age: 30
// }

// function createHero(name: string, age: number): Hero 
// {
//     return {
//         name,
//         age
//     }
// }


// function createHero(hero: Hero): Hero 
// {
//     const {name, age} = hero
//     return {
//         name,
//         age
//     }
// }

// const spiderman = createHero({name: 'Spiderman', age: 30})


// Opcional properties
// Template union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
// }
// // El readonly no hace que este sea inmutable, 
// // solo que no se pueda modificar directamente durante el desarrollo

// function createHero(hero: Hero): Hero 
// {
//     const {name, age} = hero
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// // Objext.freeze si hace que el objeto sea inmutable de manera superficial
// // const spiderman = Object.freeze(createHero({name: 'Spiderman', age: 30}))

// const spiderman = createHero({name: 'Spiderman', age: 30})


// Template union type
type HexadecimalColor = `#${string}`
const color: HexadecimalColor = '#534534'
// const color2: HexadecimalColor = '534534' // Error


// Union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerStale = 'local' | 'planetario' | 'universal' | 'multiversal'

// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
//     powerStale?: HeroPowerStale
// }

// function createHero(hero: Hero): Hero 
// {
//     const {name, age} = hero
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// const spiderman = createHero({name: 'Spiderman', age: 30})
// spiderman.powerStale = 'local'


// Intersection types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerStale = 'local' | 'planetario' | 'universal' | 'multiversal'

// type HeroBasic = {
//     name: string
//     age: number
// }

// type HeroProperties = {
//     readonly id?: HeroId
//     isActive?: boolean
//     powerStale?: HeroPowerStale
// }

// type Hero = HeroBasic & HeroProperties

// function createHero(heroBasic: HeroBasic): Hero 
// {
//     const {name, age} = heroBasic
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// const spiderman = createHero({name: 'Spiderman', age: 30})
// spiderman.powerStale = 'local'


// Type indexing
// type HeroProperties = {
//     isActive: boolean
//     address: {
//         planet: string
//         city: string
//     }
// }

// const addressHero: HeroProperties['address'] = {
//     planet: 'Tierra',
//     city: 'New York'
// }


// Type from values
// const address = {
//     planet: 'Tierra',
//     city: 'New York'
// }
// // El typeof en TypeScripts nos permite crear tipos a partir de código que 
// // ya existe
// type Address = typeof address


// Type from functions return
// function createAddress() {
//     return {
//         planet: 'Tierra',
//         city: 'New York'
//     }
// }
// // ReturnType nos retorna el tipo de retorno de una función y con el podemos
// // crear un tipo
// type Address = ReturnType<typeof createAddress>


// Arrays
// Dara error por la inferencia de TypeScript
// pensando que queremos que el array siempre este vacio
// const lenguajes = []
// lenguajes.push('JavaScript')

// De la forma correcta
// const lenguajes: string[] = [] // otra opción es Array<string> para el tipado
// lenguajes.push('JavaScript')
// lenguajes.push(2) // Error ya que solo permitiria strings

// // Para permitir mas de un tipo de dato
// const lenguajes2: (string | number)[] = []
// lenguajes2.push('JavaScript')
// lenguajes2.push(2)

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerStale = 'local' | 'planetario' | 'universal' | 'multiversal'

// type HeroBasic = {
//     name: string
//     age: number
// }

// const herosWithBasicInfo: HeroBasic[] = []

type CellValue = 'X' | 'O' | ''
type GameBoars = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoars = [
    ['X', 'O', ''],
    ['X', 'O', ''],
    ['X', 'O', '']
]

// Tuplas: Es un array (que en TypeScript es una tupla) 
// con un limite de elementos
type RGB = [number, number, number]
const RGB: RGB = [255, 0, 125] // 0 - 255