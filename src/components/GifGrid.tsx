import React, { useEffect } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';






export const GifGrid = ({category}: any) => {

    const {images, isLoading} = useFetchGifs(category)
    
    
  


    return (
        <>
            <h3 className=' mb-6  font-semibold text-[3rem]  '>{category}</h3>

            {isLoading
            ? ( <h2>Cargando...</h2> )
            : null
            
            }
            <div className=' flex flex-row flex-wrap justify-center '>
                {images.map( (image: any) => {
                    return (
                    <GifItem 
                    key={image.id}
                    title = {image.title}
                    url = {image.url}
                     />
                    )

                } )}
            </div>
            
        </>
    )

}
