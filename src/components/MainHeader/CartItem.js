import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { RiDeleteBin6Fill } from 'react-icons/ri'

const CartItem = (props)=> {
    const dispatch = useDispatch()
    const { elem } =  props;

    const deleteItem = (index)=> {
        dispatch(cartActions.deleteFromCart(elem.id))
    }
    
    return (
        <div className="h-20 px-3 py-3 cart">
            <div className="">
                <img src={elem.img} alt="" className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col justify-center px-2 space-y-1 font-semibold opacity-75 text-blacks">
                <p
                className="text-lg"
                >{elem.name}</p>
                <div className="flex items-end space-x-1">
                    <span>${elem.price}</span>
                    <span>x</span>
                    <span>{elem.amount}</span>
                    <span className="font-bold">
                        ${elem.price * elem.amount}
                    </span>
                </div>
            </div>
            <button 
            className="flex items-center focus:outline-none"
            onClick={deleteItem}
            >
            <RiDeleteBin6Fill
            className="text-lg text-darkGrayishBlue"
            /> 
            </button>
        </div>
    )
};

export default CartItem;