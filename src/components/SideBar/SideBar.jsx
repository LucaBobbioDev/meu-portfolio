import React, { useState } from 'react'

import Avatar from '../../assets/pfpLuca.jpg'
import Gif from '../../assets/gifs/man-on-computer.gif'
import Document from '../../assets/docs/Luca Bobbio - Curriculo.pdf'

import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

import './sidebar.sass'

export const SideBar = () => {
    const [show, setShow] = useState(false)

    return (
        <aside className='sidebar-container'>
            <img src={Avatar} alt="Profile Photo"/>
            <p className='sidebar-title'>Vaga desejada: <span>Desenvolvedor Web</span></p>

            <div className='sidebar-social'>
                <p>Redes Sociais</p> <br />
                <a href="https://www.linkedin.com/in/luca-bobbio-0135b2240/" target="_blank"> 
                    <FaLinkedinIn/>
                </a>
                <a href="https://github.com/LucaBobbioDev" target="_blank" >
                    <FaGithub/>
                </a>
                <a href="https://www.facebook.com/Luca.bobbio.1/" target="_blank" >
                    <FaFacebook/>
                </a>      
            </div>

            <br/>
            
            <p>Informações de Contato</p>
            <div className='sidebar-contact'>
                <button onClick={() => setShow(!show)}> 
                    <AiFillMail/>E-mail
                </button>   
                    {
                        show?
                            <p style={hiddenStyles}>
                            bobbio.luca.117@gmail.com 
                            <br/>
                            bobbio.luca@live.com
                            </p>
                            :null
                    }
                <button onClick={() => setShow(!show)}> 
                    <AiFillPhone/>Telefone
                </button>
                    {
                        show?<p style={hiddenStyles}>(11)997030265</p>:null
                    }
            </div>
            <a href={Document} download="LucaBobbioCurriculo" className='sidebar-link-button'>Download Currículo</a>
            <img className='img-gif' src={Gif} alt="Gif of a man using a computer"/>
        </aside>
    );
}


const hiddenStyles = {
    margin: "2 px",
    color: "white",
    backgroundColor: "#222222",
    textDecorationLine: "underline"
};