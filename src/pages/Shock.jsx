import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BookNow from '../components/BookNow'
import ClinicReviews from '../components/ClinicReviews'

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
import YoutubeTestimonials from '../components/YoutubeTestimonials'


const Shock = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`relative z-0 ` }>

                <ShockImage/>

        </div>
        <div className="flex flex-col book2-gradient" >
        <div className={`flex flex-col justify-center mx-auto max-w-[80vw]`}>
              <div className={`flex  w-full h-[80vh] justify-center items-center mt-[20vh] `}>
                <ShockOpening/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <ShockDetails/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ShockBenefits/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center py-[10vh] `}>
                  <ShockCompare/>
              </div>
              <div className={`flex  w-full h-auto min-h-[90vh] justify-center items-center  py-[10vh]`}>
                  <ShockFaqs/>
              </div>
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ShockSummary/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center  justify-center `}>
                  <ShockVideo/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ShockTreated/>
              </div>
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ClinicReviews/>
              </div>
              
              <div className={`flex  w-full h-[90vh] items-center   `}>
                  <ShockServices/>
              </div>
              
              <div className={`flex  w-full h-[90vh] justify-center items-center  `}>
                  <BookNow/>
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