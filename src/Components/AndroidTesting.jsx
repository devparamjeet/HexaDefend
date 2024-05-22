import React, { Component } from "react";
import logo from "../images/hexalogo2.png";
import Contact from "./Contact";
import system1 from "../images/services/system1.png";
import temp13 from "../images/services/temp13.png";
import web1 from "../images/services/temp6.png";
import androidimg from "../images/services/temp9.png";
// import { Link } from "react-router-dom";
import './AndroidTesting.css'

export default class AndroidTesting extends Component {
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
              <div id="android_head">
                <div id="android_head_content">
                  <h1><span className="android_text_highlight" >Hire Us</span> <br /> For Android Application <br />Penetration  Testing </h1>
                  <button type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
                <div id="android_head_img">
                  <img id="android_image" src={androidimg} alt="" />
                </div>
              </div>
              <p
                className="fs-1 pt-3 text-center"
                style={{ fontStyle: "bold" }}
              >
                <span className="text-light">
                  Android Application Penetration Testing
                </span>
              </p>
              <p className="text-muted fs-5 py-2 pb-4 service_contents">
                In today's mobile-first world, Android applications are an
                integral part of many organizations' business operations.
                However, with the increasing number of mobile devices and the
                growing sophistication of cyber attacks, it is crucial for
                businesses to ensure the security of their Android applications.
                Android application testing services provide a comprehensive
                approach to identify and mitigate security risks within an
                Android application.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Android application testing services typically include a wide
                range of techniques and tools to identify potential
                vulnerabilities and weaknesses in an application. These
                techniques may include both static and dynamic analysis, code
                review, and threat modeling. Static analysis involves reviewing
                the application's source code to identify potential
                vulnerabilities and weaknesses, while dynamic analysis involves
                testing the application in a live environment to identify any
                security flaws.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                One of the main benefits of Android application testing services
                is that they can help organizations identify security
                vulnerabilities that can be exploited by cyber attackers. Common
                vulnerabilities that can be identified during an Android
                application penetration testing process include insufficient
                authentication and authorization, insecure data storage,
                improper session handling, injection flaws, insecure
                cryptographic storage, and poor code quality.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                By identifying and remediating these vulnerabilities,
                organizations can improve the security of their Android
                applications, protect sensitive data, and prevent potential data
                breaches. In addition, Android application testing services can
                help organizations comply with regulatory requirements and
                industry standards such as PCI DSS, HIPAA, and GDPR.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Overall, Android application testing services are essential for
                organizations that want to ensure the security and integrity of
                their Android applications. By proactively identifying and
                mitigating potential security risks, businesses can protect
                their brand reputation, safeguard their customers' data, and
                maintain their competitive edge in the marketplace.
              </p>
            </div>
          </div>
          <div className="row android_info_container">
            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">
                  Some System Attacks a Bad actor can perform
                </span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Insufficient Authentication/Authorization</li>
                  <li>Insecure Data Storage</li>
                  <li>Improper Session Handling</li>
                  <li>Injection Flaws</li>
                </ul>
                There are a lot more attacks a bad hacker can perform that can
                become a threat to your digital assets.
              </p>
            </div>

            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">
                  Our Android Application Testing Process
                </span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Reconnaissance and Information Gathering</li>
                  <li>Static and Dynamic Analysis</li>
                  <li>Exploitation</li>
                  <li>Common Attack Scenarios</li>
                  <li>Security Controls</li>
                  <li>Reporting</li>
                  <li>ExplRe-testing after Remediation by developeritation</li>
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
                <div className="col-sm-6 p-4 android_info_more">
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

                <div className="col-sm-6 p-4 android_info_more">
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
                  <button id="android_hire_btn" type="button"><a href="/contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
              </div>
        </div>
        <div className="container">
          <p className="text-center text-white h2 my-5">
            Check Our Other Services
          </p>
          <div className="row">
            <div className="col-sm-4 p-4 text-center">
              <img src={system1} alt="web" className="img-fluid service_thumbnails"  style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}} />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/systemtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center ">
              <img src={temp13} alt="web" className="img-fluid service_thumbnails" style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}/>
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/networktesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={web1} alt="web" className="img-fluid service_thumbnails" style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}/>
              <div className="text-center py-4 d-flex justify-content-center">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/webtesting'>Read Now</a>
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
