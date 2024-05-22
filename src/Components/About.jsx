import React, { Component } from 'react'
import about from '../images/about.jpg'
import history from '../images/history.jpg'
import expierence from '../images/expierence.jpg'
import commit from '../images/commit.jpg'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <>
        {/* ======= About Section =======  */}
        <section id="about" className="about pt-5">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2 pt-5" data-aos="fade-left" data-aos-delay="100">
                <img src={about} className="img-fluid rounded rounded-6" title='Hexa Defend' style={{border: "2px solid #FC0404", boxShadow: "0px 0px 10px 2px #FC0404", cursor: "pointer" }} alt="about" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <br /><br /><br />
                <p className='text-light about_heading h3'><span style={{color:"#FC0404"}} >Hexa</span> Defend is a Modern Pentesting Firm.</p>
                <p className="fst-italic text-light">
                  Hexa Defend was founded in <span style={{color:"#fc0404"}}>1 April - 2023</span>  to help solve the information overload crisis in vulnerability management. Having worked both as an ethical hacker for tier-one companies, and providing cyber security knowledge in different domains to students. We help organizations reduce their cyber attack exposure by providing sufficient cyber security services.<br /> <br />
                  Our Team Protects digital assets from black hat hackers by providing organizations with sufficient services. With our well-organized Cyber Security services, you can avoid maximum attacks and recover quickly from any that succeeded.
                  <br /><br /><b>Take charge of your own security, <span style={{color:"#FC0404"}} >Hexa Defend</span> has got you covered.</b>
                </p>
              </div>
            </div>

          </div>
          <section id="services" className="services">
            <div className="container text-light pt-5" data-aos="fade-up">

              <div className="row pt-4">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box2">
                    <div className="icon mb-5 about_img" style={{width:"20vw"}}>
                    <a href="/about/history">
                      <img src={history} alt="web" className='img-fluid' style={{border: "1px solid #FC0404",borderRadius:"10px",boxShadow:"0px 0px 2px 2px #FC0404"}}/>
                    </a>
                    </div>

                    <h4 className='pt-4 fs-4'><a href='/about/history' style={{ letterSpacing: "1px" }} className="fs-5-" data-modal-target="modal5">History</a></h4>

                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box2">
                    <div className="icon mb-5 about_img" style={{width:"20vw"}}>
                    <a href="/about/experience">
                      <img src={expierence} alt="web" className='img-fluid' style={{border: "1px solid #FC0404",borderRadius:"10px",boxShadow:"0px 0px 2px 2px #FC0404"}}/>
                    </a>
                    </div>

                    <h4 className='pt-4 fs-4'><a href='/about/experience' style={{ letterSpacing: "1px" }} className="fs-5-" data-modal-target="modal5">Experience</a></h4>

                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box2 about_commit">
                    <div className="icon mb-5 about_img about_commit" style={{width:"20vw"}}>
                    <a href="/about/commitments">
                      <img src={commit} alt="web" className='img-fluid' style={{border: "1px solid #FC0404",borderRadius:"10px",boxShadow:"0px 0px 2px 2px #FC0404"}}/>
                    </a>
                    </div>

                    <h4 className='pt-4 fs-4'><a href='/about/commitments' style={{ letterSpacing: "1px" }} className="fs-5-" data-modal-target="modal5">Commitments</a></h4>

                  </div>
                </div>

               
              </div>
            </div>
            {/* End Services Section */}
          </section >
        </section>
      </>
    )
  }
}
