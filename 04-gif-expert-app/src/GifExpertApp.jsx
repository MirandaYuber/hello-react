import { useState } from "react"
import {AddCategory,GifGrid,TrueFocus, Aurora} from './components'
// import AddCategory from "./components/AddCategory"
// import GifGrid from "./components/GifGrid"


export const GifExpertApp = () => {
    // Los hooks no tienen nombre, estan basados en su posición 
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {        
        if (categories.includes(newCategory)) return
        
        setCategories([newCategory, ...categories])
    }

    return (
        <>  
            <Aurora
                colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
                blend={0.5}
                amplitude={1.0}
                speed={1}
            />
            <TrueFocus 
                sentence="GiftExpert App"
                manualMode={false}
                blurAmount={5}
                borderColor="#00D8FF"
                animationDuration={0.5}
                pauseBetweenAnimations={3}
            />
            
            <div className="container">
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
            </div>
        </>
    )
}
