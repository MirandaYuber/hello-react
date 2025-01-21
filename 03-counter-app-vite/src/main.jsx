// Escribir irm y presionar tab para importar React
// Importaciones para renderizar
import React from 'react'
import ReactDOM from 'react-dom/client'

// Todo en React es un componente(función)
// Todos los nombres de los functions components deben empezar con mayúscula UpperCamelCase
const App = () => {
    // document.createElement('h1')
    return (
        <>
            <h1>Hola Mundo</h1>
        </>
    )
} 

ReactDOM.createRoot(document.getElementById('root')).render(
    // Se aconceja usar el modo estricto
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
