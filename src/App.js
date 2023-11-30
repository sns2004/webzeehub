import './App.css';
import { BrowserRouter as Router,NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Blog from './pages/blog';

import { SidebarData } from './components/sliderdata';
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [navpopup,setnavpop]=useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglenavbarPopup=()=>{
setnavpop(!navpopup);
  }
  return (
 <>

 
 <Router>
      <div>
      <div className='Navbar h-[80px]  text-white fixed shadow-lg shadow-primary w-full z-50  bg-darkblack flex justify-around'>
         <div className='nav-logo'>
            <img src='/webzee/public/image/Black-BG.png' alt='#' className='w-[80px] h-[80px]'/>
         </div>
         <div className='menu-bar flex items-center'>
            <ul className='menu-items md:flex  '>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className="py-2 px-4">
                       <NavLink
          to={item.path}
          className=""
          activeClassName="dash-active" 
        >
          <h2 className=" text-base font-semibold">{item.title}</h2>
        </NavLink>
                  </li>
                    )

                })}
                <li className="py-2 px-4"><button onClick={togglePopup}><h2 className=" text-base font-semibold">CONTACT</h2></button> </li>
            </ul>
            <div className="menu-btn md:hidden">
                <button onClick={togglenavbarPopup}>
                  <img src='/webzee/public/images/menu-icon.png' alt='Menu' className='w-[70px] relative right-0 h-[50px]' />
                </button>
              </div>
         </div>
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
         
        </Routes>
      </div>
   

    {showPopup && (
     
        <div className='popup-container border-[2px] border-primary mx-7 min-h-screen'>
          <div className='popup-content'>
           <div className='contact-navbar flex justify-around my-2 items-center w-full'>
            <img src='/images/Black-BG.png' className='w-[120px] h-[120px] logo' alt='#'/>
            <h1 className="text-primary text-[28px]  font-semibold">CONTACT US</h1>
           <button onClick={togglePopup}><img src='/images/close.png' alt='#' className='w-[20px] h-[20px]' /></button>
           </div>
           <div className='contact-content w-full flex'>
            <div className='contact-left-content w-1/2 p-3'>
              <div className='ms-[100px]'>
             <h1 className='text-white mb-2 font-semibold text-2xl'>Let's Connect</h1>
             <div className='email-container w-full h-[330px] p-5 rounded-lg bg-black'>
                  <div className='email-container-fields'>
                    <label>Email</label>
                    <input type='email' name='email'/>
                  </div>
                  <div className='email-container-fields'>
                    <label>Phone </label>
                    <input type='tel' name='number'/>
                  </div>
                  <div className='email-container-fields'>
                    <label>Message</label>
                  <textarea className='h-[150px]'></textarea>
                  </div>
                  <div className='email-container-btn'>
                   <button className='btn -translate-y-16'><img src='/images/contact_us_send.png' alt='#' className='w-[30px] h-[30px] rounded-xl'/></button>
                  </div>
             </div>
             </div>
            </div>
            <div className='contact-right-content w-1/2'>
            <div className="social-media text-white h-full flex justify-center  p-5">
          
          <div className='text-center'>
          <h3 className="text-white text-xl  font-medium py-4">Contact us through Social Media</h3>
          
              <p className="flex text-white text-xl my-6 font-medium"><a href="https://instagram.com/webzee_business?igshid=OGQ5ZDc2ODk2ZA==" className="flex" target='_blank'><img src="/images/insta.png" alt="#" className="w-[30px] h-[30px] me-2"/>Webzee_business</a></p>
              <p className="flex text-white text-xl mb-6 font-medium my-2"><a href="https://x.com/WebZee_Business?t=bBhpc087h7AvxgVgsgm9lw&s=09" className="flex" target='_blank'><img src="/images/x.png" alt="#" className="w-[30px] h-[30px] me-2 "/>@Webzee_Business</a></p>
              <p className="flex text-white text-xl mb-6 font-medium"><img src="/images/phone.png" alt="#" className="w-[30px] h-[30px] me-2"/>+91 9443463184</p>
              <p className="flex text-white text-xl mb-6 font-medium my-2"><img src="/images/Mail.png" alt="#" className="w-[30px] h-[30px] me-2 "/>webzee.business@gmail.com</p>
          </div>
      </div>
            </div>
           </div>
          </div>
        </div>
      )}
      {navpopup &&(
         <div className='navbar-container lg:hidden border-[2px] bg-darkblack border-primary  min-h-screen'>
               
          <div className='navbar-content text-white'>
           <div className='contact-navbar flex justify-around my-2 items-center w-full'>
            <img src='/images/Black-BG.png' className='w-[120px] h-[120px]' alt='#'/>
          
           <button onClick={togglenavbarPopup}><img src='/images/close.png' alt='#' className='w-[20px] h-[20px]' /></button>
          

           </div>
           <div className='navbar-content  flex justify-center  items-center'>
           <div className='menu-bar flex-col items-center'>
            <ul className='menu-navbar-items'>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className="py-5 px-4">
                       <NavLink onClick={togglenavbarPopup}
          to={item.path}
          className=""
          activeClassName="dash-active" 
        >
          <h2 className=" text-base font-semibold">{item.title}</h2>
        </NavLink>
                  </li>
                    )

                })}
                <li className="py-2 px-4"><button onClick={()=>{togglePopup();togglenavbarPopup()}}><h2 className=" text-base font-semibold">CONTACT US</h2></button> </li>
            </ul>
           
         </div>
           </div>
          </div>
        </div>
      
      )}
       </Router>
 </>
  );
}

export default App;
