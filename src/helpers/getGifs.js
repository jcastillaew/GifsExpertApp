


const getGifs=async(categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=qdiGcGNEdQ58JexeSSOazGvoWe3XeBpl&q=${categoria}&limit=5`

    try {
        const resp = await fetch(url)
        const {data}= await resp.json()
      

        const gifs=data.map(img=>({
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
        ))

    
        return gifs

    } catch (error) {
        console.log(error)
    }
    
}
export default getGifs;