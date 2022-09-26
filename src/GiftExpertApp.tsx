import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/index';




export const GiftExpertApp = () => {
    

    const [categories, setCategories] = useState<string[]>([  ])
    

    const onAddCategory = (newCategory: any) => {

        if(categories.includes(newCategory)) return;

       
        setCategories([...categories, newCategory])

    }


    return (
    <>

    
        <h1 className='text-[1.5rem] mb-6 text-center font-bold'>GiftExpertApp</h1>

       
         <AddCategory 
         
         onNewCategory = {onAddCategory} />
          
            {
            categories.map( (category) => (
                    <GifGrid key={category}
                    category = {category} />
                ) ) 
             }

    </>)
}