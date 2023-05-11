import { useState } from "react"
import { AddCategory,GifGrid  } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const [num,setNum] = useState(0)
    
    const onAddCategory = (newCategory) => {

      if( categories.includes(newCategory) ) return;
      // categories.push(newCategory);
      setCategories([newCategory,...categories]);
    }
    
    
  return (
    <>
        
        <h1>GifExpertApp</h1>
        
        
        <AddCategory
           onNewCategory = { (value) => onAddCategory(value) }
           
         />
{/* //  setCategories={ setCategories  */}
        
        
        
            {
             categories.map( ( category,i ) => 
                (
                  <GifGrid key={ category } category={ category }/>
                )
             
            //  Codigo de muestra para que veas que es lo mismo este codigo de
            // abajo quye el codigo de arriba
            //  categories.map( ( category,i ) => {
            //   return (
            //    <div key={ category }>
            //      <h3>{ category}</h3>
            //     <li>{ category }</li>
            //    </div>
            //   )
            // }
             )
            }
          
    </>
  )
}
