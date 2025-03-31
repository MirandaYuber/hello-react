import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {
    // Los hooks no tienen nombre, estan basados en su posición 
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const onAddCategory = () => {        
        setCategories(['HunterXHunter', ...categories])
    }

    return (
        <>
            <h1>Gif expert app</h1>
            
            <AddCategory />

            <button onClick={onAddCategory}> Agregar categoria </button>

            <ol>
                {/* Al usar construcción dinamica, tenemos que proporcionarle una propiedad key para cada elemento */}
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
