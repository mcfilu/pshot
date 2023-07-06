import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Oconcept2 from '../components/Oconcept2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'
import FooterBook from '../components/FooterBook'

import OConceptTestimonials from '../components/OConceptTestimonials'
import OconceptImage from '../components/OconceptImage'
import OconceptServices from '../components/OconceptServices'
import OconceptOpening from '../components/OconceptOpening'
import OconceptVideo from '../components/OconceptVideo'
import OconceptDetails from '../components/OconceptDetails'
import WakilSummary from '../components/WakilSummary'


const Oconcept = () => {
  return (
    <div className={`bg- w-full`}>
    {/* <div className={`hidden md:fixed fixed z-20 `}>
          <video src={vampire_Pshot_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
      </div> */}

      <div className={`fixed z-10 `}>
          <Navbar/>
      </div>
      <div className={`fixed w-full bottom-0 left-0 z-20 `}>
          <FooterBook/>
      </div>
      <div className={`relative z-0 ` }>

              <OconceptImage/>

      </div>
      <div className="flex flex-col bg-black" >
      <div className={`flex flex-col justify-center mx-auto w-full`}>
            <div className={`flex  w-full  justify-center mt-20`}>
              <OconceptOpening/>
            </div>
            <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                <WakilSummary/>
            </div>
            <div className={`flex  w-full  justify-center  mt-[7vh]`}>
              <OconceptDetails/>
            </div>
            <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                <OconceptVideo/>
            </div>
           
            {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                
            </div> */}
            <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
              <OconceptServices/>
            </div>
            <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
              <OConceptTestimonials/>
            </div>
            <div className={`flex  w-full  justify-center items-center mt-[7vh]`}>
                <BookNow/>
            </div>
            
            
            
           
            
            
            
            <div className={`flex flex-col  justify-center  my-[7vh]`}>
                  <div>
                      <Media/>
                  </div>
                  
                  <div className={`mt-[2vh]`}>
                      <Awards/>
                  </div>
              </div>
            

        </div>
      </div>
      <div className={`relative z-0 ` }>
        <Footer/>
      </div>
  </div>
  )
}

export default Oconcept