import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
const CartBtn = React.forwardRef(
    (props, ref) => {
        const dispatch = useDispatch();
        const cartAdd = () => {
            ref.current.value++;
        };
        const cartSubstract = () => {
            if (ref.current.value <= 1) {
                return
            } else{
                ref.current.value--
            }
        };
        return (
            <div className="flex justify-between it=ems-center bg-lightGrayishBlue sm:w-[150px] py-2 px-3 rounded-lg text-xl">
                <button
                onClick={cartSubstract}
                className="text-orange hover:text-opacity-60"
                >
                    <FontAwesomeIcon
                    icon={faMinus}
                    className="outline-none focus:outline-none"
                    />
                </button>
                <input 
                ref={ref}
                type="number" 
                className="w-10 text-center text-black focus:outline-none bg-lightGrayishBlue" 
                defaultValue={1} 
                disabled/>
                <button
                onClick={cartAdd}
                className={`text-orange hover:text-opacity-60`}
                >
                    <FontAwesomeIcon
                    icon={faPlus}
                    className="outline-none focus:outline-none"
                    />
                </button>
            </div>
        )
    }
);

export default CartBtn;