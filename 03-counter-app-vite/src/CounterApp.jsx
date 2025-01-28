import PropTypes from "prop-types"


// Usar rafc + Tab para que cree la estructura de un fuction component
export const CounterApp = ({ value }) => {
    // Las funciones que no tengan interacción con el componente 
    // se pueden declarar fuera del componente
    const handleAdd = (value) => {
        console.log(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd(value) }>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = ({
    value: PropTypes.number
})
