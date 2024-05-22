import React, { Component } from "react";
import logo from "../images/hexalogo2.png";
import Contact from "./Contact";
import system1 from "../images/services/system1.png";
import temp9 from "../images/services/temp9.png";
import temp13 from "../images/services/temp13.png";
import webimg from "../images/services/temp6.png";
// import { Link } from "react-router-dom";
import './WebTesting.css'

export default class WebTesting extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6 mx-auto">
                  <p className="text-center fs-1 text-light">
                    <img
                      src={logo}
                      alt="Hexa Defend"
                      style={{ width: "4vw" }}
                      className="img-fluid logo-hexa"
                    />
                    <span className="text-light fs-2">
                      <span style={{color:"#fc0404"}}>Hexa</span> Defend
                    </span>
                  </p>
                </div>
              </div>
              <p>
                {/* <img src={commit} alt="commit" className='img-fluid rounded rounded-2' style={{ border: "2px solid #a77a00", boxShadow: "0px 0px 10px 2px #a77a00", cursor: "pointer" }} /> */}
              </p>
              <div id="web_head">
                <div id="web_head_content">
                  <h1><span className="web_text_highlight" >Hire Us</span> <br /> For Web Application <br />Penetration  Testing </h1>
                  <button type="button"><a href="/contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
                <div id="web_head_img">
                  <img id="web_image" src={webimg} alt="" />
                </div>
              </div>
              <p
                className="fs-1 pt-3 text-center"
                style={{ fontStyle: "bold" }}
              >
                <span className="text-light">
                  Web Application Penetration Testing
                </span>
              </p>
              <p className="text-muted fs-5 py-2 pb-4 service_contents">
                Web application penetration testing is a critical aspect of
                cybersecurity that helps identify and address potential
                vulnerabilities in web applications that could be exploited by
                cybercriminals. Our web application penetration testing services
                are designed to provide a comprehensive assessment of your web
                applications and identify any security weaknesses that could put
                your organization's sensitive data and assets at risk.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Our team of experts uses the latest tools and techniques to
                simulate attacks and identify potential weaknesses in your web
                applications. We begin by analyzing the application's
                architecture and design to identify areas that may be vulnerable
                to attack. We then perform a series of tests to identify any
                security weaknesses, including input validation errors,
                authentication and authorization issues, SQL injection, and
                cross-site scripting (XSS) vulnerabilities.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                We take a thorough and collaborative approach to web application
                penetration testing, working closely with your organization to
                understand your unique needs and goals. We provide detailed
                reports with prioritized recommendations for remediation,
                allowing you to address any vulnerabilities before they can be
                exploited by malicious actors.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Our web application penetration testing services can help your
                organization improve its security posture and reduce the risk of
                data breaches and cyber attacks. By identifying and addressing
                vulnerabilities in your web applications, you can ensure that
                your organization's sensitive data and assets are protected from
                cyber threats.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                At our startup, we are committed to providing high-quality and
                affordable cybersecurity testing services, including web
                application penetration testing. Our team of experts has
                extensive experience in identifying vulnerabilities in web
                applications and can work with your organization to develop a
                customized testing plan that meets your unique needs and budget.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                In addition to web application penetration testing, we also
                offer a range of other cybersecurity testing services, including
                network penetration testing, mobile application penetration
                testing, and social engineering testing. Our flexible and
                collaborative approach allows us to provide tailored solutions
                that address your organization's unique security needs.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Contact us today to learn more about how our web application
                penetration testing services can help secure your organization's
                web applications and protect your assets from cyber threats. We
                are committed to providing effective and affordable
                cybersecurity testing services that help organizations mitigate
                the risks of cyber attacks and data breaches.
              </p>
            </div>
          </div>
          <div className="row web_info_container">
            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">
                  Some Web Attacks a Bad actor can perform
                </span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>SQL Injection</li>
                  <li>Cross-site scripting (XSS)</li>
                  <li>Remote code execution (RCE)</li>
                  <li>Session hijacking</li>
                </ul>
                There are a lot more attacks a bad hacker can perform that can
                become a threat to your digital assets.
              </p>
            </div>

            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">Our Web Testing Process</span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Reconnaissance</li>
                  <li>Scanning</li>
                  <li>Manual & Automation Testing</li>
                  <li>Exploitation</li>
                  <li>Reporting</li>
                  <li>Re-testing after Remediation by developer</li>
                </ul>
                Note:- The time taken to complete the test of your assets
                depends upon the scope and complexity of your assets.
              </p>
            </div>

            <div className="col-sm-4 p-5 response_row2">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">Why it is important ?</span>
              </p>
              <p className="text-muted fs-6 py-2">
                Cybersecurity testing services are critical for protecting
                businesses and organizations from data breaches and cyber
                attacks by identifying vulnerabilities in their systems,
                networks, and applications, and providing recommendations for
                remediation and risk mitigation.
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={{ background: "#171717" }}>
        <div className="row">
                <div className="col-sm-6 p-5 web_info_more">
                  <p className="fs-2 text-start" style={{ fontStyle: "bold" }}>
                    <span className="text-light">Why it is important ?</span>
                  </p>
                  <p className="text-danger fs-5 py-2">
                    Effective cybersecurity testing services
                  </p>
                  <p className="text-muted fs-6 py-2">
                    Our team provides comprehensive cybersecurity testing
                    services with a flexible and collaborative approach. We have
                    a strong background and expertise in the latest tools and
                    techniques to identify and mitigate vulnerabilities in your
                    organization's systems, networks, and applications. Our
                    commitment to staying up-to-date with the latest trends and
                    regulations ensures that we provide effective and relevant
                    services to protect your organization's assets.
                  </p>
                </div>

                <div className="col-sm-6 p-5 web_info_more">
                  <p className="fs-2 text-start" style={{ fontStyle: "bold" }}>
                    <span className="text-light">Pricing Details</span>
                  </p>
                  <p className="text-danger fs-5 py-2">
                    Affordable & Cost-effective
                  </p>
                  <p className="text-muted fs-6 py-2">
                    Contact us for affordable pricing on comprehensive
                    cybersecurity testing services. We are committed to
                    providing cost-effective solutions without compromising on
                    quality. Our team will respond promptly to your inquiries
                    and provide all the information you need.
                  </p>
                  <button id="web_hire_btn" type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
              </div>
        </div>
        <div className="container">
          <p className="text-center text-white h2 my-5">
            Check Our Other Services
          </p>
          <div className="row">
            <div className="col-sm-4 p-4 text-center">
              <img src={system1} alt="web" className="img-fluid service_thumbnails"   style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}  />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/systemtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={temp9} alt="web" className="img-fluid service_thumbnails"   style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}  />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/androidtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={temp13} alt="web" className="img-fluid service_thumbnails"   style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}  />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/networktesting'>Read Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </>
    );
  }
}
