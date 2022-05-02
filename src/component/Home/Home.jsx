import React from 'react'
import './Home.css'
import Featured from '../Featured/Featured'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import FeaturedProperties from '../Featured/FeaturedProperties'
import PropertyList from '../Property/PropertyList'
import Footer from '../Footer/Footer'
import MailList from '../Mail/MailList'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home