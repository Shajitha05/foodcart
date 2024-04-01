import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()
  return (
    <div className='p-3 bg-secondary'>
      <div classname='row'>
           <div classname='col-sm-12 col-md-7 co-lg-6 col-xl-s d-flex'>
            <button classname='me-4 btn btn-success' onClick={() =>  navigate('/')}>Home</button>
            <button classname='ms-3 btn btn-success' onClick={()=> navigate('/cart')}>cart</button>
           </div>
     </div>

    </div>
  )
}
