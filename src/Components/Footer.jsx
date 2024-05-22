import React, { Component } from 'react'
import twitter from '../images/icons/twitter.svg'
import facebook from '../images/icons/facebook.svg'
import instagram from '../images/icons/instagram.svg'
import linkedin from '../images/icons/linkedin.svg'
import youtube from '../images/icons/youtube.svg'
import telegram from '../images/icons/telegram.svg'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row pt-5">
                        <div className="col-sm-12">

                            <footer id="footer">
                                <div className="footer-top">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-3 col-md-6">

                                                <div className="footer-info">
                                                    <h4>Hexa Defend</h4>

                                                    <p>
                                                        India, Bhopal ,482002 <br /><br />
                                                        <strong>Phone:</strong> +91 9874563210<br />
                                                        <strong>Email:</strong> contact@gravitycoding.com<br />
                                                    </p>
                                                    <div className="social-links mt-3">
                                                        <a href="https://twitter.com/gravitycoding/" target="_blank" rel="noreferrer" className="twitter ">
                                                            <img src={twitter} alt="twitter" className='img-fluid' />
                                                        </a>
                                                        <a href="https://www.facebook.com/gravitycoding/" target="_blank" rel="noreferrer" className="facebook">
                                                            <img src={facebook} alt="facebook" className='img-fluid' />
                                                        </a>
                                                        <a href="https://www.instagram.com/gravity.coding/" target="_blank" rel="noreferrer" className="instagram">
                                                            <img src={instagram} alt="instagram" className='img-fluid' />
                                                        </a>
                                                        <a href="https://www.linkedin.com/company/gravitycoding/" target="_blank" rel="noreferrer" className="github">
                                                            <img src={linkedin} alt="linkedin" className='img-fluid' />
                                                        </a>
                                                        <a href="https://www.youtube.com/@gravitycoding">
                                                            <img src={youtube} alt="linkedin" className='img-fluid' />
                                                        </a>
                                                        <a href="https://t.me/gravitycoding">
                                                            <img src={telegram} alt="linkedin" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 footer-links">
                                                <h4>Useful Links</h4>
                                                <ul>
                                                    <li><i className="bx bx-chevron-right"></i><a className="nav-link" href="/">Home</a></li>
                                                    <li><i className="bx bx-chevron-right"></i><a className="nav-link scrollto" href="/about">About</a></li>
                                                    <li><i className="bx bx-chevron-right"></i><a className="nav-link scrollto" href="/terms">Terms & Conditions</a></li>
                                                    <li><i className="bx bx-chevron-right"></i><a className="nav-link scrollto" href="/privacy">Privacy</a></li>
                                                    <li><i className="bx bx-chevron-right"></i><a className="nav-link scrollto" href="/refundPolicy">Refund & Cancellation Policy</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 col-md-6 footer-links">
                                                <h4>Services</h4>
                                                <ul>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="/service">Testing Services</a></li>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="/service">Bootcamp</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                                <h4>Our Newsletter</h4>
                                                <p>Subscribe to our Newsletter for our Weekly Update and be the first to know about our Special Offers and Promotions</p>
                                                <form action="" method="" onSubmit={(e) => { this.handleNewsLetter(e) }}>
                                                    <input type="email" id='email' name="email" placeholder='Your E-mail Here' className='form-control' style={{ border: "none", color: "#fc0404" }} />
                                                    <input type="submit" value="Subscribe" style={{ background: "#fc0404", color: "#fff" }} />
                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="copyright">
                                        &copy; Copyright <strong></strong>. All Rights Reserved
                                    </div>
                                    <div className="credits">
                                        Designed by GravityCoding
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    handleNewsLetter = (e) => {
        alert("Thank You !")
        e.preventDefault();
    }
}
