import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../images/pt_logo.png';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container navDiv">
                <a className="navbar-brand navbarLogo" href="#">
                    <img src={logo} alt="Logo" width="40" height="30" className="d-inline-block align-text-top " />
                    Prime Tutors
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-underline navLinks">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/jobs">Jobs</Link>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

