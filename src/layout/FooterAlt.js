import React from 'react'

function FooterAlt() {
  return (
     <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
     <div className="container py-6">
         <h1 className="text-lg font-bold text-center lg:text-2xl">
             Join 31,000+ other and never miss <br/> out on new tips, tutorials, and more.
         </h1>
 
         <div className="flex justify-center mt-6">
             <div className="bg-white border rounded-md focus-within:ring dark:bg-gray-900 dark:border-gray-700 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                 <div className="flex flex-wrap justify-between md:flex-row">
                     <input type="email" className="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                     <button className="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-md dark:hover:bg-gray-600 dark:bg-gray-800 lg:w-auto hover:bg-gray-700">subscribe</button>
                 </div>
             </div>
         </div>
 
         <hr className="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700"/>

     </div>
 </footer>
  )
}

export default FooterAlt