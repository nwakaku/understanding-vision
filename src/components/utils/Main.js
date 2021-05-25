import React,{useContext} from 'react';
import Product from './Product';
import {SimContext} from '../../SimContext';
import './Main.css'

const Main = (props) => {
    const {products} =useContext(SimContext)
    return (
        <div className='body'>
            <p class="note note-danger">
            <strong>Top Selling Article</strong>
            </p>
            <div className='stuffs'>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            
        </div>
    )
}

export default Main
