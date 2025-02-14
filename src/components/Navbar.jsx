import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">I I T S</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Platform</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">IoT Solutions</a></li>
                                <li><a className="dropdown-item" href="#">Cloud Integration</a></li>
                                <li><a className="dropdown-item" href="#">Data Analytics</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Developer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Success</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-custom" type="submit">Dashboard</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;