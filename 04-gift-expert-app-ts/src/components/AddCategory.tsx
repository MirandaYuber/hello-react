import { useState } from "react"

interface AddCategoryProps {
  onAddCategory: (newCategorie: string) => void
}

export const AddCategory: React.FC<AddCategoryProps> = ({
    onAddCategory
}) => {
  const [newCategorie, setNewCategory] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value)
  }

  const onAddNewCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(newCategorie.length <= 2) return

    onAddCategory(newCategorie)
    setNewCategory('')
  }


  return (
    <div>
      <form onSubmit={onAddNewCategory}>
        <input type="text" value={newCategorie} onChange={onInputChange}/>
      </form>
    </div>
  )
}
