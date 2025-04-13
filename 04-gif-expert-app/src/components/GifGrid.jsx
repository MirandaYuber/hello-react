import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

const GifGrid = ({ category }) => {
  
  const [counter, setCounter] = useState(0)
  const [images, setImages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  // El useEffect se utiliza para disparar efectos secundarios 
  // (proceso a ejecutar cuando algo suceda) en componentes funcionales
  // El solo debe recibir una función, no una promesa
  useEffect(() => {
    getImages()    
  }, []) 
  // El segundo argumento es un array de dependencias, si no se pasa, se ejecuta cada vez que el componente se renderiza
  // Si se pasa un array vacio, se ejecuta una sola vez al cargar el componente
  // Si se pasa un array con variables, se ejecuta cada vez que alguna de esas variables cambia
    
  return (
    <div>
      <h3>{ category }</h3>

      <ol>
        {
          images.map(({id, title, url}) => {
            if (title === '') title = `${category}`

            return(
              <li key={id}>
                <a href={url} target="_blank">{title}</a>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default GifGrid
