import React from 'react';
// REACT ICONS
import { FaCode } from "react-icons/fa"

import { GiHamburgerMenu } from "react-icons/gi"
// import { a } from 'react-scroll'

export const Navbar = () => {


    const menuClick = ()=>{
        if(document.getElementById("boton-menu").offsetWidth > 0){
            document.getElementById("boton-menu").click();
        }
    }
    return (
        <>
            <nav id="navbar-example2" className=" navbar fixed-top navbar-light navbar-expand-md bg-light">
                <a className="mx-2 navbar-brand"  href="#inicio">
                    <FaCode size={50} className="icon-fa icon-fa-git" />
                    UP SAMPLING
                </a>
                <button className="mx-2 navbar-toggler collapsed" id="boton-menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu size={30} className="icon-fa" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                onClick={menuClick}
                                href="#sobreMi"

                            > 
                                Acerca de mí
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                onClick={menuClick}
                                href="#proyectos"
                                
                            >
                                Proyectos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                onClick={menuClick}
                                href="#trayectoria"
                            >
                                trayectoria
                            </a>
                        </li>                                                                        
                    </ul>
                </div>

            </nav>
        </>
    )
}
