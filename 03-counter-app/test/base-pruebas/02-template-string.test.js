const { getSaludo, getResult } = require("../../src/base-pruebas/02-template-string");

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Yuber"', () => {
        const name = 'Yuber';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })

    test('getResult debe retornar un número', () => {
      const a = 5;
      const b = 10;
      const result = getResult(a, b);

      expect(result).toBe(a + b);
    })
    
    
})
