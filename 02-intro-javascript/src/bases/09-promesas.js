import { getHeroeById } from "./bases/08-impor-export";

// Se crean con un argumento callback
// resolve: Promesa exitosa
// reject: Promesa fallida
// const promesa = new Promise(( resolve, reject ) => {    
//     setTimeout(() => {
//         const heroe = getHeroeById(1)
//         resolve(heroe)
//         reject('No se pudo encontrar el heroe')
//     }, 2000);
// })

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch( err => console.warn(err) )

const getHeroeByIdAsync = (id) => {
    return new Promise(( resolve, reject ) => {    
        setTimeout(() => {
            const heroe = getHeroeById(id)

            if (heroe) {
                resolve(heroe)                
            } else {
                reject('No se pudo encontrar el heroe.')
            }

        }, 2000);
    })
}

getHeroeByIdAsync(2)
    .then((heroe) => console.log(heroe))
    .catch((err) => console.warn(err))

// Foma simplificada
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)

