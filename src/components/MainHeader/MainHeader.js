import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Hamburger from "../Hamburger/Hamburger";
import avatar from "../../images/image-avatar.png"
import cartss from  "../../images/icon-cart.svg"
import "./MainHeader.css"
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { cartActions } from "../../store/cart-slice";
import Cart from "./Cart";


const SideBar  = (props) => {
    const { hamburger } = props
    return (
        <Fragment>
            {
                <div className={`fixed h-screen w-52 bg-white top-0 z-[100] sidebar ${hamburger && 'active'} -left-52`}>
                <Hamburger
                className="relative top-7 left-5"
                />
                <ul className="grid grid-rows-5 mt-16">
                    {[
                        ['Collections'],['Men'],['Women'],['About'],['Contact']
                    ].map(([title, i])=>(
                        <li 
                        key={title}
                        className="px-4 py-3 font-semibold">{title}</li>
                    ))}
                </ul>
            </div>
            }
        </Fragment>
    )
}





const MainHeader = () => {
    const dispatch = useDispatch();
    const hamburger = useSelector(state=>state.ui.hamburgerIsToggled);
    const isCart = useSelector(state=>state.cart.cartIsClicked);
    const cart = useSelector(state=>state.cart.carts);
    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const [cartIsActive, setCartIsActive] = useState(false); 
    const navItems = ["Collection", "Men", "Women", "About", "Contact"];
    const [navActive, setNavActive] = useState(navItems[0])
    console.log(isCart)

    useEffect(() => {
      if (cart.length > 0) {
        setCartIsActive(true)
      } else{
        setCartIsActive(false)
      }
    }, [cart])


    

    const cartHandler = () => {
        dispatch(cartActions.cartHandler())
    };
    return (
        <Fragment>

            {
                ReactDOM.createPortal(
                    <SideBar
                    hamburger={hamburger}/>,
                    document.getElementById('sidebar')
                )
            }

            {
                ReactDOM.createPortal(
                    <Modal
                    hamburger={hamburger}
                    />,
                    document.getElementById('modal')
                )
            }

            <header
            className="container w-[94%] xxs:w-10/12 h-24 mx-auto border-b relative"
            >
                {
                    isCart && (
                        <Cart/>
                    )
                }
                <nav
                className="flex items-center justify-between h-full"
                >
                    <div className="flex items-center space-x-3 xxs:space-x-10 h-full">
                        <Hamburger
                        className="md:hidden"
                        />
                        <h1
                        className="text-3xl font-bold opacity-75 xxs:text-4xl text-blacks"
                        >sneakers</h1>
                        <ul className="flex-row hidden md:flex gap-x-6 h-full items-center">
                            {navItems.map((title)=>(
                                <li
                                key={title}
                                className={`text-base text-blacks cursor-pointer h-full flex items-center relative hover:text-opacity-100 ${navActive === title ? "before:bg-orange text-black text-opacity-100 before:absolute before:w-full before:h-1 before:bottom-0" : "text-opacity-75"}`}
                                onClick={()=>setNavActive(title)}
                                >{title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center px-2 space-x-5 relative">
                        <button
                        onClick={cartHandler}
                        className="relative"
                        >
                            {
                                cartIsActive && (
                                    <div className="absolute bg-orange w-6 h-5 -top-3 rounded-full -right-2 text-white text-sm">{ totalAmount }</div>
                                )
                            }
                            <img src={cartss} alt="" className="w-7" />
                        </button>
                        <div className="h-12 cursor-pointer rounded-full">
                            <div className="overflow-hidden rounded-full h-full w-12 hover:border hover:border-red-500">
                                <img src={avatar} alt="" className="w-12"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
};

export default MainHeader;