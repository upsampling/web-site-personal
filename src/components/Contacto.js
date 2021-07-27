import React from 'react'

export const Contacto = () => {
    return (
        <>
        <br/>
        <div className="container">

            <blockquote class="blockquote text-end" >
            <p class="mb-0">5.6 Los límites de mi lenguaje significan los límites de mi mundo.</p>
            <br/>
            <footer class="blockquote-footer" id="trayectoria"> <cite title="Source Title">Ludwing Wittgenstein</cite></footer>
            </blockquote >
        </div>

        <div className="container py-5">


            <div className="row text-center mb-5">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-4">Trayectoria</h1>
                    <p className="lead mb-0">Un poco más acerca de mí </p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        
                        
                        <ul className="timeline">
                            <li className="timeline-item bg-white rounded ml-4 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0"> Cecyt No. 8 Narciso Bassols </h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2011-2015</span>
                                <p className="text-small mt-2 font-weight-light"> Téc. en Computación </p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-4 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">UPIITA-IPN</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2015-2021</span>
                                <p className="text-small mt-2 font-weight-light">Ing. en Telemática</p>
                            </li>
                            <li className="timeline-item bg-white rounded ml-4 p-4 shadow">
                                <div className="timeline-arrow"></div>
                                <h2 className="h5 mb-0">Cursos Especializados</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>2020-2021</span>
                                <p className="text-small mt-2 font-weight-light"> Cursos en Git, GitHub, JavaScript, React, tomados en Udemy </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}
