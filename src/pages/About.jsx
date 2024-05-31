import React from 'react'
import Mainheader from '../comman/Mainheader'
import aboutImg from '../img/damir.jpg'
import Mainfooter from '../comman/Mainfooter'

export default function About() {
  return (
    <div>
          <Mainheader/>   
               <div className="container">
                    <div className="about-main py-5">
                         <div className="row">
                              <div className="col-sm-12 col-lg-6">
                                   <img src={aboutImg} width="100%"/>
                              </div>
                              <div className="col-sm-12 col-lg-6">
                                   <p className='pt-lg-5 pt-sm-0'>
                                        At our core, we are a passionate non-profit organization dedicated to advancing the understanding and implementation of digital security practices. With a firm belief in the power of education and advocacy, we tirelessly work to spread awareness about the critical importance of security in digital development. <br /> <br />
                                        Our flagship initiative, the Secure Coding Project, stands as a beacon of our commitment. Through this program, we not only advocate for but actively promote secure coding practices that bolster the resilience of software applications against evolving threats. By fostering a community of developers, security experts, and enthusiasts, we create a collaborative environment where knowledge is shared and skills are honed. 
                                   </p>
                              </div>
                         </div> 
                    </div>  
               </div>
          <Mainfooter/>
    </div>
  )
}
