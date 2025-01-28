import PropTypes from "prop-types"

// Usar rafc + Tab para que cree la estructura de un fuction component
export const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>
    )
}

CounterApp.propTypes = ({
    value: PropTypes.number
})
