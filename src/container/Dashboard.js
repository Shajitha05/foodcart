import React from 'react'
import Productcard from '../components/Productcard'
import  {Productlist} from '../data/Productlist'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {Productlist.map((product) => <Productcard {...product} key={product.id} />)}
    </div>
  )
}
