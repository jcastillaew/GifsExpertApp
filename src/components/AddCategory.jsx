import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')

    const onChange=(e)=>{
        setInputValue(e.target.value)
        
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(inputValue.trim().length <=1)return
        onNewCategory(inputValue.trim())
        setInputValue('')

    }
  
    return (
        <form onSubmit={onSubmit}>
            <input 
                type={'text'}
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onChange}
            />
        </form>
  )
}

// export default AddCategory
