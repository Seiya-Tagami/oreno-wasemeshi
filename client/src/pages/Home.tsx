import React from 'react'

import Hero from '../components/Hero'
import Search from '../components/Search'
import ServiceExplanation from '../components/ServiceExplanation'
import Cards from '../components/Cards'
import Sns from '../components/Sns'

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceExplanation />
      <Search />
      <Cards />
      <Sns />
    </>
  )
}

export default Home