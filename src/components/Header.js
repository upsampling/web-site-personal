import React from 'react';
import Typed from "react-typed";

import foto from '../static/foto.jpg';
import { Puntos } from '../helpers/Puntos';
import fondo2 from '../static/fondo2.jpg';

export const Header = () => {
    return (
        <>
            <Puntos />
            <div className="header-wraper" id="inicio">
                {/* <img 
                    src={fondo2} 
                    alt="fondo"
                    className="fondo-image" 
                /> */}
                
                <div className="main-info">
                    <img 
                            src={foto} 
                            alt="logo-github"
                            className="imgRedonda mx-auto d-block" 
                        />
                        <h1 > Erasmo de Jesús</h1>
                            <Typed 
                            className="typed-text"
                            strings={["DESAROLLADOR", "REACT", "REDUX"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            />
                        
                    </div>
                
            </div> 
        </>
    )
}

