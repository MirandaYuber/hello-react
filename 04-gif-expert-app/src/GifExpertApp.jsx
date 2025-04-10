import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {
    // Los hooks no tienen nombre, estan basados en su posición 
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

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
