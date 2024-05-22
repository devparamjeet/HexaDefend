import React, { Component } from 'react'
// import cloud from '../images/system.png'
// import android from '../images/android.png'
import bootcamp from '../images/bootcamp.png'
import testing from '../images/testing.png'
import { Link } from 'react-router-dom'
// import Contact from './Contact'
import './Service.css'

export default class Service extends Component {
  render() {
    return (
      // ======= Services Section =======
      <>
      <section id="services" className="services">
        <div className="container text-light" data-aos="fade-up">

          <div className="section-title">
            <h1 className='fs-1' style={{letterSpacing:"1px"}}>Services</h1>
            <div id='service_desc'>
              <p className='fs-6 ' style={{letterSpacing:"1px"}}>Check our Services </p>
              <p>
               <hr style={{border:"2.5px solid red",width:"10vw",color:"#fc0404"}}/>
              </p>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box icon_box_width">
                <div className="icon">
                  <img src={testing} alt="web" className='img-fluid' />
                </div>
                <h4><Link to='/service/testing' style={{letterSpacing:"1px"}} className="fs-5-" data-modal-target="modal5">Testing Services</Link></h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box icon_box_width">
                <div className="icon">
                  <img src={bootcamp} alt="network" className='img-fluid'/>
                </div>
                <h4><Link to='/service/bootcamp' style={{letterSpacing:"1px"}} className="fs-5-" data-modal-target="modal2">Bootcamp</Link></h4>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box icon_box_width">
                <div className="icon">
                  <img src={android} alt="android" className='img-fluid'/>
                </div>
                <h4><Link to='/service/testing' style={{letterSpacing:"1px"}} className="fs-5-" data-modal-target="modal3">Android Application Penetration Testing</Link></h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box icon_box_width">
                <div className="icon"> 
                <img src={cloud} alt="cloud" className='img-fluid'/>
                </div>
                <h4><Link to='/service/testing' style={{letterSpacing:"1px"}} className="fs-5-" data-modal-target="modal4">System Penetration Testing</Link></h4>
              </div>
            </div> */}

          </div>
        </div>
        {/* End Services Section */}
      </section >
      <hr />
      {/* <Contact/> */}
      </>
    )
  }
}
