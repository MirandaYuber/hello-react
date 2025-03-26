const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../../src/CounterApp");

describe('Pruebas en <CounterApp />', () => {
  const inititalValue = 100

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={inititalValue}/>)

    expect(container).toMatchSnapshot()

  })

  test('Debe mostrar el valor inicial de 100', () => {

    render(<CounterApp value={inititalValue}/>)
    
    expect(screen.getByText(inititalValue)).toBeTruthy()
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')

  })
  
  test('Debe aumentar al dar clic en el botón de +1', () => {
    
    render(<CounterApp value={inititalValue}/>)
    fireEvent.click(screen.getByText('+1'))

    expect(screen.getByText(101)).toBeTruthy()
    
  })
  
  test('Debe simular al dar clic en el botón de -1', () => {
    
    render(<CounterApp value={inititalValue}/>)
    fireEvent.click(screen.getByText('-1'))
    
    expect(screen.getByText(99)).toBeTruthy()
    
  })
  
  test('Debe simular al dar clic en el botón de reset', () => {
    
    render(<CounterApp value={inititalValue}/>)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

    expect(screen.getByText(inititalValue)).toBeTruthy()
    
  })
})
