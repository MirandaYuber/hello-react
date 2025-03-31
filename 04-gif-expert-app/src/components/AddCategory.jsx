import { useState } from "react"

const AddCategory = () => {
    const [inputValue, setInpuValue] = useState('Dragon Ball')

    const onInputChange = (event) => {        
        setInpuValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue);
        
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
