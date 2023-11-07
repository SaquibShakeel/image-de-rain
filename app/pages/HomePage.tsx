import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import LinkButton from '../components/LinkButton';

type Props = {}

const HomePage = (props: Props) => {
    
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center bg-[#f5f5f5]">
      <h1 className='text-lg uppercase text-black'>Upload and de-rain image.</h1>
      <div className='flex items-center justify-center my-6'>
        <img className='rounded-lg w-[500px]' src="rain.png" alt="rain" />
        <AiOutlineDoubleRight className='text-6xl mx-4 text-teal-500' />
        <img className='rounded-lg w-[500px]' src="deRained.png" alt="rain" />
      </div>
      <LinkButton />
    </div>
  );
}

export default HomePage;