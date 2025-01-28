// Escribir irm y presionar tab para importar React
// Importaciones para renderizar
import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './HelloWorldApp' // Importación por defecto
// import { HelloWorldApp } from './HelloWorldApp' // Importación por desestructuración
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    // Se aconceja usar el modo estricto
    <React.StrictMode>
        {/* 
            Los props son propiedades que se le pueden enviar a un componente desde 
            el componente padre.
        */}
        {/* <FirstApp subTitle="Tengo 23 años"/> */}
        <CounterApp value={0}/>
    </React.StrictMode>
)