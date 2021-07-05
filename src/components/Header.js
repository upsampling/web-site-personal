import React from 'react';
import Typed from "react-typed";


export const Header = () => {
    return (
       <div className="header-wraper">
           <div className="main-info">
               <h1> Menús Digitales</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Facebook Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a className="btn-main-offer" href="#">Contactame</a>
           </div>

       </div> 
    )
}

