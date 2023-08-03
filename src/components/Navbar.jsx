// import React from 'react'
// import { useState } from 'react'
// import { navLinks } from '../constants'
// import { logo_no_border, close, menu, pshot_goldlogo, pshot_whitelogo} from '../assets'
// import { NavLink } from 'react-router-dom'




// const Navbar = () => {
//     const active_path = window.location.pathname;
//     const w_height = window.screen.height;
//     const to_start = () => {
//       if (active_path === '/contact-us') {
//         return true;
//       }
//       else {
//         return false
//       }
//     }
//     const[color, setColor] = React.useState(to_start)

    
//     const changeColor = () => {
//       if (active_path === '/contact-us') {
        
//       }
//       else {
//         if(window.scrollY >= w_height*0.3){
//             setColor(true)
//         }else{
//             setColor(false)
//         }
//       }
//     }
//     window.addEventListener('scroll', changeColor)
//     const [toggle, setToggle] = useState(false);

//   return (
//     <nav className = {`w-full flex py-[2.4vh] justify-between items-center fixed pl-[3vh] pr-[3vh] ${color ? 'bg-black bg-opacity-95 h-[11.3vh]' : ''} ease-in-out duration-500`}>
//         <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} h-[10vh] ease-in-out duration-500`}></img></NavLink>

//             <ul className="list-none md:flex hidden items-center justify-center flex-1">
//             {navLinks.map((nav,index) => (
//                 <li
//                 key = {nav.id}
//                 className={`hover-underline-animation flex font-main font-normal cursor-pointer ${color ? 'text-[1.3vw]' : 'text-[1.4vw]'} ease-in-out duration-500 mx-[1.7vh] py-[1.7vh]  ${active_path=== nav.link ? 'text-gold1' : 'text-white'} hover:text-gold1 `}   
//                 >
//                 {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
//                 <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
//                 </li>
//             ))}
//             </ul>

//             {/* <img src={tel_logo}></img> */}
//             <div className={`flex ${color ? 'w-[29.3vh]' : 'w-[30.8vh]'} md:flex hidden items-center justify-end ease-in-out duration-500`}>
//             <NavLink to={`/`}><img src={pshot_goldlogo} alt="yours lawfully logo" className={`${color ? 'w-[18.3vh]' : 'w-[23.3vh]'} ${color ? 'h-[8.5vh]' : 'h-[10vh]'} ease-in-out duration-500`}></img></NavLink>
//             </div>


//             <div  className="md:hidden flex flex-1 justify-end items-center">
//             <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
//               <div className={`${toggle ? 'flex' : 'hidden'} flex-col p-6 bg-black absolute top-0 left-0 h-[100vh] w-[100vw]`}>
//                 <div className={`flex flex-row justify-between items-center`}>
//                   <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} ease-in-out duration-500`}></img></NavLink>
//                   <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
//                 </div>
//                 <div className={`flex flex-col justify-center flex-1`}>

                
//                   <ul className="list-none flex flex-col justify-center items-center ">
//                     {navLinks.map((nav,index) => (
//                       <li
//                         key = {nav.id}
//                         className={`font-main font-normal cursor-pointer text-[3vh] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}   
//                       >


//                         <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                   <button className={`text-gold1 ${color ? 'text-[3vh]' : 'text-[3vh]'} font-main  p-[1vh] hover:bg-white hover:text-gold1 ease-in-out duration-500 mt-[10vh]`}>+44 (0)20 3006 8459</button>
//                 </div>
//               </div>
//             </div>
            

//     </nav>
//   )
// }

// export default Navbar

