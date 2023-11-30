import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from "./footer";

const Home=()=>{
    return(
        <>
     <section className="home ">
        <div className="max-width  ">
          <div className="home-content text-white text-start relative top-8  mx-16">
            <p className="t1  font-bold text-4xl ">WE ARE</p>
            <h1 className=" t2 text-5xl my-1">HERE <span className="font-extrabold px-2">TO</span></h1>
            <h1 className="t3 text-6xl font-extrabold my-2">DEVELOPE</h1>
            <p className="t4 text-5xl font-normal my-2">YOUR</p>
            <h2 className="t5 text-6xl font-semibold">NEEDS</h2>
          </div>
        </div>
     </section>
     <section className="services  items-center flex">
        <div className="max-width text-center w-full">
            <h1 className="text-primary text-[28px] my-4 font-semibold">SERVICES</h1>
            <div className="service-content  mt-8">
              <div className="top-content flex   mx-3 w-full justify-around ">
                <div className="service-elements">
                    <img src="/images/Web-design.png" alt="#" className=""/>
                    <h1>Web Design</h1>
                </div>
                <div className="service-elements">
                    <img src="/webzee/images/Graphic-design.png" alt="#" className=""/>
                    <h1>Graphic Design</h1>
                </div>
                <div className="service-elements">
                    <img src="/webzee/images/Content-writing.png" alt="#" className=""/>
                    <h1>Content Writing</h1>
                </div>
                <div className="service-elements">
                    <img src="/webzee/images/Web-Development.png" alt="#" className=""/>
                    <h1>Web Development</h1>
                </div>
              </div>
              <div className="bottom-content flex my-4  mx-3 w-full justify-around">
              <div className="service-elements">
                    <img src="/webzee/images/Digital-marketing.png" alt="#" className=""/>
                    <h1>Digital Marketing</h1>
                </div>
                <div className="service-elements">
                    <img src="/webzee/images/Web-Hosting.png" alt="#" className=""/>
                    <h1>Web Hosting</h1>
                </div>
                <div className="service-elements">
                    <img src="/webzee/images/Search-engine-optimiztion.png" alt="#" className=""/>
                    <h1>Search Engine Optimization</h1>
                </div>
              </div>
            </div>
        </div>
     </section>
     <section className="projects   ">
        <div className="max-width">
        <h1 className="text-primary text-[28px] my-4 font-semibold">PROJECTS</h1>
        <div className="projects-content flex">
            <div className="projects-container mx-3  ">
                <img src="/webzee/images/project-list-1.png" className="border-[3px] border-primary"  alt="#"/>
                <p className="project-text ">ONLINE SHOPPING WEBSITE</p>
            </div>
            <div className="projects-container mx-3 ">
                <img src="/webzee/images/project-list-2.jpeg" className="border-[3px] border-primary" alt="#"/>
                <p className="project-text ">FASHION WEBSITE</p>
            </div>
            <div className="projects-container mx-3 ">
                <img src="/webzee/images/project-list-3.jpg" className="border-[3px] border-primary"  alt="#"/>
                <p className="project-text ">SHOW WEBSITE</p>
            </div>
           
        </div>
        <button className="btn"><Link to="/projects">View More</Link></button>
        </div>
     </section>
     <section className=" tech ">
        <div className="max-width w-full flex">
            <div className="left-content  w-1/2">
                <img src="/webzee/images/Tech-Known.png" alt="#"/>
            </div>
            <div className="right-content text-center  w-1/2">
            <h1 className="text-primary text-[28px] my-4  text-center font-semibold">TECHNOLOGIES  KNOWN</h1>
            <ul className="technology-known text-white text-start px-10 flex relative top-10 w-full mt-[40px] h-[200px]">
              <div className="cont-1 w-1/2 me-5">
                    <li><img src="/webzee/images/Vector.png" alt="#" />React Js</li>
                    <li><img src="/webzee/images/Vector.png" alt="#" />Node Js</li>
                    <li><img src="/webzee/images/Vector.png" alt="#" />Express Js</li>
                    <li><img src="/webzee/images/Vector.png" alt="#" />Mongo DB</li>
                    </div>
                    <div className="cont-2 w-1/2 ms-5">
                    <li><img src="/webzee/images/Vector.png" alt="#" />Tailwindcss</li>
                    <li><img src="/webzee/images/Vector.png" alt="#" />Adobe</li>
                    <li><img src="/webzee/images/Vector.png" alt="#" />Canva</li></div>
                </ul>
     
            </div>
        </div>
     </section>
     <Footer/>
     </>
    )
}
export default Home;