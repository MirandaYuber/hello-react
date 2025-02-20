const { getImagen } = require("../../src/base-pruebas/11-async-await");

describe('Pruebas en 11-aync-await', () => {
    test('getImagen debe retornar una URL de la imagen', async() => {
        const url = await getImagen()
        
        expect(typeof url).toBe('string')
        expect(url.includes('http')).toBe(true)
    })
    
})