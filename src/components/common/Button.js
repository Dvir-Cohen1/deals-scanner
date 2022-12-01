import React from 'react'

const Button = ({children, ...buttonProps}) => {
  return (
     <button
     {...buttonProps}
     className="px-5 py-2.5 text-white bg-blue-600 rounded-md duration-150 hover:bg-blue-700 active:shadow-lg"
 >
     {children}
 </button>
  )
}

export default Button