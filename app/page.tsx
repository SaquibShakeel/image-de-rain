import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <Navbar />
    <HomePage />
    </>
  )
};

export default page;