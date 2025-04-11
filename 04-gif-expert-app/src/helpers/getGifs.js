export const getGifs = async (category) => {
    const key = 'iKLd3jFD8pf3ipEVtNesIAGzMfJFbc7d'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`
    

    const response = await fetch(url)
    const {data} = await response.json()

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))
    console.log(gifs);

    return gifs
}