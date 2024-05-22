import React, { Component } from 'react'
import expierence from '../images/expierence.jpg'
import logo from '../images/hexalogo2.png'
import './Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 mx-auto">
                                    <p className='text-center fs-1 text-light'>
                                        <img src={logo} alt="Hexa Defend" style={{ width: "4vw" }} className='img-fluid logo-hexa' />
                                        <span className='text-light fs-2'><span className='text-warning' style={{color:"fc0404"}}>Hexa</span> Defend</span>
                                    </p>
                                </div>
                            </div>
                            <p className='main_img_container'>
                                <img src={expierence} alt="expierence" className='img-fluid rounded rounded-2 experience_img' style={{ border: "2px solid #fc0404", boxShadow: "0px 0px 10px 2px #fc0404", cursor: "pointer" }} />
                            </p>
                            <p className='fs-1 pt-3' style={{ fontStyle: "italic" }}>
                                <span className='text-light'>Experience <span style={{ color: "#fc0404" }}>------------------</span></span>
                            </p>
                            <p className='text-muted fs-5 py-2 experience_text'>
                                Cybersecurity has become an essential component in today's digital world. With the increased use of technology, there has been a rise in cyber threats, making it crucial for companies to invest in cybersecurity measures. At Hexa Defend, we take cybersecurity seriously and have a team of experts with a vast knowledge of web application testing, network testing, system testing, android application testing, windows active directory testing, and much more.
                            </p>
                            <p className='text-muted fs-5 py-2 experience_text'>
                                Our team of experts has a passion for cybersecurity and is always looking to stay ahead of the curve when it comes to industry standards. We are well-versed in standards like CVSS (Common Vulnerability Scoring System), CVE (Common Vulnerabilities and Exposures), and other relevant frameworks that help us assess and mitigate potential cyber risks.
                            </p>
                            <p className='text-muted fs-5 py-2 experience_text'>
                                We take pride in our ability to deliver exceptional services to both national and international clients. Our team is well-equipped to tackle any cybersecurity challenge and is always ready to provide the best solutions to our clients. Our primary goal is to provide our clients with a secure digital environment, and we ensure that we exceed their expectations every time.
                            </p>
                            <p className='text-muted fs-5 py-2 experience_text'>
                                Apart from providing cybersecurity services, we also organise cyber security awareness bootcamps. We believe that cybersecurity is not just about technology, but it also requires awareness and education. Our bootcamps aim to educate people on the importance of cybersecurity and the measures they can take to protect themselves and their organisations from potential cyber threats.
                            </p>
                            <p className='text-muted fs-5 py-2 experience_text'>
                                At Hexa Defend, we are passionate about cybersecurity, and we are committed to providing our clients with the best services possible. Our team of experts is always ready to tackle any cybersecurity challenge, and we strive to ensure that our clients feel safe and secure in the digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
