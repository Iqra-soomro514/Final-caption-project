import React from 'react'
import CategoryBar from './category-bar/CategoryBar'
import HeroSection from './hero-section/HeroSection'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import ProductWithMedia from './product-with-media/ProductWithMedia'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
import SmartWatches from '../home/SmartWatches/SmartWatches'
import MobilesLatest from './Mobile-lastest/MobileLatest'
import BrandsIcon from './BrandsIcon'
import Footer from '../footer/Footer'

const Home = () => {
  return (
   <>
    <Box className="!bg-slate-100">
      <CategoryBar/>
      <HeroSection/>
      <EarbudGallery/>
      <ProductWithMedia/>
      <BestSellers/>

    </Box>
    <SmartWatches />
    <MobilesLatest/>
    <BrandsIcon/>
    <Footer/>
        
   </>
   
  )
}

export default Home