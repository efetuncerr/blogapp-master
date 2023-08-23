import "./Footer.scss"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    
<footer class="pt-4 pb-4">
<div class="container text-center text-md-left">
  <div class="row text-center text-md-left">
    <div class="col-md-3 col-lg-3 col-xl-4 mx-auto mt-3">
        <span style={{fontWeight:"bold", fontSize:"40px", letterSpacing:"4px", justifyContent:"left", display:"flex", color:"gray" }}>LOGO</span>
      {/* <img src="" class="img-fluid"  alt="Logo"/> */}
      <p class="mt-4 justify-content-start text-start text-white">Copyright © 2023 Nexcent ltd.<br/>All rights reserved </p>

      
        <div class="text-start text-md-right  ">
          <ul class="list-unstyled list-inline ">
            <li class="list-inline-item">
              <a href="/" class="icons" ><FacebookIcon/> </a>
            </li>
            <li class="list-inline-item">
              <a href="/" class=" icons " ><InstagramIcon/></a>
            </li>
            <li class="list-inline-item">
              <a href="/" class="icons " ><YouTubeIcon/></a>
            </li>
            <li class="list-inline-item">
              <a href="/" class="icons" ><TwitterIcon/></a>
            </li>
            <li class="list-inline-item">
              <a href="/" class=" icons" ><LinkedInIcon/></a>
            </li>
          </ul>
        </div>
      


    </div>

    <div class="col-md-3 col-lg-2 col-xl-2  mt-3 text-start ">
      <h5 class="mb-4 text-white" style={{fontWeight:"bold"}}>Company</h5>
      <p>
        <a href="/" class=" text-white text-decoration-none ">About us</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Blog</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Contact us</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Pricing</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Testimonials</a>
      </p>
   </div>
    <div class="col-md-4 col-lg-3 col-xl-2 mx-auto mt-3 text-start">
      <h5 class="mb-4 text-white" style={{fontWeight:"bold"}}>  Support</h5>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Help center</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Terms of service</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Legal</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Privacy policy</a>
      </p>
      <p>
        <a href="/" class=" text-white text-decoration-none ">Status</a>
      </p>
    </div>
   
   
  
    <div class="col-xl-3 col-lg-3 col-md-6 mx-auto mt-3 text-start">
      <div>
        <h5 class="mb-4 text-white" style={{fontWeight:"bold"}}>Stay up to date</h5>

        <div class="d-flex justify-content-end">
          <input type="email" class="form-control bg-light border-light" style={{borderRadius: "15px;"}} Placeholder="Your email address"/> 
          
          


      </div>
      </div>
    </div>
    </div>
  </div>

 

</footer>

  )
  
}

export default Footer