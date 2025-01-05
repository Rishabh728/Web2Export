import { useState } from "react";
import "../assets/forgotPassword.css";
import "../assets/verifyOTP.css";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleOTPInput = (e) => {
        const input = e.target;
        const value = input.value;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        // Allow only numeric input
        if (!/^\d$/.test(value)) {
            input.value = '';
            return;
        }

        // Move to the next input if a number is entered
        if (value.length === 1 && nextInput) {
            nextInput.focus();
        }
    };

    const handleKeyDown = (e) => {
        const input = e.target;
        const key = e.key;

        // Handle backspace key when input is empty
        if (key === 'Backspace' && input.value === '' && input.previousElementSibling) {
            input.previousElementSibling.focus(); // Move focus to previous input
        }
    };

    const handlePaste = (e) => {
        const pastedText = e.clipboardData.getData('text').replace(/\D/g, ''); // Allow only digits
        const inputs = document.querySelectorAll('.otp-input input');
        let currentIndex = 0;

        // Ensure pasted content is valid and fits the OTP inputs
        if (pastedText.length === inputs.length) {
            inputs.forEach((input) => {
                if (currentIndex < pastedText.length) {
                    input.value = pastedText[currentIndex];
                    currentIndex++;
                }
            });

            // Focus the last input after pasting
            inputs[inputs.length - 1].focus();
        } else {
            // If the pasted input doesn't match the expected length, do nothing
            e.preventDefault();
        }
    };

    // Check if the email is valid
    const isEmailValid = emailRegex.test(email);

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="form-card p-4 shadow">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <img src="logo.png" alt="Web2Export" className="logo mb-2" />
                        <h5>Forgot Password</h5>
                        <p className="text-muted">
                            Enter your registered email address to reset your password.
                        </p>
                    </div>
                    {/* Forgot Password Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {!isEmailValid && email.length > 0 && (
                                <div className="text-danger mt-2">Please enter a valid email address.</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100 mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#otpModal"
                            disabled={!isEmailValid} // Disable the button if the email is not valid
                        >
                            Send OTP
                        </button>
                    </form>
                    {/* Back to Login */}
                    <p className="text-center mt-4">
                        Remember your password?{" "}
                        <a href="#" className="text-decoration-none text-danger">
                            Login
                        </a>
                    </p>
                </div>
            </div>

            {/* OTP Verification Modal */}
            <div
                className="modal fade"
                id="otpModal"
                tabIndex={-1}
                aria-labelledby="otpModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="otpModalLabel">
                                Verify OTP
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p className="text-muted text-center mb-4">
                                Enter the 6-digit OTP sent to your registered email or phone
                                number.
                            </p>
                            <form>
                                {/* OTP Input */}
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
                                            required
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-4">
                                    Verify OTP
                                </button>
                            </form>
                            {/* Resend OTP */}
                            <p className="text-center mt-3">
                                Didn't receive the OTP?{" "}
                                <a href="#" className="text-decoration-none text-danger">
                                    Resend OTP
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
