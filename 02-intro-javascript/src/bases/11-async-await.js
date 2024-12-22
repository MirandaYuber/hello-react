const getImagen = async () => {
    try {

        const apiKey = 'sjaP0BtAuXMNHOuWy6UtluQ5EdBL0sKc'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()

        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)   

    } catch (error) {

        console.error('Error:', error);
        
    }
}

getImagen()
