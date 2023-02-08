
import useFetchGifs from "../hooks/useFetchGifs"
import {GifItem} from "./GifItem"


export const GifGrid = ({categoria}) => {

    const {isLoading,gifs}=useFetchGifs(categoria)
  
    

    return (
        <>
            <h3>{categoria}</h3>

            {
                isLoading && (<p>cargando...</p>)
            }

            <div className="card-grid">
                {
                    gifs.map(({id,title,url})=>(
                        <GifItem key={id} title={title} url={url} />
                    ))
                }
            </div>

        </>
    )
}
// export default GifGrid
