// Escribir irm y presionar tab para importar React
// Importaciones para renderizar
import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './HelloWorldApp' // Importación por defecto
// import { HelloWorldApp } from './HelloWorldApp' // Importación por desestructuración
import { FirstApp } from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    // Se aconceja usar el modo estricto
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)