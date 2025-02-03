const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr")

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe retornar un arreglo', () => {
        const [letters, numbers] = retornaArreglo();
        console.log(letters, numbers);

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // expect.any() es una función de Jest que permite comparar el tipo de dato de una variable
        expect(letters).toEqual(expect.any(String));        
        expect(numbers).toEqual(expect.any(Number));        
    })
})