const HttpStatus = {
  OK: {
    code: 200,
    message: 'fetch successful',
  },
  NOT_FOUND: {
    code: 404,
    message: 'resource not found',
  },
  DELETED: {
    code: 204,
    message: 'deleted successfully',
  },
  CREATED: {
    code: 201,
    message: 'created successfully',
  },
  UPDATED: {
    code: 201,
    message: 'updated successfully',
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'unauthorized access',
  },
  FORBIDDEN: {
    code: 403,
    message: 'access forbidden',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'bad request',
  },
  ROUTE_NOT_FOUND: {
    code: 404,
    message: 'route not found',
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'internal server error',
  },
  FILE_UPLOAD_ERROR: {
    code: 500,
    message: 'file upload error',
  },
};

const CustomMessages = {
  MESSAGE: {
    notStandardPassword: 'Password must include at least one special character, one uppercase and lowercase character, one number, and be 8 to 12 characters in length',
    loginSuccess: 'Login successful',
    loginInValid: 'Login failed',
    inValid: 'Invalid',
    emailPasswordNotFound: 'Email or password not found',
    alreadyExist: 'Resource already exists',
    otpSentSuccessfully: 'OTP sent successfully',
    otpSendingFailed: 'OTP could not be sent to the provided email',
    accountNotVerified: 'Account has not been verified',
    accountVerifiedSuccessfully: 'Account verified and activated successfully',
    emailVerifiedSuccessfully: 'Email verified successfully',
    phoneVerifiedSuccessfully: 'Phone Number verified successfully',
    otpVerifiedSuccessfully: 'OTP verified successfully',
    userRegistersuccessfully: 'OTP sent to your registered phone number login to verify.',
  },
};

module.exports = { HttpStatus, CustomMessages };
