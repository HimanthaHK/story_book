import Image from 'next/image'
import React, { useState } from 'react'

function StoryType() {

    const OptionList=[
        {
            label:'Story Book',
            imageUrl:'/no.jpg',
            isFree:true
        },
        {
            label:'Bed Story',
            imageUrl:'/beds.jpg',
            isFree:true
        },
        {
            label:'Educational',
            imageUrl:'/edu.jpg',
            isFree:true
        }
    ]
    const [selectedOption,setselectedOption]=useState<string>();

  return (
    <div>
       <label className='font-bold text-4xl text-primary'>
            2 Story Type
        </label>
        <div className='grid grid-cols-3 gap-5 mt-3 '>
            {OptionList.map((item,index)=>(
                <div className={`relative grayscale hover:grayscale-0 cursor-pointer p-1
                    ${selectedOption==item.label?'grayscale-0 border-2 rounded-3xl border-primary font-bold':'grayscale'}


                `} onClick={()=>
                    setselectedOption(item.label)
                }>
                    <h2 className='absolute bottom-5 text-2xl
                    text-blue-900 text-center w-full'>{item.label}</h2>
                    <Image src={item.imageUrl} alt={item.label} width={300}
                    height={500} className='object-cover h-[260px] rounded-3xl'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default StoryType