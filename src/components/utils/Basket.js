import React,{useContext} from 'react'
import {SimContext} from '../../SimContext';
import { Link, useHistory } from "react-router-dom"

import './Basket.css'


const Basket = () => {
    const {cartItems, 
           onAdd,
           onRemove,
           itemsPrice,
           taxPrice,
           shippingPrice,
           totalPrice} =useContext(SimContext)

    return (
        <div className='basket'>
            <h2>Shopping Cart</h2>
            <div>{cartItems.length === 0 && <div>this is empty</div>}</div>
            {cartItems.map((item) => (
                <div 
                    className='individual' key={item.id} >
                    <img src={item.image} alt={item.name} />
                    <div>{item.name}
                    <p>this is wonderfully make to match your tastes</p></div>
                    <div className="button">
                        <div className='sum'>
                            <a>Item Total: {item.qty} * ${item.price.toFixed(2)}</a>
                    </div>
                    <div>
                    <button onClick={() => onAdd(item)}
                    type="button" class="btn btn-success btn-rounded">
                    + 1
                    </button>
                    <button onClick={() => onRemove(item)}
                    type="button" class="btn btn-danger btn-rounded">
                    - 1
                    </button>

                    </div>
                    
                    </div>
                    
                    </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                  <hr></hr>
                  <div className='payment'>
                    <div className="total">
                        <div>Items Price:</div>
                        <div className="">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="total">
                        <div>Tax Price:</div>
                        <div className="">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="total">
                        <div>shippingPrice:</div>
                        <div className="">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="total">
                        <div><strong>Total:</strong></div>
                        <div className="">${totalPrice.toFixed(2)}</div>
                    </div>
                    <div>
                    <Link to='/signup'><button type="button" class="btn btn-success">Proceed to Payment</button></Link>
                    </div>
                  </div>
                  
                </>
            )}
        </div>
    )
}

export default Basket
