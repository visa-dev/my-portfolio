"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';


const SliderButton = ({containerStyles,btnStyles,iconStyles}) => {
    const swipper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={()=>swipper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles}/>
            </button>

            <button className={btnStyles} onClick={()=>swipper.slideNext()}>
                <PiCaretRightBold className={iconStyles}/>
            </button>
        </div>
    )
}

export default SliderButton