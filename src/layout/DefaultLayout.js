import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Explore from '../components/Explore'

import HeroSection from '../components/HeroSection'
// import DealsOfToday from '../components/Products/DealsOfToday'
import Testimonials from '../components/Testimonials'

console.log(Testimonials)
function DefaultLayout({ children }) {
     return (
          <>
               <Header />
               <main className='grow bg-gray-900 hero-section'>
                    <HeroSection />
                    {children}
               </main>
               {/* <DealsOfToday /> */}
               <Testimonials />
               <Explore />
               <Footer />

          </>
     )
}

export default DefaultLayout