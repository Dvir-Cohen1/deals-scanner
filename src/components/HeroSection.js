import React from 'react'
import robotImage from '../assets/card.png'


function HeroSection() {
     return (
          <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 ">
               <div className="space-y-4 pr-24 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                         Get the BEST DEALS in one place
                         <span className="text-blue-500"> Digital agency</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                         <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white hover:bg-slate-200 text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                              Get started
                         </a>
                         <a href="javascript:void(0)" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                              Try it out
                         </a>
                    </div>
               </div>
               <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src={robotImage} alt="img" className="w-full mx-auto sm:w-10/12  lg:w-full" />
               </div>
          </section>
     )
}

export default HeroSection