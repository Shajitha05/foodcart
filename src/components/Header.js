import React from 'react'

export default function Header() {
  return (
    <div className='p-3 bg-secondary'>
      <h3> SAMPLE </h3>
      <div classname='row justify-content-center pt-2 pb-1'>
           <div classname='col-sm-12 col-md-7 co-lg-6 col-xl-s d-flex'>
            
            <input
            className='form-control'
            type='search'
            placeholder='search...'
            />
          
           </div>
      </div>

    </div>
  )
}
