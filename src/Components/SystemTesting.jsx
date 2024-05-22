import React, { Component } from "react";
import logo from "../images/hexalogo2.png";
import Contact from "./Contact";
import web1 from "../images/services/temp6.png";
import temp9 from "../images/services/temp9.png";
import temp13 from "../images/services/temp13.png";
import systemimg from "../images/services/system1.png";
// import { Link } from "react-router-dom";
import './SystemTesting.css'

export default class SystemTesting extends Component {
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
              <div id="system_head">
                <div id="system_head_img">
                  <img id="system_image" src={systemimg} alt="" />
                </div>
                <div id="system_head_content">
                  <h1><span className="system_text_highlight" >Hire Us</span> <br /> For system <br />Penetration  Testing </h1>
                  <button type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
              </div>
              <p
                className="fs-1 pt-3 text-center"
                style={{ fontStyle: "bold" }}
              >
                <span className="text-light">System Penetration Testing</span>
              </p>
              <p className="text-muted fs-5 py-2 pb-4 service_contents">
                System penetration testing is an essential component of a
                comprehensive cybersecurity strategy for organizations of all
                sizes. The goal of system penetration testing is to identify
                potential vulnerabilities in the organization's systems and
                infrastructure before an attacker can exploit them. By
                proactively identifying and addressing security vulnerabilities,
                organizations can reduce the risk of data breaches, financial
                loss, and reputational damage.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                The system penetration testing process typically involves
                several stages, beginning with a reconnaissance phase where the
                tester gathers information about the target system and
                identifies potential attack vectors. The next phase involves
                vulnerability scanning and analysis, where the tester uses
                automated tools and manual techniques to identify
                vulnerabilities in the system. Once vulnerabilities are
                identified, the tester attempts to exploit them to gain access
                to the system, escalate privileges, or exfiltrate sensitive
                data.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                One of the benefits of system penetration testing is that it
                provides organizations with a clear understanding of their
                security posture. By identifying vulnerabilities and simulating
                attacks, organizations can see how well their security controls
                are working and where improvements are needed. System
                penetration testing can also help organizations meet compliance
                requirements and regulations, such as HIPAA, PCI DSS, and GDPR.{" "}
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Another key benefit of system penetration testing is that it can
                save organizations money in the long run. By identifying and
                addressing vulnerabilities before they can be exploited by
                attackers, organizations can avoid the costly aftermath of a
                data breach, such as remediation costs, lost revenue, and damage
                to their reputation. Additionally, system penetration testing
                can help organizations avoid regulatory fines and legal
                liabilities that can result from noncompliance.{" "}
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                We are committed to staying up-to-date with industry standards
                and frameworks, such as CVSS (Common Vulnerability Scoring
                System) and CVE (Common Vulnerabilities and Exposures), to
                ensure that our services meet the highest standards.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Overall, system penetration testing is a critical component of
                any organization's cybersecurity strategy. By regularly testing
                systems and infrastructure, organizations can identify
                vulnerabilities and improve their security posture, reduce the
                risk of data breaches, and protect their bottom line. At our
                system penetration testing service, we use a comprehensive
                approach to identify vulnerabilities in our clients' systems and
                infrastructure, and work with them to develop a remediation plan
                that addresses identified vulnerabilities and improves their
                overall security posture.{" "}
              </p>
            </div>
          </div>
          <div className="row system_info_container">
            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">
                  Some System Attacks a Bad actor can perform
                </span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Privilege Escalation</li>
                  <li>Software Misconfiguration</li>
                  <li>Unpatched Vulnerabilities</li>
                  <li>Backdoor Access</li>
                </ul>
                There are a lot more attacks a bad hacker can perform that can
                become a threat to your digital assets.
              </p>
            </div>

            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">Our System Testing Process</span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Information Gathering</li>
                  <li>Threat Modeling</li>
                  <li>Vulnerability Analysis</li>
                  <li>Exploitation</li>
                  <li>Exploitation</li>
                  <li>Post-Exploitation</li>
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
        <div className="container"  style={{ background: "#171717" }}>
        <div className="row">
                <div className="col-sm-6 p-5 system_info_more">
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

                <div className="col-sm-6 p-5 system_info_more">
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
                  <button id="system_hire_btn" type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
              </div>
        </div>
        <div className="container">
          <p className="text-center text-white h2 my-5">
            Check Our Other Services
          </p>
          <div className="row">
            <div className="col-sm-4 p-4 text-center">
              <img src={web1} alt="web" className="img-fluid service_thumbnails"  style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}/>
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/webtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={temp9} alt="web" className="img-fluid service_thumbnails"  style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}/>
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/androidtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={temp13} alt="web" className="img-fluid service_thumbnails"  style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}}/>
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
