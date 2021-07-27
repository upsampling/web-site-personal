import React from 'react';
import { FaReact, FaGithub, FaSass } from "react-icons/fa";
import {DiMongodb, DiHeroku} from "react-icons/di";
import {SiRedux, SiFirebase, SiJavascript, SiBootstrap} from "react-icons/si";
import {GrNode} from "react-icons/gr";
import {CgWebsite} from "react-icons/cg"

export const Proyectos = () => {
    return (
        <>
            <br id="proyectos"/><br/><br/><br/>
            <div  className="container" >
                
                <div className="row row-cols-1">
                    <h1 className="text-center">Proyectos</h1>
                    <br/>
                    <div className="col col-md-3 text-center  my-auto">
                    
                    <a className="navbar-brand"  href="#inicio">

                        <FaReact size={80} className="icon-fa icon-fa-git" />
                        <h5 className="fw-bolder text-muted">MERN-PROJECT</h5> 
                    </a>
                    </div>

                    <div className="col col-md-6 my-auto">
                        <p className="text-justify fs-5 fst-normal lh-1">
                        Calendario con autenticación de usuarios, dónde cada uno puede crear, actualizar, eliminar y leer
                        los eventos de uno mismo y de otros usuarios.  
                        Tanto el backend cómo el frontend se desplegaron en Heroku.
                        <br/>
                        Todo esto mediante Redux y con protección de rutas.                    
                        </p>
                        <div className="text-center">

                            <a href="https://github.com/upsampling/Calendario" className="text-muted mx-2">
                                <FaGithub size={30} className="icon-fa icon-fa-git" />
                                GitHub
                            </a>
                            <a href="https://mern-calendar-upsampling.herokuapp.com/" className="text-muted mx-2">
                                <CgWebsite size={30} className="icon-fa icon-fa-git"/>
                                WebSite                    
                            </a>
                        </div>
                    </div>

                    <div className="col col-md-3 mx-auto text-center">
                        <p className="fw-bolder ">Tecnologías usadas:</p>
                        <DiMongodb size={40} className="icon-fa icon-fa-git"/>
                        <SiRedux size={40} className="icon-fa icon-fa-git"/>
                        <GrNode size={40} className="icon-fa icon-fa-git"/>
                        <DiHeroku size={40} className="icon-fa icon-fa-git"/>
                        <FaReact size={40} className="icon-fa icon-fa-git" />
                    </div>
                </div>
                {/* Todo Proyect */}
                <hr/>
                <div className="row row-cols-1">
                    <div className="col col-md-3 text-center  my-auto">
                    <br/>
                    <a className="navbar-brand"  href="#inicio">

                        <FaReact size={80} className="icon-fa icon-fa-git" />
                        <h5 className="fw-bolder text-muted">JOURNAL-PROJECT</h5> 
                    </a>
                    </div>

                    <div className="col col-md-6 my-auto">
                        <p className="text-justify fs-5 fst-normal lh-1">
                        Aplicación con autenticación con cuenta de Google, 
                        dónde se generan notas con acciones que se tienen que realizar.
                        <br/>
                        Todo esto mediante Redux y con protección de rutas.                    
                        </p>
                        <div className="text-center">

                            <a href="https://github.com/upsampling/journal-app" className="text-muted mx-2">
                                <FaGithub size={30} className="icon-fa icon-fa-git" />
                                GitHub
                            </a>
                            <a href="https://calm-tor-01543.herokuapp.com/auth/login#/" className="text-muted mx-2">
                                <CgWebsite size={30} className="icon-fa icon-fa-git"/>
                                WebSite                    
                            </a>
                        </div>
                    </div>

                    <div className="col col-md-3 my-auto mx-auto text-center">
                        <p className="fw-bolder ">Tecnologías usadas</p>
                        <SiFirebase size={40} className="icon-fa icon-fa-git"/>
                        <SiRedux size={40} className="icon-fa icon-fa-git"/>
                        <FaReact size={40} className="icon-fa icon-fa-git" />
                        <FaSass size={40} className="icon-fa icon-fa-git" />
                    </div>
                </div>

                {/* TodoList Proyect */}
                <hr/>
                <div className="row row-cols-1">
                    <div className="col col-md-3 text-center  my-auto">
                    <br/>
                    <a className="navbar-brand"  href="#inicio">

                        <FaReact size={80} className="icon-fa icon-fa-git" />
                        <h5 className="fw-bolder text-muted">TODO-PROJECT</h5> 
                    </a>
                    </div>

                    <div className="col col-md-6 my-auto">
                        <p className="text-justify fs-5 fst-normal lh-1">
                        Sitio web consta de una lista dónde se pueden agregar, eliminar y completar
                        eventos.
                        <br/>
                        Sitio realizado con Vanilla JavaScript y desplegado en GitHub Pages.                    
                        </p>
                        <div className="text-center">

                            <a href="https://github.com/upsampling/TodoList" className="text-muted mx-2">
                                <FaGithub size={30} className="icon-fa icon-fa-git" />
                                GitHub
                            </a>
                            <a href="https://upsampling.github.io/TodoList/" className="text-muted mx-2">
                                <CgWebsite size={30} className="icon-fa icon-fa-git"/>
                                WebSite                    
                            </a>
                        </div>
                    </div>

                    <div className="col col-md-3 my-auto mx-auto text-center">
                        <p className="fw-bolder ">Tecnologías usadas</p>
                        <SiJavascript size={40} className="icon-fa icon-fa-git"/>

                    </div>
                </div>
            </div>
        </>
    )
}
