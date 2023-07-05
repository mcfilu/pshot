import React from 'react'
import { augmentation_vid } from '../assets'

const ShockBenefits = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[70vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-1/2 h-[100%] flex items-center`}>
            <video src={augmentation_vid} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
        </div>
        <div className={`flex flex-col w-[60%] p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
            <h1 className={`text-gold1 text-[4vh] text-center font-poppins`}>O Concept Shockwave For Him Benefits</h1>
            <p className={`text-white font-poppins text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>O Concept Shockwave Therapy, by enhancing blood flow and facilitating tissue regeneration, can have a significant impact on men's sexual health. Potential benefits of the therapy include:</p>
            <ul className={`text-white text-[1.7vh] font-poppins `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Increased sexual performance with stronger erections due to enhanced blood flow.</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Boost in sexual desire and endurance, heightening the overall sexual experience.</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Possible improvement in penile length and girth, aided by the revitalizing effects of the shockwave therapy on penile tissue.</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Treatment of Peyronie's Disease, a condition that causes the penis to curve due to scar tissue, by fostering the growth of healthy tissue.</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>Potential relief from symptoms of Lichen Sclerosis, a condition characterized by white, itchy patches on the genitals and/or other body parts.</li>
{/* <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.2vh]`}></i>A non-invasive approach that can complement other treatments for conditions such as erectile dysfunction or premature ejaculation</li> */}
            </ul>
            
        </div>
    
    </div>
  )
}

export default ShockBenefits