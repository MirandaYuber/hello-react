export interface GifData {
    id: string,
    title: string,
    url: string
}

export interface GetGifsCategorie {
    gifs: Array<GifData>,
    isLoading: boolean
}