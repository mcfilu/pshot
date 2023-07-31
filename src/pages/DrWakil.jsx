import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import ContactMap from '../components/ContactMap'
// import Contact2 from '../components/Contact2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'

import WakilDetails from '../components/WakilDetails'
import WakilOpening from '../components/WakilOpening'
import WakilSummary from '../components/WakilSummary'
import WakilClinic from '../components/WakilClinic'
import WakilImage from '../components/WakilImage'
// import Alberto from '../components/Alberto'
// import Davood from '../components/Davood'




import ClinicReviews from '../components/ClinicReviews'
import YoutubeTestimonials from '../components/YoutubeTestimonials'

import TrustPilotSlider from '../components/TrustPilotSlider'


import PshotBenefits from '../components/PshotBenefits'
import PshotCompare from '../components/PshotCompare'
import PshotDetails from '../components/PshotDetails'
import PshotFaqs from '../components/PshotFaqs'
import PshotImage from '../components/PshotImage'
import PshotOpening from '../components/PshotOpening'
import PshotServices from '../components/PshotServices'
import PshotSummary from '../components/PshotSummary'
import PshotTreated from '../components/PshotTreated'
import PshotVideo from '../components/PshotVideo'
import FooterBook from '../components/FooterBook'
import OconceptInfo from '../components/OconceptInfo'
import { pshot_vid } from '../assets'
import { useState } from 'react'

const DrWakil = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>
            <WakilImage></WakilImage>
        </div>
        <div className="flex flex-col bg-black " >
            <div className={`flex flex-col justify-center`}>
            <div id="wakil_opening" className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilOpening/>
              </div>
              
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilDetails/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilSummary/>
              </div>
              
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <WakilClinic/>
              </div>
              
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div>
              <div className={`flex flex-col  justify-center my-[8vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
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

export default DrWakil