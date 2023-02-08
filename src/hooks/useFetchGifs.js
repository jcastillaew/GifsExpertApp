import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"


const useFetchGifs =(categoria)=>{

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages=async()=>{
        const images=await getGifs(categoria)
        setGifs(images)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        gifs, isLoading
    }
}
export default useFetchGifs