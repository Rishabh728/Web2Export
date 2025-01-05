import React, { useRef, useState } from 'react';
import "../assets/login.css";
import handleApiResponse from '../helpers/responseHandler';
import userService from '../Services/userServices';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../Services/authService';

const Login = () => {
  const [showModalState, setShowModalState] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  // Create a ref for the OTP input fields
  const otpRefs = useRef([]);

  // Handle OTP Input
  const handleOTPInput = (e) => {
    const input = e.target;
    const value = input.value;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (!/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    if (value.length === 1 && nextInput) {
      nextInput.focus();
    }
  };

  const handleKeyDown = (e) => {
    const input = e.target;
    const key = e.key;

    if (key === 'Backspace' && input.value === '' && input.previousElementSibling) {
      input.previousElementSibling.focus(); // Move focus to previous input
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData('text').replace(/\D/g, '');
    const inputs = document.querySelectorAll('.otp-input input');
    let currentIndex = 0;

    if (pastedText.length === inputs.length) {
      inputs.forEach((input) => {
        if (currentIndex < pastedText.length) {
          input.value = pastedText[currentIndex];
          currentIndex++;
        }
      });

      inputs[inputs.length - 1].focus();
    } else {
      e.preventDefault();
    }
  };

  // Email login handler
  const handleEmailLogin = handleApiResponse(async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("identity", e.target.email.value);
    formData.append("password", e.target.password.value);

    setEmail(e.target.email.value);
    return await userService.signin(formData);
  },
    (data) => {
      AuthService.setTokens(data.data.access_token)
      navigate('/');
    },
    (error) => {
      if (error.message === "Account has not been verified") {
        setShowModalState(true);  // Show the modal if the account is not verified
      }
    });


  // phone login handler
  const handlePhoneLogin = handleApiResponse(async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("identity", e.target.phoneNumber.value);
    formData.append("password", e.target.password.value);

    setPhoneNumber(e.target.phoneNumber.value);
    return await userService.signin(formData);
  },
    (data) => {
      AuthService.setTokens(data.data.access_token)
      navigate('/');
    },
    (error) => {
      if (error.message === "Account has not been verified") {
        setShowModalState(true);  // Show the modal if the account is not verified
      }
    }
  )


  // Verify OTP handler
  const handleSubmitOtp = handleApiResponse(async (e) => {
    e.preventDefault();

    // Gather OTP values from refs
    const otpValue = otpRefs.current.map(ref => ref.value).join('');

    let data = {
      identity: email || phoneNumber,
      otp: otpValue
    }
    console.log("83", data);
    return await userService.verifyOtp(data);
  },
    (data) => {
      navigate('/')
    },
    (error) => {
      console.log("89", error);
    }
  );


  // Resend OTP handler
  const handleResendOtp = handleApiResponse(async (e) =>{
    e.preventDefault();

    let data = {
      identity: email || phoneNumber
    }

    return await userService.resendOtp(data);
  })


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {showModalState === false ? (
        <div className="form-card p-4 shadow">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Web2Export" className="logo mb-2" />
            <h5>WELCOME AGAIN</h5>
            <p className="text-muted">Please enter your email and password to login.</p>
          </div>

          {/* Tabs */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="loginTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link custom-tab active"
                id="email-tab"
                data-bs-toggle="tab"
                data-bs-target="#email"
                type="button"
                role="tab"
                aria-controls="email"
                aria-selected="true"
              >
                <i className="bi bi-envelope me-2" /> Login With Email
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link custom-tab"
                id="phone-tab"
                data-bs-toggle="tab"
                data-bs-target="#phone"
                type="button"
                role="tab"
                aria-controls="phone"
                aria-selected="false"
              >
                <i className="bi bi-phone me-2" /> Login With Phone
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="loginTabContent">
            {/* Email Login */}
            <div className="tab-pane fade show active" id="email" role="tabpanel" aria-labelledby="email-tab">
              <form onSubmit={handleEmailLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your registered email ID"
                    name='email'
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name='password'
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
              </form>
            </div>
            {/* Phone Login */}
            <div className="tab-pane fade" id="phone" role="tabpanel" aria-labelledby="phone-tab">
              <form onSubmit={handlePhoneLogin}>
                <div className="input-group mb-3">
                  <span className="input-group-text">+91</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Your phone number"
                    name='phoneNumber'
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name='password'
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="#" className="text-decoration-none text-danger">Join for free now</a>
          </p>
        </div>
      ) : (
        // OTP Verification Modal
        <div
          className="modal fade show d-block"
          id="otpModal"
          tabIndex={-1}
          aria-labelledby="otpModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="otpModalLabel">Verify OTP</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModalState(false)}  // Close the modal
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="text-muted text-center mb-4">
                  Enter the 6-digit OTP sent to your registered email or phone number.
                </p>
                <form onSubmit={handleSubmitOtp}>
                  <div className="otp-input d-flex justify-content-center gap-2">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="form-control text-center otp-box"
                        onInput={handleOTPInput}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        ref={(el) => otpRefs.current[index] = el}
                        required
                      />
                    ))}
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-4">Verify OTP</button>
                </form>
                <p className="text-center mt-3">
                  Didn't receive the OTP?{" "}
                  <Link onClick={handleResendOtp} className="text-decoration-none text-danger">Resend OTP</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
