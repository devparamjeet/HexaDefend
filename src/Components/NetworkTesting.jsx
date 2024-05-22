import React, { Component } from "react";
import logo from "../images/hexalogo2.png";
import Contact from "./Contact";
import system1 from "../images/services/system1.png";
import temp9 from "../images/services/temp9.png";
import web1 from "../images/services/temp6.png";
import networkimg from "../images/services/temp13.png";
// import { Link } from "react-router-dom";
import './NetworkTesting.css'

export default class NetworkTesting extends Component {
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
              <div id="network_head">
                <div id="network_head_content">
                  <h1><span className="network_text_highlight" >Hire Us</span> <br /> For network <br />Penetration  Testing </h1>
                  <button type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
                <div id="network_head_img">
                  <img id="network_image" src={networkimg} alt="" />
                </div>
              </div>
              <p
                className="fs-1 pt-3 text-center"
                style={{ fontStyle: "bold" }}
              >
                <span className="text-light">Network Penetration Testing</span>
              </p>
              <p className="text-muted fs-5 py-2 pb-4 service_contents">
                In today's world, where everything is connected, cybersecurity
                has become more critical than ever before. Hackers and
                cybercriminals are always looking for ways to exploit
                vulnerabilities in networks to gain unauthorized access to
                sensitive information. This is where network penetration testing
                services come in.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Network penetration testing is a method used to evaluate the
                security of a network by simulating an attack by a hacker. It
                involves a series of tests that identify vulnerabilities in the
                network infrastructure, applications, and systems. These tests
                help to uncover weaknesses and provide insights into potential
                security breaches, allowing companies to take proactive measures
                to secure their networks.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                One of the primary benefits of network penetration testing is
                that it helps companies identify vulnerabilities before they can
                be exploited by attackers. This allows them to take the
                necessary steps to fix these issues and ensure the security of
                their networks. It also helps companies comply with industry
                regulations and standards, such as HIPAA and PCI DSS, which
                require regular security assessments.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Another significant advantage of network penetration testing
                services is that they provide companies with a detailed report
                of the vulnerabilities identified during the testing process.
                This report includes recommendations for remediation and
                prioritization of identified vulnerabilities, giving companies a
                clear roadmap for improving their security posture.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                Network penetration testing services can also help companies
                save money by identifying potential security breaches before
                they occur. The cost of a security breach can be significant,
                including lost revenue, legal fees, and damage to the company's
                reputation. By identifying and addressing vulnerabilities
                proactively, companies can prevent these costs from occurring.
              </p>
              <p className="text-muted fs-5 py-2 service_contents">
                In conclusion, network penetration testing services are critical
                to ensuring the security of networks in today's connected world.
                They help companies identify vulnerabilities, comply with
                regulations, and save money by preventing security breaches. If
                you are responsible for the security of your company's network,
                consider investing in network penetration testing services to
                protect your company's sensitive information and assets.
              </p>
            </div>
          </div>
          <div className="row network_info_container">
            <div className="col-sm-4 p-5 response_row1">
              <p className="fs-4 text-start" style={{ fontStyle: "bold" }}>
                <span className="text-light">
                  Some Network Attacks a Bad actor can perform
                </span>
              </p>
              <p className="text-muted fs-6 py-2">
                <ul>
                  <li>Distributed Denial of Service (DDoS)</li>
                  <li>Man-in-the-Middle (MitM)</li>
                  <li>Phishing attack and social engineering</li>
                  <li>ARP spoofing</li>
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
                  <li>Planning</li>
                  <li>Reconnaissance</li>
                  <li>Vulnerability assessment</li>
                  <li>Exploitation</li>
                  <li>Reporting</li>
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
                <div className="col-sm-6 p-4 network_info_more">
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

                <div className="col-sm-6 p-4 network_info_more">
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
                  <button id="network_hire_btn" type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
                </div>
              </div>
        </div>
        <div className="container">
          <p className="text-center text-white h2 my-5">
            Check Our Other Services
          </p>
          <div className="row">
            <div className="col-sm-4 p-4 text-center">
              <img src={system1} alt="web" className="img-fluid service_thumbnails" style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}} />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/systemtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={temp9} alt="web" className="img-fluid service_thumbnails" style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}} />
              <div className="text-center py-4 d-flex justify-content-center ">
                      <div className="w-25 p-2 text-center rounded-3 read_more login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/androidtesting'>Read Now</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4 text-center">
              <img src={web1} alt="web" className="img-fluid service_thumbnails" style={{border:"2px solid #fc0404",borderRadius:"10px",boxShadow:"0 0 15px #fc0404"}} />
              <div className="text-center py-4 d-flex justify-content-center ">
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
