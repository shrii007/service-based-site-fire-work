
import React, { } from 'react';




export default function Footr() {

    return (<>

 <div>
<footer className=" fot bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>Falcon services</h5>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/" className="text-white">About Us</a></li>
              <li><a href="/" className="text-white">Services</a></li>
              <li><a href="/" className="text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@company.com" className="text-white">info@falcon.com</a></li>
              <li><a href="tel:+1234567890" className="text-white">+1 (234) 567-890</a></li>
              <li className="d-flex">
                <a href="/" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                <a href="/" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
                <a href="/" className="text-white"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer></div>
 </> )};


    
  