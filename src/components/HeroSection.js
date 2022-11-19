import React from 'react'
import robotImage from '../assets/card.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function HeroSection() {
     return (
          <section className="mb-12 mx-auto container items-center lg:flex md:px-8">
               <div className="py-56 space-y-4 flex-1 text-left sm:text-left md:text-left lg:text-left">
                    <p className="inline-flex items-center p-1 pr-2 text-white bg-gray-800 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"><span className="mx-4 text-sm">Tailwind CSS Version</span><span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-600 rounded-full">v3.1.6</span></p>
                    <h1 className="text-white font-bold text-4xl xl:text-5xl xxs:text-left xs:text-left ms:text-left">
                         Get the Best Deals in one place
                         <span className="text-blue-500 font-extrabold"> Digital agency</span>
                         <div className="flex mx-auto mt-6">
                              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                         </div>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                         <button className="flex items-center px-4 py-2 font-medium tracking-wide text-gray-800 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                              <span className="mx-1">Get started</span>

                         </button>
                         <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                              <span className="mx-1">Try it out</span>
                              {/* <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                   <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                              </svg> */}
                              <ArrowRightAltIcon />
                         </button>
                    </div>
               </div>
               <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 hero-image-container">
                    {/* <img src={robotImage} alt="img" className="w-full mx-auto sm:w-10/12  lg:w-full" /> */}
                    <img src="https://merakiui.com/images/header-image.svg" alt=""></img>
               </div>
          </section>
     )
}

export default HeroSection