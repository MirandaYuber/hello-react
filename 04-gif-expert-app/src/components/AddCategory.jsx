import { useState } from "react"

const AddCategory = (
    {setCategories}
) => {
    const [inputValue, setInpuValue] = useState('')

    const onInputChange = (event) => {        
        setInpuValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length <= 1) return
        
        setCategories(categories =>  [inputValue, ...categories])

        setInpuValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue} 
                onChange={onInputChange}
            />

        </form>
    )
}

export default AddCategory
