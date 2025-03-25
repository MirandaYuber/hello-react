// use significa en pocas palabras que es un Hook
import { useState } from "react"
import PropTypes from "prop-types"


// Usar rafc + Tab para que cree la estructura de un fuction component
export const CounterApp = ({ value }) => {
    // El segundo argumento usualmente es set + nombre del estado
    const [counter, setCounter] = useState( value ) 
    // Las funciones que no tengan interacción con el componente 
    // se pueden declarar fuera del componente
    const handleAdd = () => {
        // Al cambiar el estado de un componente se vuelve a renderizar
        // A partir de la version 18 solo se renderiza 1 vez por mas Hooks quue hayan
        // setCounter( counter + 1 )
        setCounter( (c) => c + 1 ) // Otra forma de hacerlo
    }

    const handleRemove = () => {
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ 
                // (event) => handleAdd(event) // Forma detallada
                handleAdd 
                }>
                +1
            </button>
            <button onClick={ handleRemove }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    )
}


// Se puede definir el tipo de dato que se espera recibir
CounterApp.propTypes = ({
    value: PropTypes.number
})
