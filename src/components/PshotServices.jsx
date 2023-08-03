import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { chair1, shockwave1, oshot1, chair3} from '../assets';



const PshotServices = () => {
    const [hov1, setHove1] = useState(false);
    const [hov2, setHove2] = useState(false);
    const [hov3, setHove3] = useState(false);
  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div  onMouseEnter={() => setHove1((prev) => !prev)} onMouseLeave={() => setHove1((prev) => !prev)} className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <NavLink to={`/o-concept-chair-in-london`}>
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover ${hov1 ? 'scale-125' : ''}`} src={chair3}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>O-Concept Chair</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>For Him</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O Concept Chair for Him is a state-of-the-art non-invasive treatment designed to enhance male sexual wellbeing and performance. It uses cutting-edge technology to stimulate pelvic muscles and improve blood flow. This revolutionary approach not only aids in optimizing sexual health, but also promotes an overall improvement in wellness.</p>
                
            </div>
            {/* <NavLink to={`/breast-augmentation`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </NavLink>
        </div>
        
    
        <div onMouseEnter={() => setHove2((prev) => !prev)} onMouseLeave={() => setHove2((prev) => !prev)} className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <NavLink to={`/shockwave-therapy-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
                <img className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 ${hov2 ? 'scale-125' : ''}`} src={shockwave1}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>O-Concept Shockwave</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>For Him</h1>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O-Concept Shockwave for him is an advanced procedure designed to address various concerns related to male sexual wellness. This non-invasive treatment utilizes shockwave technology to stimulate blood flow and tissue regeneration in the penile area.</p>
                
                
            </div>
            {/* <NavLink to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </NavLink>
        </div>
        
    
        <div onMouseEnter={() => setHove3((prev) => !prev)} onMouseLeave={() => setHove3((prev) => !prev)} className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <NavLink to={`/penis-enlargement-in-london`}>
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
                <img className={` flex w-full h-full  ease-in-out duration-500 object-cover ${hov3 ? 'scale-125' : ''}`} src={oshot1}></img>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Penis</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Enlargement</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Penis enlargement with fat, also known as penile augmentation or phalloplasty, is a cosmetic procedure that involves harvesting fat from other parts of the body, such as the abdomen, thighs, or buttocks, and transferring it into the penile area. This innovative treatment aims to increase the size and shape of the natural penis.</p>
                
            </div>
            {/* <NavLink to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            
        </NavLink>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default PshotServices