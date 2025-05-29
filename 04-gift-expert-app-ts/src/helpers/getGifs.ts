import type {GifData} from './../types/gif'

interface GetGifsProps {
    (categorie: string): Promise<GifData[]>
}

interface GifFromAPI {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export const getGifs: GetGifsProps = async(categorie) => {
    
    const key = 'tG1BLDSYQi17JcsGZw2ucIpu9K3HzKtU'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${categorie}&limit=10`

    const response = await fetch(url)
    const {data}: {data: GifFromAPI[]} = await response.json()

    const gifs: GifData[] = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }))
    
    return gifs
}