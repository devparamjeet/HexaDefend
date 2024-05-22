import React, { Component } from "react";
import "./Bootcamp.css";
import goodies_img from '../images/bootcamp/Black Blue Modern Cybersecurity Instagram Post .png';
import sticker_img from '../images/bootcamp/IMG-20230716-WA0002.jpg'


export default class Bootcamp extends Component {
  render() {
    return (
      <div className="bootcamp-main">
        <div id="bootcamp_head">
        <div id="bootcamp_head_content_container">
            <div id="bootcamp_head_content">
                <h1><span className="boot_highlight_text">Hire Us</span> <br/>For Cyber Security <br/>Awareness Bootcamp</h1>
                <h2>Both Online <span className="boot_highlight_text">&</span> Offline Available</h2>
                <button id="bootcamp_hire_btn" type="button"><a href="/Contact" style={{textDecoration:"none",color:"#fff"}}>Buy Now</a></button>
            </div>
        </div>
        <div id="bootcamp_head_img"></div>
    </div>
    <div id="bootcamp_main">
        <div id="bootcamp_online_container">
            <h1 className="boot_highlight_text detail_heading ">Online Bootcamp Details</h1>
            <p className="boot_details" >HexaDefend takes cybersecurity education to the digital realm, offering online bootcamps accessible to everyone. Some Unique Details About Our Online Bootcamp :-
            </p>
            <ul className="boot_details_lists" >
                <li>Affordable for everyone</li>
                <li>Language - English and Hindi (Depend on Region)</li>
                <li>Institute, Universities, Organisation or Even 10+ member group of students can hire us</li>
                <li>Syllabus is Customizable</li>
                <li>E-certificate for all participants and swag for Hackathon winner</li>
            </ul>
            <p className="boot_details" >Our online bootcamps are tailored to address the cybersecurity needs of individuals of all ages. Student who are seeking for guidance for Ethical Hacking can join our bootcamp for proper guidance. Contact Us for more details related to pricing and timing. We are open to discussing various options and finding a mutually beneficial solution that addresses both parties' needs and interests.</p>
            <a href="/contact" className="boot_more_btn" >Buy Now</a>
        </div>
        <div id="bootcamp_offline_container">
            <h1 className="boot_highlight_text detail_heading ">Offline Bootcamp Details</h1>
            <p className="boot_details" >Hexa Defend team is also available for offline Bootcamp. Organisation, Institute, Universities can hire us for Offline Bootcamp. Some Important Details for Offline Bootcamp are as follows :-
            </p>
            <ul className="boot_details_lists" >
                <li>Affordable Pricing</li>
                <li>2 Day Bootcamp Duration</li>
                <li>Customizable Syllabus</li>
                <li>Beneficial For Every Age Individual (Doesn't matter their work area)</li>
                <li>E-certificate for everyone & Swag for Hackathon Winner</li>
                <li>Future Opportunities</li>
                <li>Complete Interactive Session</li>
            </ul>
            <p className="boot_details" >HexaDefend is committed to providing comprehensive cybersecurity Offline Bootcamp: Engaging Universities, Organizations, and Public Events education to individuals of all ages. We aim to empower participants with the knowledge, skills, and recognition they need to navigate the digital world securely. Contact Us for more details related to pricing and timing. We are open to discussing various options and finding a mutually beneficial solution that addresses both parties' needs and interests.</p>
            <a href="/contact" className="boot_more_btn" >Buy Now</a>
        </div>
    </div>
    <div id="bootcamp_goodies">
        <h1 id="goodies_heading">Online <span className="boot_highlight_text">&</span> Offline Bootcamp Goodies </h1>
        <div id="goodies_container">
            <div className="goodies" id="boot_stickers">
                <img className="goodies_img" src={sticker_img} alt="sticker_img"/>
                <h2 className="goodie_name" >Stickers Pack x 2</h2>
                <h3 className="goodie_description">Cool Looking Hacker Design Sticker Pack</h3>
            </div>
            <div className="goodies" id="boot_tshirts">
                <img className="goodies_img" src={goodies_img} alt="goodies_img"/>
                <h2 className="goodie_name" >T-shirt x 1</h2>
                <h3 className="goodie_description">Hacker Design Cool T-shirts</h3>
            </div>
            <div className="goodies" id="boot_certificates">
                {/* <!-- <img className="goodies_img" src="images/certificate template.png" alt=""/> --> */}
                <div id="certificate_image_container">
                    <div id="certificate_img"></div>
                </div>
                <h2 className="goodie_name" >E-Certificate</h2>
                <h3 className="goodie_description">E-certificate That Shoe Your Knowladge In Cyber Security</h3>
            </div>
        </div>
    </div>
      </div>
    );
  }
}
