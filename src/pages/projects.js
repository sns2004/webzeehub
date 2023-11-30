import React from "react";
import Footer from "./footer";

const Projects=()=>{
    return(
       <>
       <section className="projects-main ">
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
          </div>
       </section>
       <Footer/>
       </>
    )
}
export default Projects;