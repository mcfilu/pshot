import React from 'react'
import { reduction, pshot1, shockwave2} from '../assets'

const ShockImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={shockwave2}></img>
        <div className={`absolute left-[5vw] top-1/3`}>
            <h1 className={`text-gold1  text-[8vh]`}>O Concept ShockWave</h1>
            <h1 className={`text-gold1  text-[6vh]`}>For Him</h1>
            <ul className={`text-white font-poppins text-[2.2vh] mt-[3vh]`}>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Non-invasive procedure utilizing advanced technology.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>HBoosts overall sexual health and wellness.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Helps optimize sexual performance by improving pelvic muscle strength and blood flow.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Enhances male confidence and satisfaction.</li>
                <li className={`flex items-center mt-[2vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Noticeable, sustainable improvements with regular sessions and zero recovery time.</li>
            </ul>
            
        </div>
        <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i>
    </div>
  )
}

export default ShockImage