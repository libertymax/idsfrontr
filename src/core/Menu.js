import React from "react";
import {Link, withRouter} from "react-router-dom";
import {signout, isAuthenticated} from '../auth';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: 'var(--first-color)'}
    } else {
        return {color: 'var(--dark-color)'}
    }
}

const Menu = ({history}) => (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div className="container">
                
                <Link className="navbar-brand" to="/">INTERNATIONAL DRIVING SCHOOL</Link>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to="#learn">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="#courses">Courses</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="#faqs">FAQs</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="#contact">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="#about">About Us</Link>
                        </li>
                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li class="nav__item">
                            <Link to="/admin/dashboard" class="nav__link" style={isActive(history, "/admin/dashboard")} active> Dashboard </Link>
                        </li>
                        )}
                        {isAuthenticated() && (
                            <li class="nav__item">
                            <Link onClick={() => 
                            signout(() => {
                                history.push("/");
                            })
                            } class="nav__link">Sign Out</Link>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default withRouter(Menu);