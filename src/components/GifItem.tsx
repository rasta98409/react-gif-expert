import React from 'react'

export const GifItem = ({title, url}: any) => {

   
  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-[10px]  shadow-md h-[0%] mb-[20px] mr-[20px]   overflow-hidden '>
        <img className=' w-[100%] ' src={url} alt="title" />
        <p className=' font-semibold bg-white flex-1 text-[1.5rem] mt-[5px] text-center pl-[20px] pr-[20px] pb-[5px] '>{title}</p>
    </div>
  )
}
