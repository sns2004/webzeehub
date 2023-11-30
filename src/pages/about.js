import React from "react";
import Footer from "./footer";

const About=()=>{
    return(
        <>
        <section className="about ">
         <div className="max-width">
         <h1 className="text-primary text-[28px] my-4 font-semibold">ABOUT US</h1>
         <div className="about-content w-full flex text-white  justify-center">
              <div className="about-left-content w-1/2">
                <img src="/images/About-us-page.png" className="h-[400px] w-full"alt="#"/>
              </div>
              <div  className="about-right-content w-1/2 relative top-16 px-3">
                <p className="text-2xl  font-light text-justify">Our freelancing business specializes in the dynamic fields of web and graphic design, offering a comprehensive suite of services tailored to your creative needs. Whether you require a stunning website, a captivating logo, or eye-catching branding materials, we've got you covered.</p>
              </div>
         </div>
         </div>
        </section>
        <section className="team-members  text-white ">
          <div className="max-width">
          <h1 className="text-primary text-[28px] my-4 font-semibold">TEAM</h1>
          <div className="team-members-details h-[350px] w-full p-5 flex">
            <div className="member w-2/6 h-[250px] p-5 flex justify-center items-center text-start">
                <div>
              <img src="/images/shanjai.jpg" className=" w-[170px] h-[170px] rounded-full  border-[2px] border-primary" alt="#"/>
              <p className="py-4 px-5">WEB DEVELOPER</p></div>
            </div>
            <div className="member w-2/6 h-[250px] p-5 flex justify-center items-center text-start">
            <div>
              <img src="/images/shanjai.jpg" className=" w-[170px] h-[170px] rounded-full  border-[2px] border-primary" alt="#"/>
              <p className="py-4">GRAPHICAL DESIGNER</p></div>
            </div>
            <div className="member w-2/6 h-[250px] p-5 flex justify-center items-center text-start">
            <div>
              <img src="/images/shanjai.jpg" className=" w-[170px] h-[170px] rounded-full  border-[2px] border-primary" alt="#"/>
              <p className="py-4 px-7">WEB DESIGNER</p></div>
            </div>

          </div>
          </div>
        </section>
        <Footer/></>
    )
}
export default About;