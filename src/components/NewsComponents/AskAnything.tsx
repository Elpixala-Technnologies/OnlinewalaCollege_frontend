import React from 'react'
import "../../app/globals.css"
import Image from 'next/image'
import college_image from "@/assets/images/college-image.png"

function AskAnything() {
  return (
    <div className=" relative lg:h-56 h-64 my-3 rounded-2xl mx-14" >
        <Image
        src={college_image}
        alt='image'
        layout="fill"
        objectFit="cover"
        className="w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl blur-sm flex items-center  p-4"></div>
        <p className='xl:text-4xl text-2xl lg:text-3xl lg:font-semibold absolute lg:top-1 top-6 text-center lg:my-14 lg:mx-8 text-white '>Have a doubt in selecting College ?</p>
        <p className='absolute  lg:text-lg text-white lg:top-16 text-center top-24 text-sm mx-6 lg:m-14 lg:font-medium '>Ask anything and get your answers in 48 hours</p>
        <button className=' absolute lg:top-20 rounded-xl lg:text-2xl text-xl font-medium lg:font-semibold lg:right-6 lg:px-14 px-8 top-44 mx-10 py-2 lg:py-3 bg-white'>Ask Anything</button>
        
    </div>
  )
}

export default AskAnything