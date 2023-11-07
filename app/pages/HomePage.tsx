import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import LinkButton from '../components/LinkButton';

type Props = {}

const HomePage = (props: Props) => {
    
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center">
      <h1 className='text-lg uppercase'>Upload and de-rain image.</h1>
      <div className='flex items-center justify-center my-4'>
        <img className='border-2 rounded-lg border-teal-500 p-1 w-[500px]' src="rain.png" alt="rain" />
        <AiOutlineDoubleRight className='text-6xl mx-4' />
        <img className='border-2 rounded-lg border-teal-500 p-1 w-[500px]' src="deRained.png" alt="rain" />
      </div>
      <LinkButton />
    </div>
  );
}

export default HomePage;