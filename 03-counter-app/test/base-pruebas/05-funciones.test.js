const { getUser, getUsuarioActivo } = require("../../src/base-pruebas/05-funciones")

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    // Para comparar objetos debemos usar toStrictEqual ya que en los objetos se comparan en base a la referencia en memoria
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();

    expect(user).toStrictEqual(testUser)    
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Yuber'
    const testUser = {
      uid: 'ABC567',
      username: name
    }

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual(testUser)
  })

})
