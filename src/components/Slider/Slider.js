import React, { Fragment } from "react";
import "./Slider.css"
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSwipeBtn from "./SwiperNavBtn";
import Sliders from "./LightBoxSlider/Slider";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper.min.css';


import { Navigation } from "swiper";

const Slider = (props) => {
    const products = useSelector(state=>state.cart.cart);
    console.log(products.images)
    return (
      <Fragment>
        <div
        className="xxs:hidden"
        >
          <Swiper navigation={false} modules={[Navigation]}>
            {
                    products.images.map((img)=>(
                        <SwiperSlide
                        key={img.main}
                        >
                        <img src={img.main} alt="" />   
                        </SwiperSlide>
                    ))
            }
            <SwiperSwipeBtn
            className=""
            />
          </Swiper>
        </div>
        
        <div className="xxs:flex xxs:flex-col xxs:items-center hidden">
          {/* <img src={products.mainImg} alt="" className="object-cover object-center h-[450px] max-w-full rounded-xl"/> */}
          <Sliders
          className="w-full"
          />
        </div>
      </Fragment>
  );
}

export default Slider;