import React from "react";

const Footer=()=>{
   return(
    <>
    <div className="footer bg-black h-[200px] w-full flex p-2">
        <div className="footer-logo w-3/6 flex jutify-center items-center ">
           <img src="/webzee/images/Gray-BG.png" alt="" className="h-[200px] w-[200px]"/>
        </div>
        <div className="social-media w-2/6 h-full flex  p-5">
          
            <div>
            <h3 className="foot-head text-white text-2xl font-semibold py-4">Social Media</h3>
            
                <p className=" footer-text flex text-white  text-lg  font-medium"><a href="https://instagram.com/webzee_business?igshid=OGQ5ZDc2ODk2ZA==" className="flex" target="_blank"><img src="/webzee/images/insta.png" alt="#" className="w-[30px] h-[30px] me-2"/>Webzee_business</a></p>
                <p className="footer-text flex text-white text-lg  font-medium my-2"><a href="https://x.com/WebZee_Business?t=bBhpc087h7AvxgVgsgm9lw&s=09" className="flex" target="_blank"><img src="/webzee/images/x.png" alt="#" className="w-[30px] h-[30px] me-2 "/>@Webzee_Business</a></p>
            </div>
        </div>
        <div className="Mail w-2/6 h-full flex  p-5">
          
          <div>
          <h3 className="foot-head text-white text-2xl font-semibold py-4">Contact Us</h3>
          
              <p className="footer-text flex text-white text-lg  font-medium"><img src="/webzee/images/phone.png" alt="#" className="w-[30px] h-[30px] me-2"/>+91 9443463184</p>
              <p className="footer-text flex text-white text-lg  font-medium my-2"><img src="/webzee/images/Mail.png" alt="#" className="w-[30px] h-[30px] me-2 "/>webzee.business@gmail.com</p>
          </div>
      </div>
       
    </div>
    </>
   )
}
export default Footer;