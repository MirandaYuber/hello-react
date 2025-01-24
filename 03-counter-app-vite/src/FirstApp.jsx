import { Fragment } from "react"

// No es permitido enviar objetos completos para ser renderizados, para esto se debe convertir
// en un array de elementos o en un string.
const newMessage2 = {
    name: 'Yuber',
    age: 23
}

const saludar = (name) => {
    return `Hola ${name}`
}

export const FirstApp = () => {
    return (
        // Para regresar varios elementos en la raiz del functional component 
        // hay que envoverlo en un nodo padre.
        // Para evitar usar un div y aun así hacer una agrupación de elementos en versiones
        // pasadas de React se usa los Fragmentos así.
        // <Fragment>
        //     <h1>First App</h1>
        //     <p>Soy un subtitulo</p>
        // </Fragment>    

        // Otra forma de hacerlo es usando la etiqueta vacía <></> así evitamos la importación
        <>
            <h1>{ saludar('Yuber Miranda') }</h1>
            <p>Soy un subtitulo</p>
            
            <p>Tengo { newMessage2.age } años</p>
            {/* Para renderizar un objeto completo se debe convertir en un string */}
            <code>{ JSON.stringify(newMessage2) }</code>
        </>
    )
}