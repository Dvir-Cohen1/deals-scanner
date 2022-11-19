import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Explore from '../components/Explore'
import Pricing from '../components/Pricing'
import SubscriptionForm from '../components/SubscriptionForm'

import HeroSection from '../components/HeroSection'
// import DealsOfToday from '../components/Products/DealsOfToday'
import Testimonials from '../components/Testimonials'

function DefaultLayout({ children }) {
     return (
          <>
               <Header />
               <main className='grow bg-gray-900 hero-section'>
                    <HeroSection />
               </main>
               <Testimonials />
               <Explore />
               <Pricing />
               <main className='grow bg-gray-900 p-8'>
                    <SubscriptionForm />

               </main>
               <Footer />

          </>
     )
}

export default DefaultLayout