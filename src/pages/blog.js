import React from "react";
import Footer from "./footer";

const Blog=()=>{
    return(
        
        <>
        <section className="blog  text-white ">
       <div className="max-width">
       <h1 className="text-primary text-[28px] my-4 font-semibold">OUR BLOG</h1>
       <div className="blog-content">
        <div className="blog-content-1 h-[300px] p-5 mt-10 mb-4 flex items-center">
            <img src="/webzee/images/Blog-1.jpg" className="h-[220px]" alt="#"/>
            <div className="p-5">
            <h1 className="text-primary text-[24px]  font-semibold text-start my-2">DIGITAL MARKETING</h1>
            <p className=" text-justify font-semibold">Today’s tech-savvy consumers are turning away from a one-size-fits-all content approach. If you want to engage and grow your customer base, you need to speak to your audience on a personal level and doing that properly means using storytelling.With many channels and platforms to share your brand story, values, and company culture, there are endless opportunities to create a valuable and meaningful narrative with your audience.Here, we’ll explore the key digital channels for brand storytelling, and look at examples for insight and inspiration.</p>
        </div></div>
        <div className="blog-content-2 h-[300px] p-5  mb-4  flex items-center">
           
            <div className="p-5">
            <h1 className="text-primary text-[24px]  font-semibold text-start my-2">THE BEST WALKING TOURS IN VENICE</h1>
            <p className=" text-justify font-semibold">Venice is one of the most popular destinations in Europe. With its iconic canals and meandering waterways, it’s also considered one of the most unique cities in the world.And, while the city struggles with large crowds in the summer, it’s definitely still worth visiting as there is a ton to see and do here (plus lots of amazing things to eat).</p>
        </div> <img src="/webzee/images/Blog-2.jpeg" className="h-[220px]" alt="#"/></div>
       </div>
       </div>
      
        </section>
        <Footer/>
       
        </>
    )
}
export default Blog;