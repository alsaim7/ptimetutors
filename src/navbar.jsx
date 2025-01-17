import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container navDiv">
                <a className="navbar-brand navbarLogo" href="#">
                    <img src="https://res.cloudinary.com/dnkqy2kkr/image/upload/v1737121986/pt_logo_n6ma0e.png" alt="Logo" width="40" height="30" className="d-inline-block align-text-top " />
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

