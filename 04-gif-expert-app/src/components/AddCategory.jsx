import { useState } from "react"

export const AddCategory = (
    {onNewCategory}
) => {
    const [inputValue, setInpuValue] = useState('')

    const onInputChange = (event) => {        
        setInpuValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        const newInputValue = inputValue.trim()

        if (newInputValue.length <= 1) return
        
        // setCategories(categories =>  [inputValue, ...categories])
        onNewCategory(newInputValue)
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
