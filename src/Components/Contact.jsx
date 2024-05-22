import React, { Component } from "react";
import location1 from "../images/location.png";
import mail from "../images/mail.png";
import call from "../images/call.png";
import "./Contact.css";
// import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country_code: "",
      contact: "",
      email: "",
      message: "",
    };
  }

  handleForm = () => {

    if (this.validateName() && this.validateName1() && this.validatePhoneNumber() && this.validateEmail()) {
      if (this.state.name !== "" && this.state.contact !== "" && this.state.email !== "" && this.state.country_code !== "" && this.state.message !== "") {
        let data = {
          name: this.state.name,
          country_code: this.state.country_code,
          phone_no: this.state.contact,
          email: this.state.email,
          message: this.state.message
        };


        fetch('./contact_form.php', {
          method: "POST",
          body: new URLSearchParams(data),
        })
          .then((response) => {
            
            if (response.ok) {
              alert("Form Submitted, Our Team will contact you soon !!")
              this.setState({
                name: "",
                email: "",
                country_code: "",
                contact: "",
                message: "",
              })
            }
            else {
              alert("Something went Wrong || Try Again")
            }

          })
          .then((data) => {

          })
          .catch((error) => {

          });
      }
      else {
        alert("All Fields are Mandatory")
      }
    }
    else {
    }
  }

  validateName = () => {
    var name = document.getElementById("username").value;
    var regex = /^[a-zA-Z]+$/;

    if (regex.test(name)) {
      return true;
    } else {
      alert("Invalid name. Please enter only letters.");
    }
  }

  validateName1 = () => {
    var name = document.getElementById("username");
    var nameValue = name.value.trim();

    if (nameValue.length < 2 || nameValue.length > 20) {
      alert("Name must be between 2 and 20 characters.");
    } else {
      return true;
    }
  }

  validatePhoneNumber = () => {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var regex = /^\d{10}$/;

    if (regex.test(phoneNumber)) {
      return true
    } else {
      alert("Invalid phone number. Please enter a 10-digit number.");
    }
  }

  validateEmail = () => {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      return true
    } else {
      alert("Invalid email address. Please enter a valid email address.");
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* <!-- Start form --> */}
              <div className="row">
                <div className="col-sm-6 mx-auto mt-3 text-center">
                  <u className=" d-block" style={{ color: "#FC0404" }}>
                    <span className="fs-3 text-light">
                      Contact <span style={{ color: "#FC0404" }}>With Us</span>
                    </span>
                  </u>
                  <p
                    className="fs-6 text-light"
                    style={{ letterSpacing: "1px" }}
                  >
                    Protect your business and ensure its security by taking
                    advantage of our professional penetration testing services.
                    Contact us today to schedule a consultation and learn more
                    about how we can help identify and address potential
                    vulnerabilities in your systems.
                  </p>
                </div>
              </div>
              <div className="container border border-rounder-2 mb-5">
                <div className="row m-3">
                  <div className="col-sm-8 p-2 pt-3 client_info">
                    <form action="" method="post" autoComplete="off">
                      <p className="h5 text-light">
                        <u style={{ color: "#FC0404" }}>
                          <span className="text-light">Send</span>
                        </u>{" "}
                        Your Message
                      </p>
                      <div className="row mb-3 text-muted client_info_basic">
                        <div className="col-sm-5">
                          Your Name:
                          <input
                            type="text"
                            className="form-control bg-transparent "
                            required
                            id="username"
                            value={this.state.name}
                            onChange={(event) => {
                              this.setState({ name: event.target.value });
                            }}
                            style={{ letterSpacing: "1px", color: "#fc0404" }}
                            placeholder=" Enter Your Name*"
                          />
                        </div>
                        <div className="col-sm-3">
                          Country Code:
                          <select id="countryCode"
                            className="form-control bg-transparent "
                            required
                            value={this.state.country_code}
                            onChange={(event) => {
                              this.setState({ country_code: event.target.value });
                            }}
                            style={{ letterSpacing: "1px", color: "#fc0404" }}
                          >
                            <option value=""></option>
                            <option value="93">Afghanistan (+93)</option>
                            <option value="355">Albania (+355)</option>
                            <option value="213">Algeria (+213)</option>
                            <option value="1-684">American Samoa (+1-684)</option>
                            <option value="376">Andorra (+376)</option>
                            <option value="244">Angola (+244)</option>
                            <option value="1-264">Anguilla (+1-264)</option>
                            <option value="672">Antarctica (+672)</option>
                            <option value="1-268">Antigua and Barbuda (+1-268)</option>
                            <option value="54">Argentina (+54)</option>
                            <option value="374">Armenia (+374)</option>
                            <option value="297">Aruba (+297)</option>
                            <option value="61">Australia (+61)</option>
                            <option value="43">Austria (+43)</option>
                            <option value="994">Azerbaijan (+994)</option>
                            <option value="1-242">Bahamas (+1-242)</option>
                            <option value="973">Bahrain (+973)</option>
                            <option value="880">Bangladesh (+880)</option>
                            <option value="1-246">Barbados (+1-246)</option>
                            <option value="375">Belarus (+375)</option>
                            <option value="32">Belgium (+32)</option>
                            <option value="501">Belize (+501)</option>
                            <option value="229">Benin (+229)</option>
                            <option value="1-441">Bermuda (+1-441)</option>
                            <option value="975">Bhutan (+975)</option>
                            <option value="591">Bolivia (+591)</option>
                            <option value="387">Bosnia and Herzegovina (+387)</option>
                            <option value="267">Botswana (+267)</option>
                            <option value="55">Brazil (+55)</option>
                            <option value="1-284">British Indian Ocean Territory (+1-284)</option>
                            <option value="1-284">British Virgin Islands (+1-284)</option>
                            <option value="673">Brunei (+673)</option>
                            <option value="359">Bulgaria (+359)</option>
                            <option value="226">Burkina Faso (+226)</option>
                            <option value="257">Burundi (+257)</option>
                            <option value="855">Cambodia (+855)</option>
                            <option value="237">Cameroon (+237)</option>
                            <option value="1">Canada (+1)</option>
                            <option value="238">Cape Verde (+238)</option>
                            <option value="1-345">Cayman Islands (+1-345)</option>
                            <option value="236">Central African Republic (+236)</option>
                            <option value="235">Chad (+235)</option>
                            <option value="56">Chile (+56)</option>
                            <option value="86">China (+86)</option>
                            <option value="61">Christmas Island (+61)</option>
                            <option value="61">Cocos Islands (+61)</option>
                            <option value="57">Colombia (+57)</option>
                            <option value="269">Comoros (+269)</option>
                            <option value="682">Cook Islands (+682)</option>
                            <option value="506">Costa Rica (+506)</option>
                            <option value="385">Croatia (+385)</option>
                            <option value="53">Cuba (+53)</option>
                            <option value="599">Curacao (+599)</option>
                            <option value="357">Cyprus (+357)</option>
                            <option value="420">Czech Republic (+420)</option>
                            <option value="243">Democratic Republic of the Congo (+243)</option>
                            <option value="45">Denmark (+45)</option>
                            <option value="253">Djibouti (+253)</option>
                            <option value="1-767">Dominica (+1-767)</option>
                            <option value="1-809">Dominican Republic (+1-809)</option>
                            <option value="1-829">Dominican Republic (+1-829)</option>
                            <option value="1-849">Dominican Republic (+1-849)</option>
                            <option value="670">East Timor (+670)</option>
                            <option value="593">Ecuador (+593)</option>
                            <option value="20">Egypt (+20)</option>
                            <option value="503">El Salvador (+503)</option>
                            <option value="240">Equatorial Guinea (+240)</option>
                            <option value="291">Eritrea (+291)</option>
                            <option value="372">Estonia (+372)</option>
                            <option value="251">Ethiopia (+251)</option>
                            <option value="500">Falkland Islands (+500)</option>
                            <option value="298">Faroe Islands (+298)</option>
                            <option value="679">Fiji (+679)</option>
                            <option value="358">Finland (+358)</option>
                            <option value="33">France (+33)</option>
                            <option value="689">French Polynesia (+689)</option>
                            <option value="241">Gabon (+241)</option>
                            <option value="220">Gambia (+220)</option>
                            <option value="995">Georgia (+995)</option>
                            <option value="49">Germany (+49)</option>
                            <option value="233">Ghana (+233)</option>
                            <option value="350">Gibraltar (+350)</option>
                            <option value="30">Greece (+30)</option>
                            <option value="299">Greenland (+299)</option>
                            <option value="1-473">Grenada (+1-473)</option>
                            <option value="1-671">Guam (+1-671)</option>
                            <option value="502">Guatemala (+502)</option>
                            <option value="44-1481">Guernsey (+44-1481)</option>
                            <option value="224">Guinea (+224)</option>
                            <option value="245">Guinea-Bissau (+245)</option>
                            <option value="592">Guyana (+592)</option>
                            <option value="509">Haiti (+509)</option>
                            <option value="504">Honduras (+504)</option>
                            <option value="852">Hong Kong (+852)</option>
                            <option value="36">Hungary (+36)</option>
                            <option value="354">Iceland (+354)</option>
                            <option value="91">India (+91)</option>
                            <option value="62">Indonesia (+62)</option>
                            <option value="98">Iran (+98)</option>
                            <option value="964">Iraq (+964)</option>
                            <option value="353">Ireland (+353)</option>
                            <option value="44-1624">Isle of Man (+44-1624)</option>
                            <option value="972">Israel (+972)</option>
                            <option value="39">Italy (+39)</option>
                            <option value="225">Ivory Coast (+225)</option>
                            <option value="1-876">Jamaica (+1-876)</option>
                            <option value="81">Japan (+81)</option>
                            <option value="44-1534">Jersey (+44-1534)</option>
                            <option value="962">Jordan (+962)</option>
                            <option value="7">Kazakhstan (+7)</option>
                            <option value="254">Kenya (+254)</option>
                            <option value="686">Kiribati (+686)</option>
                            <option value="383">Kosovo (+383)</option>
                            <option value="965">Kuwait (+965)</option>
                            <option value="996">Kyrgyzstan (+996)</option>
                            <option value="856">Laos (+856)</option>
                            <option value="371">Latvia (+371)</option>
                            <option value="961">Lebanon (+961)</option>
                            <option value="266">Lesotho (+266)</option>
                            <option value="231">Liberia (+231)</option>
                            <option value="218">Libya (+218)</option>
                            <option value="423">Liechtenstein (+423)</option>
                            <option value="370">Lithuania (+370)</option>
                            <option value="352">Luxembourg (+352)</option>
                            <option value="853">Macau (+853)</option>
                            <option value="389">Macedonia (+389)</option>
                            <option value="261">Madagascar (+261)</option>
                            <option value="265">Malawi (+265)</option>
                            <option value="60">Malaysia (+60)</option>
                            <option value="960">Maldives (+960)</option>
                            <option value="223">Mali (+223)</option>
                            <option value="356">Malta (+356)</option>
                            <option value="692">Marshall Islands (+692)</option>
                            <option value="222">Mauritania (+222)</option>
                            <option value="230">Mauritius (+230)</option>
                            <option value="262">Mayotte (+262)</option>
                            <option value="52">Mexico (+52)</option>
                            <option value="691">Micronesia (+691)</option>
                            <option value="373">Moldova (+373)</option>
                            <option value="377">Monaco (+377)</option>
                            <option value="976">Mongolia (+976)</option>
                            <option value="382">Montenegro (+382)</option>
                            <option value="1-664">Montserrat (+1-664)</option>
                            <option value="212">Morocco (+212)</option>
                            <option value="258">Mozambique (+258)</option>
                            <option value="95">Myanmar (+95)</option>
                            <option value="264">Namibia (+264)</option>
                            <option value="674">Nauru (+674)</option>
                            <option value="977">Nepal (+977)</option>
                            <option value="31">Netherlands (+31)</option>
                            <option value="687">New Caledonia (+687)</option>
                            <option value="64">New Zealand (+64)</option>
                            <option value="505">Nicaragua (+505)</option>
                            <option value="227">Niger (+227)</option>
                            <option value="234">Nigeria (+234)</option>
                            <option value="683">Niue (+683)</option>
                            <option value="672">Norfolk Island (+672)</option>
                            <option value="850">North Korea (+850)</option>
                            <option value="1-670">Northern Mariana Islands (+1-670)</option>
                            <option value="47">Norway (+47)</option>
                            <option value="968">Oman (+968)</option>
                            <option value="92">Pakistan (+92)</option>
                            <option value="680">Palau (+680)</option>
                            <option value="970">Palestine (+970)</option>
                            <option value="507">Panama (+507)</option>
                            <option value="675">Papua New Guinea (+675)</option>
                            <option value="595">Paraguay (+595)</option>
                            <option value="51">Peru (+51)</option>
                            <option value="63">Philippines (+63)</option>
                            <option value="870">Pitcairn (+870)</option>
                            <option value="48">Poland (+48)</option>
                            <option value="351">Portugal (+351)</option>
                            <option value="1-787">Puerto Rico (+1-787)</option>
                            <option value="1-939">Puerto Rico (+1-939)</option>
                            <option value="974">Qatar (+974)</option>
                            <option value="242">Republic of the Congo (+242)</option>
                            <option value="262">Reunion (+262)</option>
                            <option value="40">Romania (+40)</option>
                            <option value="7">Russia (+7)</option>
                            <option value="250">Rwanda (+250)</option>
                            <option value="590">Saint Barthelemy (+590)</option>
                            <option value="290">Saint Helena (+290)</option>
                            <option value="1-869">Saint Kitts and Nevis (+1-869)</option>
                            <option value="1-758">Saint Lucia (+1-758)</option>
                            <option value="590">Saint Martin (+590)</option>
                            <option value="508">Saint Pierre and Miquelon (+508)</option>
                            <option value="1-784">Saint Vincent and the Grenadines (+1-784)</option>
                            <option value="685">Samoa (+685)</option>
                            <option value="378">San Marino (+378)</option>
                            <option value="239">Sao Tome and Principe (+239)</option>
                            <option value="966">Saudi Arabia (+966)</option>
                            <option value="221">Senegal (+221)</option>
                            <option value="381">Serbia (+381)</option>
                            <option value="248">Seychelles (+248)</option>
                            <option value="232">Sierra Leone (+232)</option>
                            <option value="65">Singapore (+65)</option>
                            <option value="1-721">Sint Maarten (+1-721)</option>
                            <option value="421">Slovakia (+421)</option>
                            <option value="386">Slovenia (+386)</option>
                            <option value="677">Solomon Islands (+677)</option>
                            <option value="252">Somalia (+252)</option>
                            <option value="27">South Africa (+27)</option>
                            <option value="82">South Korea (+82)</option>
                            <option value="211">South Sudan (+211)</option>
                            <option value="34">Spain (+34)</option>
                            <option value="94">Sri Lanka (+94)</option>
                            <option value="249">Sudan (+249)</option>
                            <option value="597">Suriname (+597)</option>
                            <option value="47">Svalbard and Jan Mayen (+47)</option>
                            <option value="268">Swaziland (+268)</option>
                            <option value="46">Sweden (+46)</option>
                            <option value="41">Switzerland (+41)</option>
                            <option value="963">Syria (+963)</option>
                            <option value="886">Taiwan (+886)</option>
                            <option value="992">Tajikistan (+992)</option>
                            <option value="255">Tanzania (+255)</option>
                            <option value="66">Thailand (+66)</option>
                            <option value="228">Togo (+228)</option>
                            <option value="690">Tokelau (+690)</option>
                            <option value="676">Tonga (+676)</option>
                            <option value="1-868">Trinidad and Tobago (+1-868)</option>
                            <option value="216">Tunisia (+216)</option>
                            <option value="90">Turkey (+90)</option>
                            <option value="993">Turkmenistan (+993)</option>
                            <option value="1-649">Turks and Caicos Islands (+1-649)</option>
                            <option value="688">Tuvalu (+688)</option>
                            <option value="1-340">U.S. Virgin Islands (+1-340)</option>
                            <option value="256">Uganda (+256)</option>
                            <option value="380">Ukraine (+380)</option>
                            <option value="971">United Arab Emirates (+971)</option>
                            <option value="44">United Kingdom (+44)</option>
                            <option value="1">United States (+1)</option>
                            <option value="598">Uruguay (+598)</option>
                            <option value="998">Uzbekistan (+998)</option>
                            <option value="678">Vanuatu (+678)</option>
                            <option value="379">Vatican (+379)</option>
                            <option value="58">Venezuela (+58)</option>
                            <option value="84">Vietnam (+84)</option>
                            <option value="681">Wallis and Futuna (+681)</option>
                            <option value="212">Western Sahara (+212)</option>
                            <option value="967">Yemen (+967)</option>
                            <option value="260">Zambia (+260)</option>
                            <option value="263">Zimbabwe (+263)</option>
                          </select>

                        </div>
                        <div className="col-sm-4">
                          Your Contact:
                          <input
                            type="number"
                            id="phoneNumber"
                            required
                            className="form-control bg-transparent "
                            value={this.state.contact}
                            onChange={(event) => {
                              this.setState({ contact: event.target.value });
                            }}
                            style={{ letterSpacing: "1px", color: "#fc0404" }}
                            placeholder=" Enter Your Contact number*"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 mb-3 text-muted">
                        Your Email:
                        <input
                          type="email"
                          id="email"
                          required
                          className="form-control bg-transparent "
                          value={this.state.email}
                          onChange={(event) => {
                            this.setState({ email: event.target.value });
                          }}
                          style={{ letterSpacing: "1px", color: "#fc0404" }}
                          placeholder=" Enter Your Email*"
                        />
                      </div>
                      <div className="col-sm-12 mb-3 text-muted">
                        Your Message:
                        <textarea
                          required
                          className="form-control bg-transparent "
                          value={this.state.message}
                          onChange={(event) => {
                            this.setState({ message: event.target.value });
                          }}
                          style={{ letterSpacing: "1px", color: "#fc0404" }}
                          rows="3"
                          placeholder=" Type Your Message Here*"
                        ></textarea>
                      </div>
                      <div
                        className="w-25 p-2 text-center rounded-3 login_btn"
                        style={{
                          border: "2px solid #fc0404",
                          color: "#fc0404",
                          cursor: "pointer",
                        }}
                        onClick={this.handleForm}
                      >

                        Send Message
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-4 px-5 pt-4 pb-5 text-muted contact_info">
                    <div className="row contact_info_inside">
                      <div className="col-sm-12 p-2 pt-4">
                        <p className="h5 text-light">
                          <u style={{ color: "#FC0404" }}>
                            <span className="text-light">Contact</span>
                          </u>{" "}
                          Info
                        </p>
                        <div className="row contact_info_margin">
                          <div className="col-sm-2 text-end">
                            <p className="contact_png_container">
                              <img
                                className="contact_png"
                                src={location1}
                                alt=""
                                style={{ width: "1vw" }}
                              />
                            </p>
                          </div>
                          <div className="col-sm-10 text-start">
                            <span
                              className=" d-block"
                              style={{ color: "#FC0404" }}
                            >
                              Address
                            </span>
                            <span
                              className=" d-block contact_detail"
                              style={{ fontSize: "13px" }}
                            >
                              India, Bhopal
                            </span>
                          </div>
                        </div>
                        <div className="row mt-5 contact_info_margin">
                          <div className="col-sm-2 text-end">
                            <p className="contact_png_container">
                              <img
                                className="contact_png"
                                src={call}
                                alt=""
                                style={{ width: "1.2vw" }}
                              />
                            </p>
                          </div>
                          <div className="col-sm-10 text-start">
                            <span
                              className=" d-block"
                              style={{ color: "#FC0404" }}
                            >
                              Call Us
                            </span>
                            <span
                              className=" d-block contact_detail"
                              style={{ fontSize: "13px" }}
                            >
                              +91 9874563210
                            </span>
                          </div>
                        </div>
                        <div className="row my-5 contact_info_margin">
                          <div className="col-sm-2 text-end">
                            <p className="contact_png_container">
                              <img
                                className="contact_png"
                                src={mail}
                                alt=""
                                style={{ width: "1.2vw" }}
                              />
                            </p>
                          </div>
                          <div className="col-sm-10 text-start">
                            <span
                              className=" d-block"
                              style={{ color: "#FC0404" }}
                            >
                              Mail Us
                            </span>
                            <span
                              className=" d-block contact_detail"
                              style={{ fontSize: "13px" }}
                            >
                              contact@gravitycoding.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End form --> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
