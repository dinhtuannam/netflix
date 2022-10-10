import NetflixLogin from '../../assets/image/login-img.png';
import NetflixLogo from '../../assets/image/netflix-img.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-container">
            <div className="login-wrapper-background">
                <div className="login-img-container">
                    <img className="Login-image" src={NetflixLogin} alt="netflix login" />
                </div>
                <div className="login-logo">
                    <Link to={'/'}>
                        <img className="netflix-logo" src={NetflixLogo} alt="netflix logo" />
                    </Link>
                </div>
                <div className="login-form-container">
                    <div className="Login-form">
                        <div className="form-container">
                            <p className="login-title">Sign In</p>
                            <form>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input className="form-login-textfield" placeholder="Email or phone number" />
                                    </label>
                                </div>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input className="form-login-textfield" placeholder="Password" />
                                    </label>
                                </div>
                                <div className="submit-btn-container">
                                    <button className="form-login-submit-input" type="submit">
                                        Sign in
                                    </button>
                                </div>

                                <div className="login-des">
                                    <p className="login-des-text">New to Netfix? </p>
                                    <Link to="/register">Sign up now</Link>
                                </div>
                                <p className="login-footer-text">
                                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
