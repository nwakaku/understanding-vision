import React,{useContext} from 'react';
import Product from './Product';
import {SimContext} from '../../SimContext';

const Main = (props) => {
    const {products} =useContext(SimContext)
    return (
        <main>
            <h1>Main articles</h1>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            
        </main>
    )
}

export default Main
