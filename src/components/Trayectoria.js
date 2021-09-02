import React from 'react'
import foto from '../static/yo.jpeg';

export const Trayectoria = () => {
    return (
        <>
            <br id="sobreMi"/><br/><br/><br/>
            <div  className="container">
                <h1 className="text-center">Acerca de Mí</h1>
                <div className="row row-cols-1">
                    <div className="col col-md-4 my-auto">
                    <img 
                        src={foto} 
                        alt="logo-github"
                        className="rounded mx-auto d-block img-fluid" 
                    />
                    </div>
                    <div className="col col-md-8 my-auto">

                    Desarrollador Web Front End con conocimientos sólidos en la librería de JavaScript conocida cómo React, 
                    haciendo uso de otras herramientas cómo lo son Redux, Bootstrap, CSS3, HTML-5, ECMAScript-6 y también de 
                    los paquetes de NPM.

                    </div>

                </div>
            
                
            </div>

        </>
    )
}
