import {GifItem} from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  // const getImages = async() => {
  //   const newImages = await getGifs(category)
  //   setImages(newImages)
  // }

  // El useEffect se utiliza para disparar efectos secundarios 
  // (proceso a ejecutar cuando algo suceda) en componentes funcionales
  // El solo debe recibir una función, no una promesa
  // useEffect(() => {
  //   getImages()    
  // }, []) 
  // El segundo argumento es un array de dependencias, si no se pasa, se ejecuta cada vez que el componente se renderiza
  // Si se pasa un array vacio, se ejecuta una sola vez al cargar el componente
  // Si se pasa un array con variables, se ejecuta cada vez que alguna de esas variables cambia

  // Lo anterior lo podemos simplificar con un hook personalizado
  const {images, isLoading} = useFetchGifs(category)
  
    
  return (
    <div>
      <h3>{ category }</h3>

      {/* 
        Hay diferentes formas de condicionar. Ya sea con clases, validación o un componente que se encargue de hacerlo 
        En este caso, lo hice con un ternario
      */}

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      {/* 
        Dentro de un componente, no podemos usar class para las clases de etiquetas
        ya que seguimos estando dentro de un contexto de JavaScript, para esto usamos className
      */}
      <div className="card-grid">
        {          
          images.map((image) => {
            if (image.title === '') image.title = `${category}`

            return(
              <GifItem 
                key={image.id} 
                {...image}
              />
            )
          })
        }
      </div>
    </div>
  )
}
