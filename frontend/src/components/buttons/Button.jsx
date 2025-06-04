import React from 'react'

const Button = ({ children }) => {
  return (
   <button
      className='inline-flex items-center border-0 bg-[#7a50ff] gap-2 rounded-2xl py-2 px-6 text-white-300 font-medium hover:bg-'
      >
        {children}
   </button>
  )
}

export default Button
