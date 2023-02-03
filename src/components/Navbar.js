import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Logo from "../images/dndIcon.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Navbar() {
    return(
        <>
            <nav className={"navbar"}>
                <div className={"navbar-container"}>
                    <Link to={"/"} className={"navbar-logo"}>
                        D&D <i className={"fab fa-typo3"}></i>
                        YOUR COFFE <FontAwesomeIcon icon={"coffee"} />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar