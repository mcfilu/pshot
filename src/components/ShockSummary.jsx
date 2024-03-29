import React, {useState} from "react";
import { icon1, icon2, icon3 } from "../assets";
// import { PopupButton } from "react-calendly";
import { NavLink } from "react-router-dom";

function ShockSummary() {
    const [hov, setHove] = useState(false);
  return (
    
    
        <div onMouseEnter={() => setHove(true)} onMouseLeave={() => {setHove(false)}} className={`relative md:ml-[13vw] bg-black bg-opacity-100 p-[3vh] md:my-[5vh] flex flex-col md:w-[60%] h-auto min-h-[68vh]  md:pr-[14vh] bg-opacity-100 md:shadow-[0px_0px_20px_1px_#ad9444] ease-in-out duration-500`}>
            <div className={` w-[100%] mx-auto h-[100%]`}>
                <h1 className={`text-gold1 text-[5vh] font-header text-center`}>Treatment Summary at a glance</h1>
                <div className={`flex flex-col md:flex-row justify-between px-[3vh] my-[5vh]`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon1} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Procedure Time</p>
                        {/* <span className="text-[2vh] font-light">Approx 40mins</span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh] font-main">Aproximately 20 minutes</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon2} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Recommended No. of Treatments</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh] font-main">6 or 12 weekly sessions</h4>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon3} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Anaesthetic</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <h4 className="text-[2.5vh] font-medium mt-[1vh] font-main">None</h4>
                        
                    </div>
                </div>
                <div>
                    <hr className={`mt-[1.5vh] mb-[1.5vh]`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium text-gold1 w-[30%] font-main">Side Effects:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">None reported.</p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Most patients will notice a change in performance within the first two weeks,
with the most significant changes around 1 month after the last session.
                        </p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Duration of results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Approximately 1 year, although results do vary.
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Back to work:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Return to normal immediately
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Full Recovery:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Immediately
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                </div>
                
            </div>
            <div onMouseEnter={() => setHove(true)}  className={`md:absolute bg-gold1 bg-opacity-100  ease-in-out duration-500 ${hov ? 'bg-opacity-100' : 'bg-opacity-100'} top-[22%] -right-[17.5vw] md:w-[24vw]   p-[2vh] mt-[5vh] md:mt-[0px] bg-opacity-100 shadow-[0px_0px_20px_2px_#ad9444] ease-in-out duration-500`}>
                    <h1 className={` text-black text-[4vh] mt-[2vh] font-header font-medium`}>Treatment Cost</h1>
                    <p className={`font-main text-black text-[2vh] mt-[2vh]`}>Price from:</p>
                    <h1 className={`font-main text-black font-bold text-[5.5vh] `}>£ 500</h1>
                    <p className={`text-[1.6vh] text-black font-main`}>* After consultation the doctor will confirm the cost.</p>
                    <NavLink to={`/book-now`}><button className={`bg-black text-gold1 text-[4vh] md:text-[2.5vh] mt-[4vh] p-[1vh] font-main`}>Book Now</button></NavLink>
                </div>

        </div>
    
    
        
    )
}
export default ShockSummary