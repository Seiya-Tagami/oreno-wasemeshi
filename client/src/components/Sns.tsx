import React from 'react'
import { Link } from 'react-router-dom'

const Sns = () => {
  return (
    <div className='flex md:flex-col fixed md:right-0 md:top-96 bottom-0 right-0'>
      <div className='w-[60px] h-[60px] bg-red-accent flex justify-center items-center'>
        <span className='text-white font-bold'>SNSは<br />こちら</span>
      </div>
      <Link to="https://twitter.com/jh14228yk?s=20"><img className='w-[60px] h-[60px]' src='/img/twitter.png' /></Link>
      <Link to="/"><img className='w-[60px] h-[60px]' src='/img/instagram.png' /></Link>
    </div>
  )
}

export default Sns