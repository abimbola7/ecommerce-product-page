import React, {Fragment, useState, useEffect, useRef} from "react";
import "../../Slider/LightBoxSlider/Slider.css"
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import uiSlice from "../../../store/ui-slice";
import { uiActions } from "../../../store/ui-slice";
import Modal from "../../UI/Modal";
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";


const LightBox = (props) => {
    const dispatch = useDispatch();
    const images = useSelector(state=>state.cart.cart.images);
    console.log(props.lightBox);
    const { isLightBox, url, thumbnailUrl } = props;
    // const [ thumbnailUrl, setThumbnailUrl ] = useState("");

    const lightBoxHandler = (img, thumbnails) => {
        props.setUrl(img);
        props.setThumbnailUrl(thumbnails);
        console.log(img);
        console.log(thumbnails);
    }
    
    const shiftRight = (index) => {
        console.log(index);
    }
    
    // absolute w-96 h-96 z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    return (
        <Fragment>
            {
                isLightBox && (
                    <div
                    className="top-[50%] left-1/2 absolute z-[1000] -translate-x-1/2 -translate-y-[50%] h-[34rem] w-[28rem] max-w-[95%]"
                    >
                        <div className="">
                            <div className="relative">
                                <button className="absolute right-0 text-3xl text-white -top-12 hover:text-orange"
                                onClick={()=>{
                                    dispatch(uiActions.lightBoxHandler())
                                    props.setThumbnailNull()
                                }}
                                >
                                    <FontAwesomeIcon
                                    icon={faTimes}
                                    />
                                </button>
                                <img src={props.lightBox.main} alt=""  className="w-full rounded-2xl"/>
                            </div>
                        </div>
                        <div className="absolute z-[100000] bottom-0 flex flex-row space-x-3 left-1/2 -translate-x-1/2 w-max  justify-center">
                        {   
                            images.map((img, index)=>
                                <Image
                                className={`${thumbnailUrl === img.thumbnail ? "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[100000] after:rounded-lg after:bg-[#dcdcdc8f] after:border-2 after:border-red-500 after:cursor-pointer" : ""}`}
                                index={index}
                                key={img.thumbnail}
                                img={img}
                                thumbnail={img.thumbnail}
                                indexHandler={shiftRight}
                                lightBox={lightBoxHandler}
                                />
                            )
                }
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}




const Sliders = (props)=> {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.cart.cart)
    const lightBox = useSelector(state=>state.ui.lightBoxIsToggled);
    const mainImg = useSelector(state=>state.cart.cart.mainImg);
    const images = useSelector(state=>state.cart.cart.images);
    console.log(images[0].thumbnail)
    console.log(mainImg);
    const [url, setUrl] = useState();
    const [ thumbnailUrl, setThumbnailUrl ] = useState("");
    console.log(images);
    const lightBoxHandler = (img, thumb) => {
        setUrl(img);
        dispatch(uiActions.lightBoxHandler()) 
        setThumbnailUrl(thumb)
        console.log(thumb)
    }

    const thumbnailNull = () => {
        setThumbnailUrl(null)
    };



    return (
        <Fragment>
            <div 
            className="cursor-pointer"
            onClick={()=>lightBoxHandler(images[0], images[0].thumbnail)}
            >
                <img src={products.mainImg} alt="" className="object-cover object-center h-[450px] max-w-full rounded-xl"/>
            </div>
            <div className={props.className + " flex flex-row gap-x-5 overflow-hidden my-4 justify-center"}>
                {   
                    images.map((img)=>
                        <Image
                        className={`${thumbnailUrl === img.thumbnail ? "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:rounded-lg after:bg-[#dcdcdc8f] after:border-2 after:border-red-500" : ""}`}
                        key={img.thumbnail}
                        img={img}
                        thumbnail={img.thumbnail}
                        lightBox={lightBoxHandler}
                        />
                    )
                }

                {
                    ReactDOM.createPortal(
                        <LightBox
                        url={url}
                        setUrl={setUrl}
                        lightBox={url}
                        isLightBox={lightBox}
                        thumbnailUrl={thumbnailUrl}
                        setThumbnailUrl={setThumbnailUrl}
                        setThumbnailNull={thumbnailNull}
                        />,
                        document.getElementById("lightbox")
                    )
                }
                
                {
                    ReactDOM.createPortal(
                        <Modal
                        lightBox={lightBox}
                        />,
                        document.getElementById("modal")
                    )
                }
                
            </div>
        </Fragment>
    )
};

export default Sliders;