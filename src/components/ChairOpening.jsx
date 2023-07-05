import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ChairOpening = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[60vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
        <div className={`w-[65%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between mr-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-gold1 text-[2.7vh] text-center text-gold1`}>Do you and your partner feel like you miss out on good
sex as a result of premature ejaculation (PE)? It’s nothing to be embarrassed about –
around one in three men between the ages of 18 and 59 experience it as some point. You
may be a long-term sufferer, with life-long PE or it may have only recently started
happening, known as acquired PE. Either way, there are treatments that could help. One I
recommend trying is the O Concept™ Chair.</p>
                {/* <p className={`flex text-gold1 text-[2.7vh] text-center text-gold1 mt-[3vh]`}>The P-Shot® procedure works by using the body’s natural ability to heal and
rejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the
penis to stimulate a regenerative process.</p> */}
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[1.3vw]`}></i>
                <p className={`flex text-gold text-[3vh] text-center text-gold1 mt-[6vh]`}>Dr. Sherif Wakil</p>
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`w-2/5 h-[100%] flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <img className={`w-full h-full object-cover rounded-[9px]`} src={sherif}></img>
        </div>
       
        
    
    </div>
  )
}

export default ChairOpening