import { Button } from '@heroui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-10 h-screen' >
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h3 className='text-[70px] text-primary font-extrabold py-10'>
                    Craft Magical Stories For Kids In Miutes</h3>
                <p className='text-2xl text-primary font-light'>Create Fun and Personalised Stories That Bring Your Child's 
                    Adventures To Life and Spark Their Passion For Reading. It Only Takes
                    Few Seconds!! </p>
                <Link href={'/create-story'}>
                <Button size='lg' color='primary' className='mt-5 font-bold text-xl p-8'>Create Stories</Button>
                </Link>

            </div>
            <div>
                <Image src={'/cover1.png'} alt='cover' width={700} height={400}/>
            </div>

        </div>
    </div>
  )
}

export default Hero