import { useState } from "react";
import { AddCategory , GifGrid } from "./components";
// import GifGrid from "./components/GifGrid";


const GitExpertApp =()=>{

    const [categorias, setCategorias] = useState(['music'])

    const onAddCategory =(e)=>{

        if(categorias.includes(e))  return
        setCategorias([e,...categorias])
    }

    return(
        <>
            <h1>GitExpert</h1>
            
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categorias.map((categoria)=>(
                    <GifGrid key={categoria} categoria={categoria}/>
                ))
            }
            

            
        </>
    )
}
export default GitExpertApp;