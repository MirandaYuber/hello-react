import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
    // Los hooks no tienen nombre, estan basados en su posición 
    const [categories, setCategories] = useState(['gta'])

    const onAddCategory = (newCategory) => {        
        if (categories.includes(newCategory)) return
        
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif expert app</h1>
            
            <AddCategory 
                // Al enviar el setCategories y pasarle un callback, podemos acceder a su estado actual
                // setCategories={setCategories}

                onNewCategory={onAddCategory}
            />
            
            {/* <button onClick={onAddCategory}> Agregar categoria </button> */}

            {/* Al usar construcción dinamica, tenemos que proporcionarle una propiedad key para cada elemento */}
            {
                categories.map((category) => {
                    return (<GifGrid 
                        key={category}
                        category={category}
                    />)
                })
            }
        </>
    )
}

export default GifExpertApp
