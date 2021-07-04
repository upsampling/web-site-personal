import React from 'react';
import Typed from "react-typed";


export const Header = () => {
    return (
       <div className="header-wraper">
           <div className="main-info">
               <h1> Desarrollo Web  ñññññ</h1>
                <Typed 
                className="typed-text"
                strings={["Wev Design", "Web Development", "Facebook Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="" className="btn-main-offer">Contactame</a>
           </div>

       </div> 
    )
}

