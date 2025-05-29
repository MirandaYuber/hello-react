import { useEffect, useState } from "react"
import {getGifs} from './../helpers/getGifs'
import type {GetGifsCategorie, GifData} from './../types/gif'

interface UseFechGifs {
    (categorie: string): GetGifsCategorie
}

export const useFechGifs: UseFechGifs = (categorie) => {
  const [gifs, setGifs] = useState<GifData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getNewsGifs = async () => {
    const newsGifs = await getGifs(categorie) 

    setGifs(newsGifs)
    setIsLoading(false)
  }

  useEffect(() => {
    getNewsGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}
