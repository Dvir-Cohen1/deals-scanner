import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from '../components/HeroSection'
import DealsOfToday from '../components/Products/DealsOfToday'


function DefaultLayout({ children }) {
     return (
          <>
               <Header />
               <main className='grow bg-gray-900 hero-section'>
                    <HeroSection />
                    {children}
               </main>
               <DealsOfToday />
               <Footer />
          </>
     )
}

export default DefaultLayout