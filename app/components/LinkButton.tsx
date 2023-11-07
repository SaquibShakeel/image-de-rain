'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {}

const LinkButton = (props: Props) => {

    const router = useRouter();

  return (
    <button className="group relative h-12 w-48 overflow-hidden rounded-md bg-teal-500 text-lg font-bold text-white" onClick={()=>{
        router.push('/uploadImage')
      }}>
        Upload Image
        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
  )
}

export default LinkButton