import { useFechGifs } from '../hooks/useFechGifs'
import {GifItem} from './GifItem'

interface GIfGridProps {
  categorie: string
}

export const GifGrid: React.FC<GIfGridProps> = ({categorie}) => {
  const {gifs, isLoading} = useFechGifs(categorie)

  return (
    <div>
      <h3>{categorie}</h3>

      {
        isLoading && (<p>Cargando...</p>)
      }

      <div className='card-grid'>
        {
          gifs.map((gif) => {
            if (gif.title === '') gif.title = `{categorie}`

            return(
              <GifItem
                key={gif.id}
                {...gif}
              />
            )
          })
        }
      </div>
    </div>
  )
}
