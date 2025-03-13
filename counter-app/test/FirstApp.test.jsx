const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {
    test('Debe de hacer match con el snapshot', () => {
        const title = 'Hola soy Yuber'
        // renderiza el componente en memoria
        // El render, dentro de sus muchas fucnionalidades, expone un objeto con ciertas propiedades
        // una de ellas es container, que se parece a un nodo de HTML
        const {container, getByText} =  render(<FirstApp />)

        // Al tener un nodo HTML, podemos hacer la prueba creando una fotografia a ese nodo
        // Cuando ejecutemos esto la primera vez, guardar la captura en la carpeta __snapshots__ y sobre esa imagen 
        // se haran las comparaciones
        expect(container).toMatchSnapshot()
        
    })

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy Yuber'

        // Dentro del render tenemos varios metodos para extraer diferentes cosas
        // getByText nos permite buscar un texto dentro del nodo HTML
        const {container, getByText} =  render(<FirstApp subTitle={title}/>)
        const h2 = container.querySelector('h2')

        expect(getByText(title)).toBeTruthy()
        expect(h2.innerHTML).toContain(title)
    })
    
})