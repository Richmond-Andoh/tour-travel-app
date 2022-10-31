import "./FooterStyle.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="">
            <div className="social d-flex">
                <div className="social-top">
                  <h2>Richy</h2>
                  <p>Choose your Destination</p>
                </div>
                <div className="social-icons">
                  <p>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-github"></i>
                    </a>
                  </p>
                </div>
            </div>
        </div>
        <div className="row container-fluid footer-bottom">
            <div className="col-sm-3">
               <h3 className="ms-3 fw-bolder">Proects</h3>
               <ul className="list">
                <li>Status</li>
                <li>Changelog</li>
                <li>License</li>
                <li>All Versions</li>
               </ul>
            </div>
            <div className="col-sm-3">
               <h3 className="fw-bolder">Community</h3>
               <ul className="list">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Issues</li>
               </ul>
            </div>
            <div className="col-sm-3">
               <h3 className="ms-4 fw-bolder">Help</h3>
               <ul className="list">
                    <li>Support</li>
                    <li>TroubleShooting</li>
                    <li>Contact Us</li>
               </ul>
            </div>
            <div className="col-sm-3">
               <h3 className="ms-2 fw-bolder">Others</h3>
               <ul className="list">
                    <li>Privacy Policy</li>
                    <li>Terms of condition</li>
                    <li>License</li>
               </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer