import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config.json";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: [],
      email: "",
      otp: "",
      newpass: "",
      cnewpass: "",
      attempts:1,
    };
  }

  componentDidUpdate=()=>{

    console.log(this.state.attempts)
    if(this.state.attempts >= 6){
      alert('Too many failed login attempts ! Try Again After few Minutes');
      document.getElementById("username").setAttribute("disabled","disabled");
      document.getElementById("passwordField").setAttribute("disabled","disabled");
      document.getElementById("signIn").setAttribute("disabled","disabled");
      window.setTimeout(()=>{
        document.getElementById("username").removeAttribute("disabled");
        document.getElementById("passwordField").removeAttribute("disabled");
        document.getElementById("signIn").removeAttribute("disabled");
        this.setState({
          attempts:1,
        })
        alert("Continue Login")
      },60000)
    }
  }

  handleLogin = () => {

    let newData = new FormData();
    newData.append("email_id", this.state.username);
    newData.append("password", this.state.password);
    newData.append("attempts", this.state.attempts);

    fetch(config.Login_URL, {
      method: "POST",
      body: new URLSearchParams(newData),
    })
      .then((response) => {
        // console.log("Response status code:", response.status); // Print the response status code
        return response.json(); // Return the response JSON
      })
      .then((data) => {
        // console.log("Response data code:", data.code); // Print the value of data.code

        if (data.code === 200) {
          // Redirect to a new page
          window.location.href = "https://home.hexadefend.com";
        }
        else{
          this.setState({
            attempts : parseInt(this.state.attempts)+parseInt(1)
          })
          alert("Invalid Email or Password ! Please Try Again")
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mx-auto container_sign">
                <div id="signUpTab">
                  <h1 className="signUpTab-item">Welcome Back!</h1>
                  <h2 className="signUpTab-item">
                    Create a new <br />{" "}
                    <span
                      style={{ color: "#fc0404", fontSize: "1.5vw" }}
                      className="sign_account"
                    >
                      Account
                    </span>
                  </h2>
                  <div className="text-center py-4 d-flex justify-content-center">
                    <div
                      className="px-5 py-2 text-center rounded-3 signup_btn_outer"
                      style={{
                        border: "2px solid #fc0404",
                        color: "#fc0404",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        className="text-decoration-none signup_btn"
                        style={{ color: "#fc0404", fontSize: "1vw" }}
                        to="/signup"
                      >
                        SIGN UP
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="signInMain">
                  <div id="User-logo">
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </div>
                  <h1 className="sign_in_heading" style={{ color: "#fc0404" }}>
                    SIGN IN
                  </h1>
                  <form className='signInFormContainer'
                    action="#"
                    autoComplete="off"
                  >
                    <div className="signInForm" id="form-value">
                      <input
                        type="email"
                        id="username"
                        placeholder="Email..."
                        value={this.state.username}
                        onChange={(event) => {
                          this.setState({
                            username: event.target.value,
                          });
                          // console.log(this.state)
                        }}
                      />
                      <div className="input-pass">
                        <input
                          type="password"
                          id="passwordField"
                          placeholder="Password..."
                          value={this.state.password}
                          onChange={(event) => {
                            this.setState({
                              password: event.target.value,
                            });
                            // console.log(this.state)
                          }}
                        />
                        <i class="ri-eye-line" id="toggleButton" onClick={this.showHidePass}></i>
                      </div>
                      <span onClick={this.openForgotPassBox}>
                        Forgot password?
                      </span>
                      <input
                        type="button"
                        id="signIn"
                        className="btn signUpBtn signInBtn"
                        value="SIGN IN"
                        onClick={this.handleLogin}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forgot Password*/}

        <div className="reset_pass_container">
          <div className="row m-0">
            <div className="col-md-6 p-5 mx-auto">
              <p className="text-end text-light fs-4">
                <i
                  class="ri-close-circle-line"
                  onClick={this.closeForgotBox}
                ></i>
              </p>
              <h1 className="mb-5 text-light">Forgot Password</h1>
              <p className="fs-4 my-3 text-light">Enter Email Here</p>
              <input
                id="forgot-pass-email"
                type="email"
                placeholder="Enter Mail here"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <br />
              <button className="btn btn-danger" onClick={this.sendOtp}>
                send otp
              </button>
              <p className="fs-4 my-3 text-light">Enter OTP</p>
              <input
                type="number"
                placeholder="Enter OTP here"
                className="form-control"
                value={this.state.otp}
                onChange={(event) => {
                  this.setState({ otp: event.target.value });
                }}
              />
              <p className="fs-4 my-3 text-light">New Password</p>
              <div className="input-group flex-nowrap">
                <input
                  type="password"
                  id="showHidePassword"
                  className="form-control"
                  placeholder="Enter New Password"
                  value={this.state.newpass}
                  onChange={(event) => {
                    this.setState({ newpass: event.target.value });
                  }}
                />
                <span
                  className="input-group-text"
                  id="addon-wrapping"
                  onClick={this.checkPass}
                >
                  <i className="ri-eye-line" id="showPassword"></i>
                </span>
              </div>
              <p className="fs-4 my-3 text-light">Re-Enter New Password</p>
              <div className="input-group flex-nowrap mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-Enter New Password"
                  value={this.state.cnewpass}
                  onChange={(event) => {
                    this.setState({ cnewpass: event.target.value });
                  }}
                />
              </div>
              <button className="btn btn-warning" onClick={this.handlePass}>
                Verify & Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  openForgotPassBox = () => {
    document.querySelector(".reset_pass_container").style.zIndex = "2";
    document.querySelector(".reset_pass_container").style.opacity = "1";
  };
  closeForgotBox = () => {
    document.querySelector(".reset_pass_container").style.zIndex = "-2";
    document.querySelector(".reset_pass_container").style.opacity = "0";
  };

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
    const nameInput = document.getElementById('forgot-pass-email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(nameInput)) {
      alert('Invalid Email');
      return false;
    }

    return true;
  }

  validatePassword = () => {
    var password = document.getElementById("showHidePassword").value;

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
  };

  validateBothPass = () => {
    if (this.validatePassword()) {
      if (this.state.cnewpass === this.state.newpass) {
        return true;
      } else {
        alert("Confirm password does not match.");
      }
    } else {
      alert("Please Re-Type Your Password including all conditions");
    }
  };

  sendOtp = () => {

    if(this.isValidEmail()){
      let newData = new FormData();
      newData.append("email_id", this.state.email);
  
      fetch("/home/PasswordResetOtp.php", {
        method: "POST",
        body: new URLSearchParams(newData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Otp Sent to your Mail");
          }
          else{
            if(response.status === 404)
            alert("Invalid Request !! Account not Found")
            else if(response.status === 500)
            alert("Internal Server Error")
          }
        })
        .then((data) => { })
        .catch((error) => {
          alert("Something Went Wrong ! Try Again Later")
        });
    }
    else{
      
    }

  };

  handlePass = () => {
    if (this.validateBothPass()) {
      let newData = new FormData();
      newData.append("otp", this.state.otp);
      newData.append("email_id", this.state.email);
      newData.append("password", this.state.cnewpass);

      fetch("/home/PasswordResetUpdate.php", {
        method: "POST",
        body: new URLSearchParams(newData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Password Changed ! Login to Continue");
            window.location.href = "https://hexadefend.com/login";
          }
          else{
            alert("Server Error")
          }
        })
        .then((data) => { })
        .catch((error) => {
          alert("Invalid Request ! Try Again")
        });
    } else {
      // alert("Password Not Matched");
    }
  };

  checkPass = () => {
    let passwordInput = document.querySelector("#showHidePassword");
    let showPasswordCheckbox = document.getElementById("showPassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordCheckbox.classList.remove("ri-eye-line");
      showPasswordCheckbox.classList.add("ri-eye-off-line");
    } else {
      passwordInput.type = "password";
      showPasswordCheckbox.classList.remove("ri-eye-off-line");
      showPasswordCheckbox.classList.add("ri-eye-line");
    }
  };
}
