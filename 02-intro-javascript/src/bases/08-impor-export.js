import heroes, { owners } from '../data/heroes'
// console.log(owners);

// Forma mas simplificada
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id)
// console.log(getHeroes(1))

const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner )
}
// console.log(getHeroesByOwner('Marvel'));

export {
    getHeroeById,
    getHeroesByOwner
}