import React from 'react'
import { useNavigate } from 'react-router-dom'

function Empty({title, url}) {
    const navigate = useNavigate()
  return (
    <div className='text-center flex flex-col items-center min-h-[60vh] py-16'>
        <img className='w-60' src={url} alt="" />
        <p>{title}</p>
        <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default Empty
