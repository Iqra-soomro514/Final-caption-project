import React from 'react'
import Category from './category/Category'
import HeroSection from './hero-section/HeroSection'
import Gallery from './earbud-gallery/EarbudGallery'
import Products from './products/Products'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
// import Header from '../header/Header'
import SmartWatches from './smart-watches/SmartsWatche'
import MobileSection from './mobile-secion/MobilesSection'
import PriceSection from './price-section/PricesSection'
import CustomCard from './custom-card/CustomCard'
import TrimmersShaver from "./trimmer-shaver/TrimmersShaver"
import SubSection from './sub-section/SubsSection'
import Footer from '../footer/Footer'
import SmartWatche from './smart-watches/SmartsWatche'
import MobilesSection from './mobile-secion/MobilesSection'
import TrimmerShaver from './trimmer-shaver/TrimmersShaver'
import SubsSection from './sub-section/SubsSection'
import PricesSection from './price-section/PricesSection'



const Home = () => {
  return (
    <>
      {/* <Header/> */}
    <Box className="!bg-slate-100">
    
      <Category/>
      <HeroSection/>
      <Gallery/>
      <Products/>
      <BestSellers/>
      <SmartWatche />
      < MobilesSection/>
      <PricesSection />
      <CustomCard />
      <TrimmerShaver />
      <SubsSection />
      <Footer />
    </Box> 
   
    </>
  )
}

export default Home