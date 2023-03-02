import React from 'react'

import Hero from '../components/Hero'
import Search from '../components/Search'
import ServiceExplanation from '../components/ServiceExplanation'
import Sns from '../components/Sns'

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceExplanation />
      <Search />
      <Sns />
    </>
  )
}

export default Home