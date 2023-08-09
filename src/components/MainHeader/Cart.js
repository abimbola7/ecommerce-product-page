import React from "react"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart.carts)
    console.log(cart);

    return (
        <div className="absolute w-[28rem] h-56 overflow-y-auto shadow-2xl rounded-xl right-0 md:-right-12 top-20 bg-white z-[2] xxs:z-[1] max-w-[100%]">
            <div className="px-4 py-5 text-xl font-semibold border-b">
                Cart
            </div>
            <div className={`${cart.length === 0 ? 'text-center mt-20' : ''}`}>
                {
                    cart.length === 0 ? <p>Your Cart is Empty</p> : (
                        cart.map((elem, index)=>(
                            <CartItem
                            elem={elem}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Cart;