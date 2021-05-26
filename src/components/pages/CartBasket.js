import React from 'react'
import Basket from '../utils/Basket'
import Main from "../utils/Main"
import { NavBar} from "../utils/NavBar"
import { NavBar2 } from "../utils/NavBar2"


const CartBasket = ({ cartItems, onAdd}) => {
    return (
        <div>
            <NavBar />
            <Basket />
        </div>
    )
}

export default CartBasket