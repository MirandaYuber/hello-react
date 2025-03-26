const { render } = require("@testing-library/react")
const { FirstApp } = require("../../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = 'Hola soy Yuber'
    //     // renderiza el componente en memoria
    //     // El render, dentro de sus muchas fucnionalidades, expone un objeto con ciertas propiedades
    //     // una de ellas es container, que se parece a un nodo de HTML
    //     const {container, getByText} =  render(<FirstApp />)

    //     // Al tener un nodo HTML, podemos hacer la prueba creando una fotografia a ese nodo
    //     // Cuando ejecutemos esto la primera vez, guardar la captura en la carpeta __snapshots__ y sobre esa imagen 
    //     // se haran las comparaciones
    //     expect(container).toMatchSnapshot()
        
    // })

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy Yuber'

        // Dentro del render tenemos varios metodos para extraer diferentes cosas
        // getByText nos permite buscar un texto dentro del nodo HTML
        const {container, getByText, getByTestId} =  render(<FirstApp subTitle={title}/>)
        expect(getByText(title)).toBeTruthy()
        // No es una mala practica usar el testId, pero no es recomendado usarlo para todo
        expect(getByTestId('test-subtitle')).toBeTruthy()

        // Usando Tobe, se asegura de que sea completamente igual
        expect(container.querySelector('#subtitle').innerHTML).toBe(title)
        // usando toContain, se asegura de que el texto esté contenido en el nodo
        expect(container.querySelector('#subtitle').innerHTML).toContain(title)
        
        // No es recomendado hacerlo de la siguiente manera
        // const h2 = container.querySelector('h2')
        // expect(h2.innerHTML).toContain(title)
    })

    test('should ', () => {
        const title = 'Hola soy Yuber'
        const lang = 'PHP'

        const { getByText, getAllByText } =  render(<FirstApp subTitle={title} lang={lang}/>)

        // Si tenemos mas de un elemento con el mismo texto nos va a dar error
        // expect(getByText(lang)).toBeTruthy()
        
        // Para solucionar este problema, usamos getAllByText
        expect(getAllByText(lang).length).toBe(1)
    })
    
    
})