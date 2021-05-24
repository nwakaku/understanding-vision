import React,{useContext} from 'react'
import {SimContext} from '../../SimContext';


const Product = ({product}) => {
    const {onAdd} =useContext(SimContext)
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
            
        </div>
    )
}

export default Product
