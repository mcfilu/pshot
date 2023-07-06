// import React from 'react'
// import { breastlift_treated1, breastlift_treated2, breastlift_treated3, incontinence, erectile_dysfanction, premature1 } from '../assets'

// const ShockTreated = () => {
//   return (
//     <div className={`flex flex-col items-center justify-center w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[72vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
//         <p className={`text-gold1 text-[4.5vh] text-center mb-[2vh]`}>Conditions Treated</p>

//         <div className={`flex flex-row justify-between w-full h-[90%]`}>
//             <div className={`flex flex-col w-[30%] h-full p-[2vh] pt-[1vh] bg-black bg-opacity-40 rounded-[9px]`}>

//                     <p className={`text-gold1 text-center text-[3.5vh] mb-[1vh]`}>Erectile Dysfanction</p>
//                     <div className={`w-full h-[50%] bg-white rounded-[9px]`}><img src={erectile_dysfanction} className={`w-full h-full rounded-[9px]`} ></img></div>
                    
                    
//                     <p className={`text-white text-[1.7vh] mt-[2vh]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies luctus aliquam. Fusce justo lorem, semper at ex vitae, rhoncus bibendum ex. Phasellus vel ligula ac turpis congue aliquet. Suspendisse porta tortor quam, vulputate vulputate magna pulvinar suscipit. Nunc ullamcorper cursus ipsum, nec ultricies nisi eleifend et. </p>

            
            
//             </div>
//             <div className={`flex flex-col w-[30%] h-full p-[2vh] pt-[1vh] bg-black bg-opacity-40 rounded-[9px]`}>

//                     <p className={`text-gold1 text-center text-[3.5vh] mb-[1vh]`}>Premature ejaculation</p>
//                     <div className={`w-full h-[50%] bg-white rounded-[9px]`}><img src={premature1} className={`w-full h-full rounded-[9px]`} ></img></div>
                    
                    
//                     <p className={`text-white text-[1.7vh] mt-[2vh]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies luctus aliquam. Fusce justo lorem, semper at ex vitae, rhoncus bibendum ex. Phasellus vel ligula ac turpis congue aliquet. Suspendisse porta tortor quam, vulputate vulputate magna pulvinar suscipit. Nunc ullamcorper cursus ipsum, nec ultricies nisi eleifend et. </p>

            
            
//             </div>
//             <div className={`flex flex-col w-[30%] h-full p-[2vh] pt-[1vh] bg-black bg-opacity-40 rounded-[9px]`}>

//                     <p className={`text-gold1 text-center text-[3.5vh] mb-[1vh]`}>Incontinence</p>
//                     <div className={`w-full h-[50%] bg-white rounded-[9px]`}><img src={incontinence} className={`w-full h-full rounded-[9px]`} ></img></div>
                    
                    
//                     <p className={`text-white text-[1.7vh] mt-[2vh]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies luctus aliquam. Fusce justo lorem, semper at ex vitae, rhoncus bibendum ex. Phasellus vel ligula ac turpis congue aliquet. Suspendisse porta tortor quam, vulputate vulputate magna pulvinar suscipit. Nunc ullamcorper cursus ipsum, nec ultricies nisi eleifend et. </p>

            
            
//             </div>
            
//         </div>
        
//     </div>
//   )
// }

// export default ShockTreated

import React from 'react'
import {erectile, incontinence, ejaculation, orgasm} from '../assets'

const ShockTreated = () => {
  return (

<div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

<p className={`text-[5vh] text-gold1 text-center md:mb-[5vh] font-header`}>Conditions Treated</p>

<div className={`flex flex-col md:flex-row w-full items-center md:items-start justify-center mt-[2vh]  `}>

    
    
    
    <div  className={`relative flex flex-col       mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh] w-[25vw] md:w-[10vw]`}>
                <img src={orgasm} className={`w-full h-full object-contain`}></img>
            </div>
            
            <h1 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Improve Orgasms</h1>
            {/* <h1 className={`text-gold1 text-[4vh] text-left font-main `}>Increase</h1> */}
            {/* <h1 className={` text-gold2 text-[5.5vh] text-left`}>Size</h1> */}
        </div>
        


    </div>

    <div  className={`relative flex flex-col      mt-[5vh] md:mt-[0px] hover:bg-opacity-80 ] hover:ease-in-out duration-500 mx-[10vw] items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw]`}>
                <img src={ejaculation} className={`w-full h-full object-contain`}></img>
            </div>
            
            <h1 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Premature Ejaculation</h1>
            {/* <h1 className={` text-white text-[5.5vh] text-left`}>Texture</h1> */}
        </div>
        


    </div>
    

    <div  className={`relative flex flex-col     mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
    
        <div className={`flex flex-col bg-black justify-center items-center`}>
            <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw]`}>
                <img src={incontinence} className={`w-full h-full object-contain`}></img>
            </div>
            
            <h1 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Bladder Control</h1>
            {/* <h1 className={` text-gold2 text-[5.5vh] text-left`}>Rippling</h1> */}
        </div>
        


    </div>
    

    

    
</div>


</div>
  )
}

export default ShockTreated