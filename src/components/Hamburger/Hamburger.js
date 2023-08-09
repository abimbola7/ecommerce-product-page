import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import "./Hamburger.css"

const c = console.log.bind(document);
const Hamburger = (props)=> {
    const dispatch = useDispatch();
    const hamburgerState = useSelector(state=>state.ui.hamburgerIsToggled);

    const hamburgerHandler = ()=> {
        dispatch(uiActions.hamburgerHandler())
    };

    c(hamburgerState)
    return (
        <button 
        className={`hamburger ${props.className}`}
        onClick={hamburgerHandler}
        >
            <div className={`hamburger-top ${hamburgerState && 'active'}`}></div>
            <div className={`hamburger-middle ${hamburgerState && 'active'}`}></div>
            <div className={`hamburger-bottom ${hamburgerState && 'active'}`}></div>
        </button>
    )
};

export default Hamburger;