// describe es una función que agrupa pruebas
describe('Pruebas componente <DemoComponent />', () => {
    test('Este prueba no debe fallar', () => {
        // 1. Inicialización
        const message1 = 'Hola, Mundo'
    
        // 2. Estimulo
        const message2 = message1.trim()    
    
        // 3. Observar el comportamiento... esperado
        // Condición que se espera que se cumpla
        // En este caso message1 === message2
        expect(message1).toBe(message2)
    
    })
})