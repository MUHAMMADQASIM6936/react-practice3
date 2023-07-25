import React from 'react'
import PropTypes from 'prop-types'
import {
   
   Link
  } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-secondary">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* to ="# "ko  to ="/"se change kartay hn ctrl F kay zariye aur class= className kay zariye aur jo tags clasoe nahi ho rahay unkay end pe / ye sign lgana ha*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/">{props.aboutText}</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired }
Navbar.defaultProps = {
    title: "Set title here",
    aboutText:"about textutils"
  };