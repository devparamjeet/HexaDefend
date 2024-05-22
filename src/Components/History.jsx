import React, { Component } from 'react'
import logo from '../images/hexalogo2.png'
import history from '../images/history.jpg'
import './History.css'

export default class History extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 mx-auto">
                                    <p className='text-center fs-1 text-light'>
                                        <img src={logo} alt="Hexa Defend" style={{width:"4vw"}} className='img-fluid logo-hexa' />
                                    <span className='text-light fs-2'><span className='text-warning' style={{color: "#fc0404"}}>Hexa</span> Defend</span>
                                    </p>
                                </div>
                            </div>
                            <p className='main_img_container'>
                                <img src={history} alt="History" className='img-fluid rounded rounded-2 history_img' style={{ border: "2px solid #fc0404", boxShadow: "0px 0px 10px 2px #fc0404", cursor: "pointer" }}/>
                            </p>
                            <p className='fs-1 pt-3' style={{fontStyle:"italic"}}>
                                <span className='text-light'>History <span style={{color:"#fc0404"}}>------------------</span></span>
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                Hexa Defend: Your Trusted Cybersecurity Partner
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                In today's world, cybersecurity is a major concern for businesses and individuals alike. The risk of cyber attacks is on the rise, and the consequences of a successful attack can be devastating. That's where Hexa Defend comes in - a cybersecurity testing company founded in mid-2022, providing comprehensive and reliable penetration testing services to both national and international clients.
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                Based in Narnaul, Haryana, India, Hexa Defend was founded by one person who built a team of experts at the start to work on this company. Our founder recognized the need for innovative cybersecurity solutions for businesses and individuals around the world, leading to the development of a team of cybersecurity experts with extensive knowledge and experience in the field. Our team is dedicated to staying at the forefront of the industry, constantly developing and implementing innovative penetration testing techniques to help clients identify vulnerabilities in their systems and networks.
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                At Hexa Defend, we take a customized approach to each client, tailoring our solutions to meet their specific needs and requirements. Our services are available to clients around the world, and we have a team of dedicated professionals ready to assist with any cybersecurity challenge, no matter where the client is based.
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                We understand that cybersecurity is a serious matter and that every organization has different needs. That's why we offer a range of cybersecurity services, from vulnerability assessment to penetration testing, to help our clients protect themselves from cyber threats. Our commitment to excellence has earned us a reputation as a trusted and reliable partner in the cybersecurity industry.
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                At Hexa Defend, we believe that everyone should have access to top-quality cybersecurity solutions, regardless of their location or budget. That's why we offer our services to clients around the globe at competitive rates. We understand that cybersecurity can be a complex and overwhelming topic, which is why we take the time to explain our services and processes to our clients in a clear and concise manner.
                            </p>
                            <p className='text-muted fs-5 py-2 history_text'>
                                In conclusion, if you're looking for a reliable cybersecurity partner, look no further than Hexa Defend. With our team of experts, customized solutions, and dedication to excellence, we're confident that we can help you protect yourself from cyber threats and ensure the security of your digital assets. Contact us today to learn more about our services and how we can help you stay secure in today's digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
