import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const ShockFaqs = () => {
    const [openFirst, setFirst] = useState(true);
    const [openSecond, setSecond] = useState(false);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={`ml-[4%] mr-[4%] w-[75%]`}>
            <div className={`bg-black bg-opacity-70 p-[2vh] rounded-[9px] hover:bg-opacity-80 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
                <h1 className={`text-gold1 font-poppins text-center text-[4vh] mb-[1vh]`}>Frequently Asked Questions</h1>
                <hr className={`mt-[1vh] mb-[1.2vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFirst(!openFirst)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFirst ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFirst ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>How does the O Concept Chair For Him work?</h1>
                    </div>
                    <div className={`flex flex-col ${openFirst ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        Short pulses of focused shockwaves are applied to the penis via a
wand-like device at low intensity, resulting in new blood vessels being formed. The
increase of blood vessels can help improve blood supply, resulting in the ability to get
and maintain an erection.
                        </p>
                        {/* <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        In all cases, excess skin, breast tissue, and fat are removed to reduce the size and weight of the breast. The area is sculpted and sutured closed to create a new, smaller shape, and your nipple is repositioned. The procedure will leave a scar around the darker nipple area or areola, alongside other scars from vertical incisions and incisions underneath the breast. This scarring will fade over time.
                        </p> */}
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        In theory, anyone suffering from erectile dysfunction
could be suitable for treatment, however current research suggests that it may work best
for those with vasculogenic erectile dysfunction. A consultation with our doctors will
determine your suitability.
                        </p>
                        {/* <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Pregnant and breast-feeding women are not suitable for surgical procedures.
                        </p>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins mt-[1.5vh]`}>
                        Breast reduction surgery may also lead to an inability to breast feed in future. If this is important to you, please discuss it with our surgeon who can endeavour to preserve vital tissue required for breast feeding.
                        </p> */}
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openThird ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The O Concept™ Extracorporeal Shockwave Therapy is painless for most
men.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        The therapy consists of several 20-minute sessions; the total
amount varies dependent on the patient, usually its 6 or 12 sessions depends on
individual medical condition.
                        </p>
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>Is there any downtime/recovery time?</h1>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} w-[35vw] my-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                        No downtime, with no risk of side effects.
                        </p>
                        
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
                <div className={`flex flex-col ml-[19%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-gold1' : 'text-white'} font-poppins text-[2.4vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex flex-col ${openSixth ? '' : 'hidden'} flex-col w-[35vw] my-[1vh] ml-[5%]`}>
                    <p className={`text-white text-[1.7vh] text-justify font-poppins`}>
                    Most patients will notice a change in performance
within the first two weeks, with the most significant changes around 1 month after the last
session. It is important to note that results cannot be guaranteed.
                        </p>
                        
                    </div>
                </div>
                <hr className={`mt-[1.4vh] mb-[1.4vh] w-[75%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default ShockFaqs