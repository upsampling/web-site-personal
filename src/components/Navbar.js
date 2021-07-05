import React from 'react';
import logo from "../logoArtMenu.png";
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <div className="logo">
                    <a className="navbar-brand cART" href="#">ART <a className="cMENU">MENU</a></a>
                    
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="icon-fa" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trabajos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactos</a>
                        </li>                                                                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
