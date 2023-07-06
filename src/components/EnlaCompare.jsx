import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import {enla_after1, 
    enla_after10, 
    enla_after2, 
    enla_after3, 
    enla_after4, 
    enla_after5,
    enla_after6, 
    enla_after7,
    enla_after8, 
    enla_after9,
    enla_before1,
    enla_before10,
    enla_before2,
    enla_before3,
    enla_before4,
    enla_before5,
    enla_before6,
    enla_before7,
    enla_before8,
    enla_before9, } from '../assets';

const PshotCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [hov8, setHov8] = useState(false);
    const [hov9, setHov9] = useState(false);
    const [hov10, setHov10] = useState(false);
    
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);
    const [vis8, set8] = useState(false);
    const [vis9, set9] = useState(false);
    const [vis10, set10] = useState(false);
    const [buttonVis, setButton] = useState(true);
    
    const handleImages = () => {
        if (vis3 == false ){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
        }
        else if (vis5 == false){
            set5(true);
        }
        else if (vis6 == false){
            set6(true);
        }
        else if (vis7 == false){
            set7(true);
        }
        else if (vis8 == false){
            set8(true);
        }
        else if (vis9 == false){
            set9(true);
        }
        else if (vis10 == false){
            set10(true);
            setButton(false);
        }
         
    
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white font-main`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white font-main`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before1} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after1} srcSet={enla_after1} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before1}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after1}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before2} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after2} srcSet={enla_after2} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before2}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after2}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before3} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after3} srcSet={enla_after3} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before3}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after3}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before4} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after4} srcSet={enla_after4} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before4}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after4}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov5(true)} onMouseLeave={() => {setHov5(false)}} className={`${vis5 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov5 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before5} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after5} srcSet={enla_after5} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov5 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before5}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after5}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov6(true)} onMouseLeave={() => {setHov6(false)}} className={`${vis6 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov6 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before6} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after6} srcSet={enla_after6} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov6 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before6}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after6}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov7(true)} onMouseLeave={() => {setHov7(false)}} className={`${vis7 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov7 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before7} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after7} srcSet={enla_after7} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov7 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before7}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after7}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov8(true)} onMouseLeave={() => {setHov8(false)}} className={`${vis8 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov8 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before8} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after8} srcSet={enla_after8} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov8 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before8}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after8}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov9(true)} onMouseLeave={() => {setHov9(false)}} className={`${vis9 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov9 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before9} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after9} srcSet={enla_after9} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov9 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before9}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after9}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov10(true)} onMouseLeave={() => {setHov10(false)}} className={`${vis10 ? '' : 'hidden'} flex flex-row justify-between w-full h-[30vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov10 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={enla_before10} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={enla_after10} srcSet={enla_after10} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov10 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_before10}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[40%] object-cover`} src={enla_after10}></img>
                </div>
            </div>

            
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default PshotCompare