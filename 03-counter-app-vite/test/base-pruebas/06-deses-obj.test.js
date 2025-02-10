const { usContext } = require("../../src/base-pruebas/06-deses-obj")

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {
    const clave = 'Ironman'
    const nombre = 'Tony'
    const anios = 45

    const userTest = {
        nombreClave: clave,
        anios: anios,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
    const user = usContext({ clave, nombre, edad: anios });
    

    expect(userTest).toEqual(user)
  })
  
})
