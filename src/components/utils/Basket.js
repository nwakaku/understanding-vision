import React,{useContext} from 'react'
import {SimContext} from '../../SimContext';


const Basket = () => {
    const {cartItems, 
           onAdd,
           onRemove,
           itemsPrice,
           taxPrice,
           shippingPrice,
           totalPrice} =useContext(SimContext)

    return (
        <div>
            <h2>this is your wish list</h2>
            <div>{cartItems.length === 0 && <div>this is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} >
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)}>+</button>
                        <button onClick={() => onRemove(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} * ${item.price.toFixed(2)}
                    </div>
                    </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                  <hr></hr>
                  <div className="row">
                      <div>Items Price</div>
                      <div className="">${itemsPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div>Tax Price</div>
                      <div className="">${taxPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div>shippingPrice</div>
                      <div className="">${shippingPrice.toFixed(2)}</div>
                  </div>
                  <div className="row">
                      <div><strong>Total</strong></div>
                      <div className="">${totalPrice.toFixed(2)}</div>
                  </div>
                </>
            )}
        </div>
    )
}

export default Basket
