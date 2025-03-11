const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {
    test('Debe de hacer match con el snapshot', () => {
        // renderiza el componente en memoria
        render(<FirstApp />)
        
    })
})