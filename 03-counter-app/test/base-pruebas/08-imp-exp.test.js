import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp.test.js', () => {
    test('getHeroeById debe retornar un heroe por Id', () => {
        const idHeroe = 1
        const heroe = getHeroeById(idHeroe);
        
        expect(heroe.id).toBe(idHeroe);
        expect(heroe.name).toBe('Batman');        
    })

    test('getHeroeById debe retornar un undefined si no existe', () => {
        const idHeroe = 100
        const heroe = getHeroeById(idHeroe);
        
        expect(heroe).toBe(undefined);
    })

    test('getHeroesByOwner debe retornar un arreglo de héroes que pertenecen a DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(expect.any(Array));
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))    
    })

    test('getHeroesByOwner debe retornar un arreglo de héroes que pertenecen a Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual(expect.any(Array));
        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        expect(heroe.length).toBe(2);
    
    })
    
})