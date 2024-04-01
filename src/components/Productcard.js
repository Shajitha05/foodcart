import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Productcard(props) {
    const navigate = useNavigate();
  return (
    <div className="card m-2 cursor pointer" style={{width: 300}} role='button' onClick={() => navigate(`/Product/${props.id}`)}>
        <div className='mt-2'>
            <img src={props.imgdata} height={230} width={260} alt={props.rname} className='border-radius-9' />
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.rname}</h5>
            <h6 className='m-2'>Price: {`$${props.price}`}</h6>
            <h6 className='m-2'>Description:{props.address} </h6>
            <h6 className='m-2'>Rating:{props.rating} </h6>
            <div className='m-4'>
                {props.qnty > 0 ? <button className="btn btn-success">Available</button> : <button className='btn btn-outline-danger'>out of stock</button>}
            </div>
        </div>
    </div>
  );
}
