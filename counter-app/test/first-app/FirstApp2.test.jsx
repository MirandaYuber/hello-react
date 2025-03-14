const { render, screen } = require("@testing-library/react")
const { FirstApp } = require("../../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {
    const subtitle = 'Hola soy Yuber'
    const lang = 'PHP'

    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp subTitle={subtitle} />)

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje Hola soy Yuber', () => {
        render(<FirstApp subTitle={subtitle} />)

        // El screen es el objeto de todo el componente que estamos renderizando obteniendo su ultima vesión actualizada
        // console.log(screen.debug());
        expect(screen.getByText(subtitle)).toBeTruthy()
    })
    
    test('Debe de mostrar el titulo en un <h1>', () => {
        render(<FirstApp subTitle={subtitle} />)

        // El role hace referencia a las etiquetas HTML        
        expect(screen.getByRole('heading',{ level: 2 }).innerHTML).toContain(subtitle)
        
    })

    test('Debe de mostrar el lenguaje enviado por props', () => {
        render(<FirstApp subTitle={subtitle} lang={lang} />)

        expect(screen.getByRole('paragraph').innerHTML).toContain(lang)
        
    })

    test('Debe de mostrar el lenguaje por defecto JS ', () => {
        render(<FirstApp subTitle={subtitle}/>)

        expect(screen.getByRole('paragraph').innerHTML).toContain('JS')
        expect(screen.getAllByText('JS').length).toBe(1)
        
    })    
})