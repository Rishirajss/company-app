import React from 'react'
import logo from '../img/image.png';
import { Link } from 'react-router-dom';

export default function Mainheader() {
  return (
    <>
        <div className="App-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-transprant">
                <div class="container">
                    <Link class="navbar-brand rounded" to="/">
                        <img src={logo} width="50%" alt="" className='rounded-circle'/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white"  to="/About">About</Link>
                            </li>                    
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/Conatct">Conatct</Link>
                            </li>                    
                        </ul>
                    </div>
                </div>    
            </nav>  
        </div>
    </>
  )
}
