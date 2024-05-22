import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config.json'
import './SignUp.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            email_id: "",
            password: "",
            otp: "",
        }
    }



    submitData = (event) => {
        event.preventDefault();

        if (this.isFirstNameValid() && this.isValidEmail() && this.isLastNameValid() && this.validatePassword()) {
            if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.company !== "" && this.state.email !== "" && this.state.password !== "") {

                this.setState({
                    email_id: this.state.email,
                })

                let newData = new FormData();
                newData.append("firstname", this.state.firstName)
                newData.append("lastname", this.state.lastName)
                newData.append("company_name", this.state.company)
                newData.append("email_id", this.state.email)
                newData.append("password", this.state.password)

                // console.log(newData);

                fetch(config.Local_Url, {
                    method: "POST",
                    body: new URLSearchParams(newData)
                }).then((response) => {
                    if (response.ok) {
                        this.setState({
                            firstName: "",
                            lastName: "",
                            company: "",
                            password: "",
                            email: ""
                        })
                    }
                    else{
                        alert("Server Error")
                      }
                }).then((data) => {

                }).catch((error) => {

                })
                alert("Wait For OTP");
            }

            else {
                alert("Fill the Form");
            }
        }
        else {
            alert("Please Fill the Correct Data")
        }

    }

    verifyOtp = () => {

        let myOtp = document.querySelector("#otp").value


        let newData = new FormData();
        newData.append("otp", myOtp);
        newData.append("email_id", this.state.email_id);

        fetch('validate.php', {
            method: "POST",
            body: new URLSearchParams(newData)
        }).then((response) => {
            if (response.ok) {
                this.setState({
                    email_id: "",
                    otp: "",
                })
                window.location.href = 'https://hexadefend.com/login'
            }
            else{
                alert("Server Error")
              }
        }).then((data) => {

        }).catch((error) => {

        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <div className="signup_category">
                                <div className='category-box-title'>Select Type of User</div>
                                <div className='category-box-outer'>
                                    <div className="category-box">
                                        <div className='category-box-image'>
                                            <i class="ri-community-line"></i>
                                        </div>
                                        <h4>COMPANY</h4>
                                    </div>
                                    <div className="category-box">
                                        <div className='category-box-image'>
                                            <i class="ri-government-line"></i>
                                        </div>
                                        <h4>INSTITUTE</h4>
                                    </div>
                                    <div className="category-box">
                                        <div className='category-box-image'>
                                            <i class="ri-user-3-line"></i>
                                        </div>
                                        <h4>OTHER</h4>
                                    </div>
                                </div>
                            </div> */}
                            <div className='mx-auto container_sign container_signin'>
                                <div id="signInTab">
                                    <h2 className="signInTab-item p-3">Already have an account?</h2>
                                    <div className="text-center py-4 d-flex justify-content-center ss">
                                        <div className="px-5 py-2 text-center rounded-3 signin_btn_outer" style={{ border: "2px solid #fc0404", color: "#fc0404", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Link className='text-decoration-none signin_btn' style={{ color: "#fc0404", fontSize: "1vw" }} to='/login'>SIGN IN</Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="signUpMain">
                                    <h2 className='pt-3' style={{ color: "#fc0404" }}>SIGN UP</h2>
                                    <p className='fs-6'>It's only takes a minute</p>
                                    <form action="#" target='/' autoComplete='off'>
                                        <div id="form-value2">
                                            <input type="text" className=' form-control' id="firstName" placeholder="First Name"
                                                required value={this.state.firstName} onChange={(event) => {
                                                    this.setState({
                                                        firstName: event.target.value
                                                    })
                                                }} />
                                            <input type="text" className=' form-control' id="lastName" placeholder="Last Name"
                                                required value={this.state.lastName} onChange={(event) => {
                                                    this.setState({
                                                        lastName: event.target.value
                                                    })
                                                }} />
                                            <input type="text" className=' form-control' id="Company" placeholder="Company Name" required value={this.state.company} onChange={(event) => {
                                                this.setState({
                                                    company: event.target.value
                                                })
                                            }} />
                                            <input type="email" className=' form-control' placeholder="Email" id='signup-email' required value={this.state.email} onChange={(event) => {
                                                this.setState({
                                                    email: event.target.value
                                                })
                                            }} />

                                            <div className="input-pass">
                                            <input type="password" className=' form-control' id="passwordField" placeholder="Password" required value={this.state.password} onChange={(event) => {
                                                this.setState({
                                                    password: event.target.value
                                                })
                                            }}
                                            />
                                            <i class="ri-eye-line" id="toggleButton" onClick={this.showHidePass}></i>
                                        </div>

                                        <input type="submit" id="signUp" className="btn w-25 d-flex justify-content-center  btn-outline-danger my-3 otb_btn" value="Generate OTP" onClick={this.submitData} />
                                </div>
                            </form>
                            <input className='otp_verification form-control' type="number" id='otp' value={this.state.otp} placeholder='Enter Otp Here' onChange={(event) => {
                                this.setState({
                                    otp: event.target.value
                                })
                            }} />
                            <button className='signUpBtn btn w-25' onClick={this.verifyOtp} >Verify & SignUp</button>
                        </div>
                    </div>
                </div>
            </div >
                </div >

            </>
        )
    }
    showHidePass = () => {
        const passwordField = document.getElementById('passwordField');
        const toggleButton = document.getElementById('toggleButton');
    
        if (passwordField.type === 'password') {
          passwordField.type = 'text';
          toggleButton.classList.value = "ri-eye-off-line"
        } else {
          passwordField.type = 'password';
          toggleButton.classList.value = "ri-eye-line"
        }
    
      }

    isValidEmail = () => {
        const nameInput = document.getElementById('signup-email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(nameInput)) {
            alert('Invalid Email');
            return false;
        }

        return true;
    }

    isFirstNameValid = () => {
        const nameInput = document.getElementById('firstName').value;
        const nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(nameInput)) {
            alert('FirstName should contain only characters (letters).');
            return false;
        }

        return true;
    }

    isLastNameValid = () => {
        const nameInput = document.getElementById('lastName').value;
        const nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(nameInput)) {
            alert('LastName should contain only characters (letters).');
            return false;
        }

        return true;
    }

    validatePassword = () => {
        var password = document.getElementById("passwordField").value;

        // Password validation logic (same as in previous JavaScript example)
        if (password.length < 8 || password.length > 15) {
            alert("Password must be between 8 and 15 characters.");
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return false;
        }

        if (!/[a-z]/.test(password)) {
            alert("Password must contain at least one lowercase letter.");
            return false;
        }

        if (!/[!@#$%^&*()\-=_+[\]{}|;':",.<>/?]/.test(password)) {
            alert("Password must contain at least one special character.");
            return false;
        }

        if (!/\d/.test(password)) {
            alert("Password must contain at least one number.");
            return false;
        }

        return true;
    }
}
