import React from 'react'

const Players = ({count1,count2}) => {
  return (
    <div className='d-flex  gap-3 fw-bold '>
        <div className='text-primary'>Player X: {count1}</div>
        <div className='text-warning'>Player O: {count2}</div>    
    </div>
  )
}

export default Players
