import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <section className='w-full bg-red-accent flex justify-center p-32'>
      <div className='grid grid-cols-3 gap-12'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default Cards