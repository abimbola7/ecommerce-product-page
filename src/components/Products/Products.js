import React, { Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartBtn from "./CartBtn";
import Slider from "../Slider/Slider";
import cartImg from "../../images/icon-cart.svg"  
import { cartActions } from "../../store/cart-slice";

const c = console.log.bind(document);

const Products  = (props) => {
    const dispatch = useDispatch();
    const amtRef = useRef();
    const products = useSelector(state=>state.cart.cart);
    const carts = useSelector(state=>state.cart.carts);
    c(products);
    const cartHandler = () => {
        console.log(amtRef.current.value);
        const cart = {
            id : products.id,
            name : products.name,
            desc : products.description,
            price : products.price,
            amount : +amtRef.current.value,
            img : products.images[0].thumbnail,
        }
        dispatch(cartActions.addToCart(cart));
    }
    c(carts);
    return (
        <Fragment>
            <div className="flex flex-col justify-center mx-auto xxs:mt-8 sm:mt-16 sm:flex-row sm:w-11/12 xxs:gap-x-8">
                <Slider/>
                <div className="xxs:w-[85%] xxs:mx-auto sm:w-[44%] float-right px-4 my-4 mt-10 space-y-3 border-none sm:space-y-8 md:pr-16">
                    <h1
                    className="text-sm font-bold tracking-widest text-orange">SNEAKER COMPANY</h1>
                    <div className="space-y-4 xxs:space-y-7">
                        <h1 className="text-4xl font-bold opacity-90 text-blacks">{ products.name }</h1>
                        <p className="font-medium opacity-75 text-blacks">{ products.description }</p>
                        <div className="flex items-center justify-between font-semibold">
                            <div className="space-x-4">
                                <span className="text-xl">${products.price}</span>
                                <span className="px-2 py-1 rounded-md bg-paleOrange text-orange">{products.discount.percentage * 100}%</span>
                            </div>
                            <p className="line-through text-darkGrayishBlue">${products.discount.percentage * products.price}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center">
                        <CartBtn
                        ref={amtRef}
                        />
                        <button
                        className="flex items-center justify-center w-full py-4 space-x-4 font-bold text-white rounded-md bg-orange focus:outline-none hover:bg-opacity-60"
                        onClick={cartHandler}
                        >
                            {/* <img src={cartImg} alt=""  className="w-4 text-white"/> */}
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                            <p
                            className="text-sm"
                            >Add to Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Products;