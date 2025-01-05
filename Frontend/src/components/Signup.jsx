import React from "react";
import "../assets/signup.css";
import { useNavigate } from "react-router-dom";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit =  handleApiResponse(async (e) => {
      e.preventDefault();

      const formData = new FormData();

      // Append form data
      formData.append("email", e.target.email.value);
      formData.append("password", e.target.password.value);
      formData.append("name", e.target.name.value);
      formData.append("country", e.target.country.value);
      formData.append("state", e.target.state.value);
      formData.append("city", e.target.city.value);
      formData.append("phoneNumber", e.target.phoneNumber.value);
      formData.append("company", e.target.company.value);
      formData.append("confirmPassword", e.target.confirmPassword.value);
      formData.append("userType", e.target.userType.value);
      formData.append("terms", e.target.terms.checked);

      return await userService.signup(formData);
    },
    (data) => {
      navigate('/login');
    },
    (error) => {
      console.log(error)
    }
  );
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-card p-4 shadow">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Web2Export" className="logo mb-2" />
            <h5>JOIN NOW FOR FREE</h5>
            <p className="text-muted">
              Create your free Web2Export account today
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* User Role Selection */}
              <div className="col-12">
                <h6 className="mb-3">I am a:</h6>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="seller"
                      value="Seller"
                      required
                    />
                    <label className="form-check-label" htmlFor="seller">
                      Seller
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="buyer"
                      value="Buyer"
                      required
                    />
                    <label className="form-check-label" htmlFor="buyer">
                      Buyer
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name *"
                  name="name"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address *"
                  name="email"
                  required
                />
              </div>
              <div className="col-md-6">
                <select className="form-select" name="country" required>
                  <option value="" disabled selected>
                    Country
                  </option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="3">UK</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select" name="state" required>
                  <option value="" disabled selected>
                    State
                  </option>
                  <option value="4">Bihar</option>
                  <option value="5">Maharashtra</option>
                  <option value="7">Delhi</option>
                </select>
              </div>
              <div className="col-md-12">
                <select className="form-select" name="city" required>
                  <option value="" disabled selected>
                    Select City
                  </option>
                  <option value="8">Patna</option>
                  <option value="9">Mumbai</option>
                  <option value="10">Delhi</option>
                </select>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <span className="input-group-text">+91</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    name="phoneNumber"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company name *"
                  name="company"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password *"
                  name="password"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password *"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree with
                    <a href="#" className="text-decoration-none mx-1">
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Join Now
                </button>
              </div>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account?
            <a href="#" className="text-decoration-none text-danger">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
