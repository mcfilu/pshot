import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import Awards from '../components/Awards'
import Media from '../components/Media'

import ShockBenefits from '../components/ShockBenefits'
import ShockCompare from '../components/ShockCompare'
import ShockDetails from '../components/ShockDetails'
import ShockFaqs from '../components/ShockFaqs'
import ShockImage from '../components/ShockImage'
import ShockOpening from '../components/ShockOpening'
import ShockServices from '../components/ShockServices'
import ShockSummary from '../components/ShockSummary'
import ShockTreated from '../components/ShockTreated'
import ShockVideo from '../components/ShockVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
import { Helmet } from 'react-helmet-async'

const Shock = () => {
  return (
    <div className={`bg- w-full`}>
      <Helmet>
            <title>Revolutionary Shockwave Therapy in London | P-Shot</title>
            <meta name='description' content="Experience the best Shockwave Therapy in London with Dr. Sherif Wakil. Get effective pain relief and improved mobility. Call +44 (0)20 3006 8459." />
        </Helmet>
      {/* <div className={`hidden md:fixed fixed z-20 `}>
            <video src={vampire_Shock_new_intro} className={`${videoEnded ? 'hidden' : ''} w-screen`} onEnded={handleVideoEnd} onClick={handleVideoEnd} id="vid_player" autoPlay muted></video>
        </div> */}

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <ShockImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="shock_opening" className={`flex  w-full  justify-center mt-20`}>
                <ShockOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ShockDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ShockBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ShockTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ShockVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <ShockSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <ShockCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <ShockFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <ShockFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <ShockCompare/>
                </div>
              </div>
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <OconceptInfo/>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ShockServices/>
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

export default Shock