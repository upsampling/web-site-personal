import React from 'react';
import { FaLinkedin, FaGithub, FaBlog } from "react-icons/fa"
import { IoFastFood} from "react-icons/io5"

export const Footer = () => {
    return (
        <footer className="text-center text-white" >
            <div className="container pt-4">
                <section className="mb-4">

                    <a href="https://www.linkedin.com/in/erasmo-de-748422184/"><FaLinkedin size={50} className="icon-fa mx-2" /></a>

                    <a href="https://github.com/upsampling"><FaGithub size={50} className="icon-fa mx-2" /></a>

                    {/* <a href="#!"><FaBlog size={50} className="icon-fa mx-2" /></a> */}

                    {/* <a href="#!"><IoFastFood size={50} className="icon-fa mx-2" /></a> */}

                </section>

            </div>
            <div className="text-center text-dark p-3">
                © 2021 Copyright:
                <a className="text-dark" href="#!">Erasmo de Jesús Casas</a>
            </div>
        </footer>
    )
}
