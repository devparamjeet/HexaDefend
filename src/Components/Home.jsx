import React, { Component } from 'react'
import About from './About'
import cloud from '../images/system.png'
import android from '../images/android.png'
import network from '../images/network.png'
import window from '../images/window.png'
// import Contact from './Contact'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-sm-11 mx-auto text-center">
                            <p className='fw-bold text-white pt-5 home_heading' style={{ fontSize: "3em", letterSpacing: "1px" }}>
                                Safe Guard Your <br />Future With <br />
                                <span style={{color:"#FC0404"}}>Hexa</span> Defend
                            </p>
                            <p className='fw-bold text-muted' style={{ fontSize: "1.2em", letterSpacing: "1px" }}>
                                We are a team of Professional Penetration Testers
                            </p>
                            <div className="row text-white d-flex justify-content-center" style={{ minHeight: "35vh" }}>

                                <div className="col-sm-2 m-4 service_container" style={{ border: "1px solid white", borderRadius: "5px" }}>
                                    <div className='px-4 pt-4'>
                                        <img src={window} className="img-fluid service_img" style={{ width: "3.8vw" }} alt="cloud" />
                                    </div>
                                    <div className='fs-4 service_title pt-4'>
                                        Web <br />Application <br />Pentesting
                                    </div>
                                </div>
                                <div className="col-sm-2 m-4 service_container" style={{ border: "1px solid white", borderRadius: "5px" }}>
                                    <div className='px-4 pt-4'>
                                        <img src={android} className="img-fluid service_img" alt="cloud" style={{ width: "3vw" }} />
                                    </div>
                                    <div className='fs-4 service_title pt-4'>
                                        Android <br />Application <br />Pentesting
                                    </div>
                                </div>
                                <div className="col-sm-2 m-4 service_container" style={{ border: "1px solid white", borderRadius: "5px" }}>
                                    <div className='px-4 pt-4'>
                                        <img src={cloud} className="img-fluid service_img" alt="cloud" style={{ width: "4.5vw" }} />
                                    </div>
                                    <div className='fs-4 service_title pt-4'>
                                        System <br />Penetration <br />Testing
                                    </div>
                                </div>
                                <div className="col-sm-2 m-4 service_container network_container" style={{ border: "1px solid white", borderRadius: "5px" }}>
                                    <div className='px-4 pt-4'>
                                        <img src={network} className="img-fluid service_img" alt="cloud" style={{ width: "4vw" }} />
                                    </div>
                                    <div className='fs-4 service_title pt-4'>
                                        Network <br />Penetration <br />Testing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <About/>
                <br /><br />
                {/* <Contact/> */}
            </>
        )
    }
}
