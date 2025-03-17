const { render, screen } = require("@testing-library/react");
const { CounterApp } = require("../../src/CounterApp");

describe('Pruebas en <CounterApp />', () => {
  const counter = 100

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={counter}/>)

    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value={counter}/>)
    
    expect(screen.getByText(counter)).toBeTruthy()
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')
  })
  
  
})
