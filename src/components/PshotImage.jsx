import React from 'react'
import {  pshot1 } from '../assets'

const PshotImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={pshot1}></img>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h1 className={`text-gold1 text-[8vh] font-header  mt-[3vh] text-left`}>P-Shot </h1>
                <h1 className={`text-gold1 text-[8vh] font-header mb-[1vh] text-left`}>Penis PRP</h1>
                        <h1 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[1vh] text-left  w-full md:w-[75%]`}>Rediscover your sexual vigor and regain self-assurance with the P-Shot, a state-of-the-art procedure that taps into your body's natural regenerative potential. Enhance sexual performance, improve sensation, and increase penis size with the transformative power of the P-Shot.</h1>
                        <a href="#pshot_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default PshotImage