import React from 'react'
import { useState } from 'react'
import { navLinks, otherLinks } from '../constants'
import { logo_no_border, close, menu, pshot_goldlogo} from '../assets'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
    const [others, setOthers] = useState(false);
    const active_path = window.location.pathname;
    const w_height = window.screen.height;
    const to_start = () => {
      if (active_path === '/contact') {
        return true;
      }
      else {
        return false
      }
    }
    const[color, setColor] = React.useState(to_start)

    
    const changeColor = () => {
      if (active_path === '/contact') {

      }
      else {
        if(window.scrollY >= w_height*0.3){
            setColor(true)
        }else{
            setColor(false)
        }
      }
    }
    window.addEventListener('scroll', changeColor)
    const [toggle, setToggle] = useState(false);

  return (
    <nav className = {`w-full flex flex-col py-[2.4vh] justify-between items-center fixed pl-[3vh] pr-[3vh] ${color ? 'bg-black bg-opacity-95' : ''} ease-in-out duration-500`}>
        <div className={`hidden md:flex w-full flex flex-row`}>
        <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} ease-in-out duration-500`}></img></NavLink>

            <ul className="list-none md:flex hidden items-center justify-center flex-1 ">
            {navLinks.map((nav,index) => (
                <li
                key = {nav.id}
                onMouseOver={() => nav.id === "other-tratments" ? setOthers(true) : null}
                onMouseOut={() => nav.id === "other-tratments" ? setOthers(false) : null}
                className={`hover-underline-animation flex font-main h-[100%] font-normal cursor-pointer  ${color ? 'text-[1.3vw]' : 'text-[1.4vw]'} ease-in-out duration-500 mx-[1.7vh] pt-[2.4vh] text-white ${active_path=== nav.link ? 'text-gold1' : ''} hover:text-gold1 `}   
                >
                {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
                <NavLink className={`flex items-center justify-center`} to={`${nav.link}`}>{nav.title}</NavLink>
                </li>
            ))}
            </ul>

            {/* <img src={tel_logo}></img> */}
            {/* <div className={`flex ${color ? 'w-[29.3vh]' : 'w-[30.8vh]'} md:flex hidden items-center justify-end ease-in-out duration-500`}>
            <button className={`text-gold1 ${color ? 'text-[1.3vw]' : 'text-[1.4vw]'}   p-[1vh] hover:bg-white hover:text-gold1 ease-in-out duration-500 border-2 border-gold1 font-main`}><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 3006 8459">+44 (0)20 3006 8459 </a></button>

            </div> */}
            <div className={`flex ${color ? 'w-[29.3vh]' : 'w-[30.8vh]'} md:flex hidden items-center justify-end ease-in-out duration-500`}>
            <NavLink to={`/`}><img src={pshot_goldlogo} alt="yours lawfully logo" className={`${color ? 'w-[18.3vh]' : 'w-[23.3vh]'} ${color ? 'h-[8.5vh]' : 'h-[10vh]'} ease-in-out duration-500`}></img></NavLink>
            </div>

        </div>
        <div className={`hidden md:flex`} onMouseOver={() => setOthers(true)}
                onMouseOut={() => setOthers(false)} className={`${others ? '' : 'hidden'}`}>
          <ul className="list-none md:flex hidden items-center justify-center flex-1">
              {otherLinks.map((nav,index) => (
                  <li
                  key = {nav.id}
                  className={`hover-underline-animation flex font-main font-normal cursor-pointer ${color ? 'text-[1.3vw]' : 'text-[1.4vw]'} ease-in-out duration-500 mx-[1.7vh] py-[1.7vh] text-white ${active_path=== nav.link ? 'text-gold1' : ''} hover:text-gold1 `}   
                  >
                {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
                <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
                </li>
            ))}
            </ul>

        </div>


            <div  className="md:hidden flex flex-row justify-between items-center w-full">
            <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} ease-in-out duration-500`}></img></NavLink>
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
              <div className={`${toggle ? 'flex' : 'hidden'} flex-col p-6 bg-black absolute top-0 left-0 h-[100vh] w-[100vw]`}>
                <div className={`flex flex-row justify-between items-center`}>
                  <NavLink to={`/`}><img src={logo_no_border} alt="yours lawfully logo" className={`${color ? 'w-[16.3vh]' : 'w-[21.3vh]'} ease-in-out duration-500`}></img></NavLink>
                  <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
                </div>
                <div className={`flex flex-col justify-center flex-1`}>

                
                  <ul className="list-none flex flex-col justify-center items-center ">
                    {navLinks.map((nav,index) => (
                      <React.Fragment key={nav.id}>
                        <hr className={`border-gold1  w-[80%] mx-auto my-[1vh]`}></hr>
                      <li
                        key = {nav.id}
                        className={`font-main font-normal cursor-pointer text-[3vh] ${index === navLinks.length - 1 ? 'mr-0' : ''} text-white`}   
                      >


                        <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
                        
                      </li>
                      {nav.id === "other-tratments" && (
                      <div>
                        <ul className="list-none flex flex-col items-center justify-center flex-1">
                        {otherLinks.map((nav2,index2) => (
                          <li
                            key = {nav2.id}
                            className={`hover-underline-animation flex font-main font-normal cursor-pointer text-[2.5vh] ease-in-out duration-500 mx-[1vh] py-[1vh] text-white ${active_path=== nav2.link ? 'text-gold1' : ''} hover:text-gold1 `}   
                          >

                          <NavLink className={`flex items-center`} to={`${nav2.link}`}>{nav2.title}</NavLink>
                          </li>
                        ))}
                        
                        </ul>
                          
                      </div> 
                      
                      )}
                      
                      </React.Fragment>
                    ))}
                  </ul>
                  <hr className={`border-gold1  w-[80%] mx-auto my-[1vh]`}></hr>
                  <button className={`text-gold1 ${color ? 'text-[3vh]' : 'text-[3vh]'} font-main  p-[1vh] hover:bg-white hover:text-gold1 ease-in-out duration-500 mt-[10vh]`}>+44 (0)20 3006 8459</button>
                </div>
              </div>
            </div>
            

    </nav>
  )
}

export default Navbar