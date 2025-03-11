const { getImagen } = require("../../src/base-pruebas/11-async-await");

describe('Pruebas en 11-aync-await', () => {
    test('getImagen debe retornar un error si no tenemos api key', async() => {

        const response = await getImagen()
                
        expect(typeof response).toBe('string')
        expect(response).toBe('No existe la imagen')
        // expect(response.includes('http')).toBe(true)

    })
    
})