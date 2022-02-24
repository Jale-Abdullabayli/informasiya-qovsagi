import React from 'react'
import './Header.scss'
import {Link, NavLink} from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
    <div className="container">
        <Link className="navbar-brand" to="/">
            İQ - İnformasiya Qovşağı
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active"  aria-current="page" to="/">Ana səhifə</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active"  to="/questions">Qovşaq</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/mentors">İQ Köməkçilər</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/contact">Əlaqə</NavLink>
                </li>

            </ul>
            <div className="rightSide">
                <Link className="btn" to="ask-question">
                    <i className="fa-solid fa-lightbulb"></i>
                    <span>Sual verin</span>
                </Link>
                <Link className="btn" to="login">
                    <i className="fa-solid fa-user"></i>
                    <span>Giriş</span>
                </Link>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Header