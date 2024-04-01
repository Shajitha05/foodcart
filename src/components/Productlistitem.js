import React from 'react'

export default function Productlistitem(props) {
  return (
      <div className="d-flex m-4 align-items-center justify-content-center">
            <img src={props.imgdata} height={230} width={260} alt={props.rname} className='border-radius-9 me-4'/>
            <h5 className='card-title me-4'>{props.rname}</h5>
            <h6 className='m-2 me-4'>Price: {`$${props.price}`}</h6>
            <h6 className='m-2 me-4'>Description:{props.address} </h6>
            <h6 className='m-2 me-4'>Rating:{props.rating} </h6>
            <button className="btn btn-danger ms-3"onClick={props.incrementItem}>+</button> 
            <span className='ms-3'>Quantity {props.count}</span>
            <button className='btn btn-danger ms-3'onClick={props.decrementItem}>-</button>
            <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
      </div >
  );
}
