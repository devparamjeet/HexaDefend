import React, { Component } from "react";
// import { Link } from "react-router-dom";
import logo from "../images/hexalogo2.png";
import web1 from "../images/services/temp6.png";
import temp9 from "../images/services/temp9.png";
import temp13 from "../images/services/temp13.png";
import system1 from "../images/services/system1.png";
// import Contact from "./Contact";
import './Testing.css'

export default class Testing extends Component {
  render() {
    return (
      <>
        <div className="container">
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
                  <span style={{color:"#fa0504"}}>Hexa</span> Defend
                </span>
              </p>
            </div>
          </div>
          <div className="row  py-5 web_test_container testing_flex_rev">
            <div className="col-sm-6 img_box web_img">
              <img
                src={web1}
                alt="Web-Application"
                className="img-fluid rounded rounded-2 imgs"
                style={{
                  width:"20vw",
                  border: "2px solid #fa0504",
                  boxShadow: "0px 0px 10px 2px #fa0504",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col-sm-6 py-5 testing_content_container">
              <p className="h4 p-5 testing_content_heading" style={{ color: "#fa0504" }}>
                WEB APPLICATION <br />
                PENETRATION TESTING
              </p>
              <p className="fs-6 px-5 text-muted testing_content">
                Web application penetration testing is a vital process to ensure
                the security of web-based applications. Our testing services
                simulate real-world attacks using manual and automated
                techniques, identifying vulnerabilities that could be exploited
                by cyber attackers. By conducting regular testing, we help our
                clients protect sensitive data and prevent costly data breaches.
                Contact us today to schedule your web application penetration
                testing and keep your business secure.
              </p>
              <div className=" text-center py-4 ms-5 d-flex justify-content-start">
                  <div className="w-25 p-2 text-center rounded-3 login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/webtesting'>Read More</a>
                  </div>
              </div>
            </div>
          </div>

          <div className="row py-5 testing_flex">
            <div className="col-sm-6 py-5 text-end testing_content_container">
              <p className="h4 p-5 testing_content_heading" style={{ color: "#fa0504" }}>
                ANDROID APPLICATION<br />
                PENETRATION TESTING
              </p>
              <p className="fs-6 px-5 text-muted testing_content">
                Android application penetration testing is a critical process
                for identifying vulnerabilities in mobile applications that
                could be exploited by cyber attackers. Our testing services use
                a range of manual and automated techniques to simulate
                real-world attacks and evaluate the security of your Android
                application. By identifying and addressing potential weaknesses
                before they can be exploited, we help ensure that your mobile
                applications are secure and protected against potential cyber
                threats. Contact us today to schedule your Android application
                penetration testing and keep your business and users safe.
              </p>
              <div className=" text-center py-4 me-5 d-flex justify-content-end">
                  <div className="w-25 p-2 text-center rounded-3 login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/androidtesting'>Read More</a>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 img_box">
              <img
                src={temp9}
                alt="Web-Application"
                className="img-fluid rounded rounded-2 imgs"
                style={{
                  width:"20vw",
                  border: "2px solid #fa0504",
                  boxShadow: "0px 0px 10px 2px #fa0504",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className="row  py-5 testing_flex_rev">
            <div className="col-sm-6 img_box">
              <img
                src={temp13}
                alt="Web-Application"
                className="img-fluid rounded rounded-2 imgs"
                style={{
                  width:"20vw",
                  border: "2px solid #fa0504",
                  boxShadow: "0px 0px 10px 2px #fa0504",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="col-sm-6 py-5 testing_content_container">
              <p className="h4 p-5 testing_content_heading" style={{ color: "#fa0504" }}>
                NETWORK <br />
                PENETRATION TESTING
              </p>
              <p className="fs-6 px-5 text-muted testing_content">
                Network penetration testing is a crucial step in identifying
                vulnerabilities in your organization's network infrastructure.
                Our testing services simulate real-world attacks to identify
                weaknesses in your network, including firewalls, routers, and
                other devices. Our experienced security professionals use manual
                and automated techniques to evaluate the security of your
                network and help you identify and address potential weaknesses
                before they can be exploited by attackers. Contact us today to
                schedule your network penetration testing and keep your business
                secure.
              </p>
              <div className=" text-center py-4 ms-5 d-flex justify-content-start">
                  <div className="w-25 p-2 text-center rounded-3 login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/networktesting'>Read More</a>
                  </div>
              </div>
            </div>
          </div>

          <div className="row py-5 testing_flex">
            <div className="col-sm-6 py-5 text-end testing_content_container">
              <p className="h4 p-5 testing_content_heading" style={{ color: "#fa0504" }}>
                SYSTEM <br />
                PENETRATION TESTING
              </p>
              <p className="fs-6 px-5 text-muted testing_content">
                System penetration testing is a thorough process to identify
                potential security risks in your organization's computer
                systems. Our testing services simulate real-world attacks to
                evaluate the security of your systems, including servers,
                workstations, and other devices. Our experienced security
                professionals use manual and automated techniques to identify
                potential vulnerabilities and provide actionable recommendations
                to address them. Regular system penetration testing helps
                protect your business against cyber threats and ensures your
                systems are secure. Contact us today to schedule your system
                penetration testing and keep your business safe.
              </p>
              <div className=" text-center py-4 me-5 d-flex justify-content-end">
                  <div className="w-25 p-2 text-center rounded-3 login_btn" style={{border:"2px solid #fc0404",color:"#fc0404", cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <a className='text-decoration-none' style={{color:"#fc0404"}}  href='/service/testing/systemtesting'>Read More</a>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 img_box">
              <img
                src={system1}
                alt="Web-Application"
                className="img-fluid rounded rounded-2 imgs"
                style={{
                  width:"20vw",
                  border: "2px solid #fa0504",
                  boxShadow: "0px 0px 10px 2px #fa0504",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          {/* <Contact /> */}
        </div>
      </>
    );
  }
}
