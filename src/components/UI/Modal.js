import React, { Fragment } from "react";
const Modal  = (props) => {
    const { hamburger, lightBox } = props;
    return (
        <Fragment>
            {hamburger || lightBox ? <div className="w-full h-screen fixed bg-blacks bg-opacity-80 z-[10]"/> : ""}
        </Fragment>
    )
}

export default Modal;