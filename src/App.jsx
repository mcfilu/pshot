import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HelmetProvider } from 'react-helmet-async'

import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import VampireBreastLift from './pages/VampireBreastLift'
// import VampireFaceLift from './pages/VampireFaceLift'
import OtherTreatments from './pages/OtherTreatments'
// import Augmentation from './pages/Augmentation'
// import Fat from './pages/Fat'
// import Reduction from './pages/Reduction'
import Contact from './pages/Contact'
import DrWakil from './pages/DrWakil'
import Pshot from './pages/Pshot'
import Chair from './pages/Chair'
import Shock from './pages/Shock'
import Book from './pages/Book'
import Enla from './pages/Enla'
import Oconcept from './pages/Oconcept'



const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  


  return (
    <>
    <HelmetProvider>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/vampire-breastlift" element={<VampireBreastLift />} />
        <Route path="/vampire-facelift" element={<VampireFaceLift />} /> */}
        <Route path="/other-treatments" element={<OtherTreatments />}></Route>
         
        {/* <Route path="/breast-augmentation" element={<Augmentation />} />
        <Route path="/breast-fat-enlargement" element={<Fat />} />
        <Route path="/breast-reduction" element={<Reduction />} /> */}
        <Route path="/" element={<Pshot />} />
        <Route path="/o-concept-chair-in-london" element={<Chair />} />
        <Route path="/shockwave-therapy-in-london" element={<Shock />} />
        <Route path="/dr-wakil" element={<DrWakil />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/book-now" element={<Book/>}/>
        <Route path="/penis-enlargement-in-london" element={<Enla/>}/>
        <Route path="/o-concept-treatment-in-london" element={<Oconcept/>}/>
      </Routes>
      </HelmetProvider>
    </>
    
  );
};

export default App
