import React from 'react'
import {  o_concept1 } from '../assets'

const OconceptImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={o_concept1}></img>
        <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h1 className={`text-gold1 text-[8vh] font-header  mt-[3vh] text-left`}>O-Concept</h1>
                <h1 className={`text-gold1 text-[8vh] font-header mb-[1vh] text-left`}>For Him</h1>
                        <h1 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[1vh] text-left  w-full md:w-[75%]`}>At the heart of The O Concept™ is a comprehensive and holistic approach to addressing sexual dysfunction, prioritizing total well-being. With a deep understanding that each patient's condition is unique, The O Concept™ offers specifically tailored protocols to your needs.</h1>
                        <a href="#oconcept_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default OconceptImage