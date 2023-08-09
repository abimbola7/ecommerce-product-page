import React, { useState } from "react";

const Image = (props, ref) => {
    const { thumbnail, index } = props
    const testClick = () => {
        props.lightBox(props.img,thumbnail)
    };
    return (
        <div 
            className={`relative image ${ props.className }`}
            onClick={testClick}
        >
            <img src={thumbnail} alt="" 
            className="w-20 rounded-lg cursor-pointer"
            />
        </div>
    )
}

export default Image;