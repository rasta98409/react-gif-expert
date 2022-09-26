import React, { useState } from 'react'
import { GiftExpertApp } from '../GiftExpertApp'
import { Categories } from '../interfaces/ListadoGifts';




export const AddCategory = ({onNewCategory}: Categories) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     
    
        setInputValue(event.target.value)
  

    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;

        onNewCategory(inputValue.trim())
        setInputValue('') // TE PREGUNTARAS PORQUE ESTO AQUI ASI, ESTO ES LO QUE HACE QUE CUANDO DEMOS ENTER SE LIMPIE EL INPUT, OSEA SE BORRE Y ESCRIBAMOS ALGO NUEVO
    


    }

  return (

    <form onSubmit={onSubmit} action="">
        <input 
            className='bg-white rounded-[5px] mb-6 border-[5px] border-violet-200 border-solid  text-black font-[1.2rem]   outline-none pl-[10px] pr-[10px] w-[100%]  ' 
            type="text" 
            placeholder='Buscar Gift'
            value={inputValue}
            onChange={onInputChange}>
        
            
        </input>
    </form>
    
  )
}
