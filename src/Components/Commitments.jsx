import React, { Component } from 'react'
import logo from '../images/hexalogo2.png'
import commit from '../images/commit.jpg'
import './Commitments.css'

export default class Commitments extends Component {
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
                                <img src={commit} alt="commit" className='img-fluid rounded rounded-2 commitments_img' style={{ border: "2px solid #fc0404", boxShadow: "0px 0px 10px 2px #fc0404", cursor: "pointer" }} />
                            </p>
                            <p className='fs-1 pt-3' style={{ fontStyle: "italic" }}>
                                <span className='text-light'>Commitments <span style={{ color: "#fc0404" }}>------------------</span></span>
                            </p>
                            <p className='text-muted fs-5 py-2 pb-4 commitments_text'>
                                At Hexa Defend, we believe that cybersecurity is not just about identifying and mitigating risks; it's about building trust and long-lasting relationships with our clients. We are committed to providing the highest quality cybersecurity testing services and exceeding our clients' expectations. Our commitment to excellence is reflected in the following:
                            </p>
                            <p className='text-white fs-4 py-2 fw-bold commitments_text_heading'>
                                Continuous Learning
                            </p>
                            <p className='text-muted fs-5 py-2 commitments_text'>
                                We are committed to staying ahead of the curve by continuously learning and developing our skills and knowledge. We believe that by staying up-to-date with the latest technologies and trends, we can provide our clients with the most effective cybersecurity solutions.
                            </p>
                            <p className='text-white fs-4 py-2 fw-bold commitments_text_heading'>
                                Customer Satisfaction
                            </p>
                            <p className='text-muted fs-5 py-2 commitments_text'>
                                We are committed to building trust and long-lasting relationships with our clients. We understand that our clients' success is our success, and we are committed to delivering high-quality services and exceeding their expectations.
                            </p>
                            <p className='text-white fs-4 py-2 fw-bold commitments_text_heading'>
                                Proactive Measures
                            </p>
                            <p className='text-muted fs-5 py-2 commitments_text'>
                                We are committed to taking proactive measures to identify and mitigate potential cyber risks. We use regular security assessments, vulnerability scans, and penetration testing to identify vulnerabilities and weaknesses before they can be exploited by hackers.
                            </p>
                            <p className='text-white fs-4 py-2 fw-bold commitments_text_heading'>
                                Industry Standards
                            </p>
                            <p className='text-muted fs-5 py-2 commitments_text'>
                                We are committed to staying up-to-date with industry standards and frameworks, such as CVSS (Common Vulnerability Scoring System) and CVE (Common Vulnerabilities and Exposures), to ensure that our services meet the highest standards.
                            </p>
                            <p className='text-white fs-4 py-2 fw-bold commitments_text_heading'>
                                Cybersecurity Awareness
                            </p>
                            <p className='text-muted fs-5 py-2 commitments_text'>
                                We are committed to raising awareness about cybersecurity and the measures people can take to protect themselves and their organisations. We organise cyber security awareness bootcamps, workshops, and training sessions for employees, clients, and the public.
                                <br /><br />
                                At Hexa Defend, we are committed to providing the highest quality cybersecurity testing services and building long-lasting relationships with our clients. We are passionate about what we do, and we are dedicated to helping our clients stay safe and secure in the ever-changing digital landscape.
                            </p>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
