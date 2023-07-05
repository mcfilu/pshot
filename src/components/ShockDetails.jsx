import React from 'react'
import { PopupButton } from "react-calendly";
import { BloodCells, sherif } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ShockDetails = () => {
  return (
    <div className={`flex w-11/12 flex-row bg-black bg-opacity-50 ml-[4%] mr-[4%] h-[60vh] rounded-[9px] p-[2vh] hover:bg-opacity-60 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
         <div className={`w-2/5 h-[100%] flex items-center`}>
            <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>
        <div className={`w-[60%] h-[100%] bg-black bg-opacity-60 rounded-[9px] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%]  bg-opacity-40 rounded-[9px] items-center justify-center my-auto`}>

                <p className={`flex text-gold1 text-[4.5vh] text-center text-gold1`}>Treatment Technique</p>
                <p className={`flex text-white text-[1.9vh] mt-[5vh]`}>Everyone deserves to feel confident and enjoy sex, which is why I
created the O Concept™ protocol. Using revolutionary techniques and technologies, I tailor
treatments to your individual concern. One treatment which could help your erectile
dysfunction is the O Concept™ Extracorporeal Shockwave Therapy.</p>
                <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>This delivers low intensity extracorporeal shockwaves to the shaft and the crura of the penis
to help create new blood vessels and, as a result, more blood supply, to generate a much
better erection. Research has indicated it is effective in up to 84% of men, with one study
finding 50% of men treated were able to perform sexually in the first month following
treatment, without medication.</p>
{/* <p className={`flex text-white text-[1.9vh] mt-[2.5vh]`}>Have you tried pelvic floor exercises before? Your pelvic muscles
play an important role in ejaculation, erectile strength, orgasmic pleasure and bladder
control. Unfortunately, these muscles weaken as you age, so exercising them is a must. And
to make it as simple as possible for you, I have developed the O Concept™ Chair.</p> */}
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Erectile dysfunction is a common problem experienced, to some degree, by
almost half of the UK’s male population who are aged between 40 and 70. In other
words, several million UK men suffer with erectile dysfunction, with causes including
not only tiredness, stress and anxiety but also:</p> */}
                {/* <ul className={`text-white text-[1.7vh] font-poppins my-[1.5vh] mb-6`}>
                            <li className={`flex items-center`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Vasculogenic conditions affecting the flow of blood to the penis, like cardiovascular
disease, high blood pressure, diabetes and raised cholesterol.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Neurogenic conditions affecting the nervous system, like multiple sclerosis, stroke,
Parkinson’s disease, spinal injuries/disorders and diabetes.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Grooves in the skin on the shoulders where bras staps dig in due to the heaviness of the breast.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Anatomical conditions affecting the penis’ structure, like Peyronie’s disease</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Penis injuries.</li>
                            <li className={`flex items-center mt-[1vh]`}><i class="" className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Poor posture which exacerbates back pain and can cause curvatures to the spine.</li>
                            
                        </ul> */}
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>The treatment involves taking a small sample of blood and placing it in a centrifuge to extract the Platelet Rich Plasma (PRP) which is then injected back into the face or body, in this case the breast area.</p> */}
                {/* <p className={`flex text-white text-[1.9vh] mt-[1.5vh]`}>Now a very popular and extremely effective method of treating erectile dysfunction
symptoms, the penis rejuvenating P-Shot can improve the overall health of your
genital area.</p> */}

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
       
       
        
    
    </div>
  )
}

export default ShockDetails