import React from 'react'

export const Error = () => {
  const errorMessage = 'There is an error with this route. Please try again with another route or refresh the page.'
  return (
    <div className='w-full h-full flex justify-center text-center p-48'>{errorMessage}</div>
  )
}
