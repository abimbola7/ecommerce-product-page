import React from "react"
import { useSwiper } from "swiper/react";


const SwiperSwipeBtn = (props) => {
    const swiper = useSwiper();
    const classes = props.className
    const caretClass = "absolute -top-56 z-[100000] rounded-full w-10 h-10 bg-white"

    return (
        <div className={`relative z-[10000000] ${classes}`}>
            <button
            className={"left-3 " + caretClass}
            onClick={
                ()=>{
                    swiper.slidePrev()
                }
            }
            >
                <i className="fa fa-angle-left"/>
            </button>
            <button
            className={"right-3 " + caretClass}
            onClick={
                ()=>{
                    swiper.slideNext()
                }
            }
            >
                <i className="fa fa-angle-right"/>
            </button>
        </div>
    )
};


export default SwiperSwipeBtn;