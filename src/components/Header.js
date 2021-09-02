import React from 'react';
import Typed from "react-typed";

import foto from '../static/foto.jpg';
import { Puntos } from '../helpers/Puntos';

export const Header = () => {
    return (
        <>
            <Puntos />
            <div className="header-wraper" id="inicio">
                <div >
                    
                </div>
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

