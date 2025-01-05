// AuthService.js

class AuthService {
  static setTokens(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static clearTokens() {
    localStorage.removeItem("accessToken");
  }
}

export default AuthService;
