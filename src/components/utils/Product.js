import React,{useContext} from 'react'
import {SimContext} from '../../SimContext';


const Product = ({product}) => {
    const {onAdd} =useContext(SimContext)
    return (
        <div className='gurt'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
            <button onClick={() => onAdd(product)}
                    type="button" 
                    className="btn btn-dark">
                        Add to cart {' '}
                        <i class="fas fa-shopping-cart"></i></button>
            </div>
            
        </div>
    )
}

export default Product
