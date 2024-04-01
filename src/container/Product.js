import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Productlist } from '../data/Productlist';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {
    const params = useParams();
    const navigate =useNavigate();
    const dispatch =useDispatch();
    const props = Productlist.find(
        (element) => element.id=== parseInt(params.id)
    );
    const [alert,setAlert] = useState(false);

    const list = useSelector((state) => state.cart.list);

    const element = list.find((item) => item.id===props.id);

    const addtocart = ()=>{
      setAlert(true);
      setTimeout(()=> setAlert(false),3000)
      dispatch(addItem(props));
    };
  return (
    <div className="card m-2">
      {alert && <span classname="alert alert-success">Item added to cart</span>}
     <div className='mt-2'>
        <img src={props.imgdata} height={350} width={400} alt={props.rname} className='border-radius-9' />
     </div>
     <div className='m-3 card-body'>
        <h5 className='card-title'>{props.rname}</h5>
        <h6 className='m-2'>Price: {`$${props.price}`}</h6>
        <h6 className='m-2'>Description:{props.address} </h6>
        <h6 className='m-2'>Rating:{props.rating} </h6>
        <div className='m-4'>
         {props.qnty > 0 ? (
          < >
           <button 
             className="btn btn-success"
             onClick={() => navigate(`/checkout/${props.id}`)}
             >
              Buy Now
            </button>
           { element?.count  > 0 ? <button className=" ms-3 btn btn-outline-warning" onClick={()=> navigate('/cart')}>Go to Cart</button> :
             <button className=" ms-3 btn btn-success" onClick={addtocart}>Add to Cart</button>
           }
          </>
         ) : (
           <button className='btn btn-outline-danger'>out of stock</button>
         )}
        </div>
    </div>
</div>
  )

}
