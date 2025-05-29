import { useState } from 'react'
import './index.css'
// import {Particles} from './components/Particles'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'


const GifExpertApp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([])

  const onAddCategory = (newCategorie: string) => {
    if (categories.includes(newCategorie)) return 

    setCategories([newCategorie, ...categories])
  }

  return (
    <>
    <div className='container'>
      <h3>Gif</h3>
      <AddCategory onAddCategory={onAddCategory}/>

      {
        categories.map((categorie: string) => {
          return (
            <GifGrid 
              key={categorie}
              categorie={categorie}/>
          )
        })
      }
    </div>
    </>
  )
}

export default GifExpertApp
