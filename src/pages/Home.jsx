import React from 'react'
import Mainheader from '../comman/Mainheader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import inenImg from '../img/austin-distel.jpg';
import Mainfooter from '../comman/Mainfooter';

export default function Home() {
  return (
    <div className=''>
        <Mainheader/>  
          <div className='container mt-5'>
                <div className="row py-4">
                    <div className="col-sm-12 col-lg-5 pt-lg-5 pt-sm-0">
                          <div className="whatsapp-box py-2">
                              <a href="https://chat.whatsapp.com/CIG1F249G2a30OooPEkpC0">
                                <FontAwesomeIcon icon={faWhatsapp} className='fs-1'/> 
                                <span className='fw-bold ms-2'>WhatsApp</span>       
                              </a>
                          </div>
                          <div className="discord-box my-3 py-2">
                              <a href="https://discord.com/invite/VBcYuHhqzj">
                                <FontAwesomeIcon icon={faDiscord} className='fs-1'/> 
                                <span className='fw-bold ms-2'>Discord</span>       
                              </a>
                          </div>
                          <div className="github-box py-2">
                              <a href="https://github.com/thepwnexperts">
                                <FontAwesomeIcon icon={faGithub} className='fs-1'/> 
                                <span className='fw-bold ms-2'>GitHub</span>       
                              </a>
                          </div>
                      </div>                 
                    <div className="col-sm-12 col-lg-7 innerimg mt-3 mt-lg-0">
                      <img src={inenImg} width="100%"  alt="" />
                    </div>
                </div>
          </div>
        <Mainfooter/>
    </div>
  )
}
