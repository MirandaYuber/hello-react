import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(0)

  // El useEffect se utiliza para disparar efectos secundarios 
  // (proceso a ejecutar cuando algo suceda) en componentes funcionales
  useEffect(() => {
    getGifs(category)
  }, []) 
  // El segundo argumento es un array de dependencias, si no se pasa, se ejecuta cada vez que el componente se renderiza
  // Si se pasa un array vacio, se ejecuta una sola vez al cargar el componente
  // Si se pasa un array con variables, se ejecuta cada vez que alguna de esas variables cambia
    
  return (
    <div>
      <h3>{ category }</h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}> +1 </button>
    </div>
  )
}

export default GifGrid
