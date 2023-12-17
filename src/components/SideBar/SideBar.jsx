import React, { useState, useEffect } from 'react'
import { format, differenceInYears } from 'date-fns';

import Avatar from '../../assets/pfpLuca.jpeg'
import Gif from '../../assets/gifs/man-on-computer.gif'
import Document from '../../assets/docs/Luca Bobbio - Curriculo.pdf'

import { FaLinkedinIn, FaGithub, FaFacebook, FaSalesforce} from "react-icons/fa";
import { VscChevronDown,  VscChevronRight} from "react-icons/vsc";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

import './sidebar.sass'

export const SideBar = () => {
    const [aboutMe, setAboutMe] = useState('');
    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false);

    const myBirthDate = new Date('2002-02-04');

    const me = {
        name: 'Luca Bobbio',
        age: differenceInYears(new Date(), myBirthDate),
        education: {
            degree: 'Graduated at Fatec',
            major: 'Analysis and systems development',
        },
        job: 'Salesforce Developer Jr',
        skills: { 
            softSkills: [
                'Focused',
                'Collaborative',
                'Dedicated',
                'Values teamwork'
            ],
            hardSkills: [
                'Apex', 
                'Triggers', 
                'Batches', 
                'OOP',
                'HTML', 
                'CSS', 
                'Javascript', 
                'REST Integrations' 
            ]
        }
    };
  
    let index = 0;
  
    useEffect(() => {
        const aboutMeText = 'const me = ' + JSON.stringify(me, null, 2) +';';
        const typeText = () => {
            setAboutMe(aboutMeText.slice(0, index));
            if (index <= aboutMeText.length) {
              index++;
              setTimeout(typeText, 50);
            }
        };
  
      typeText();
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className='sidebar-container'>
            <img src={Avatar} alt="Profile Photo"/>
            {/* <p className='sidebar-title'>Vaga desejada: <span>Desenvolvedor Web</span></p> */}
            <div className="typing-effect-container">
                <button onClick={toggleCollapse} className="typing-effect-button">
                    {isCollapsed ? <>Expandir -<VscChevronRight style={{ background: 'none' }}/> </> : <>Recolher -<VscChevronDown style={{ background: 'none' }}/></>}
                </button>
                <pre className= "typing-effect">
                    {isCollapsed ? 'const me = {...};' : aboutMe}
                </pre> 
            </div>
            <div className='sidebar-social'>
                <p>Redes Sociais</p> <br />
                <a href="https://www.linkedin.com/in/luca-bobbio-0135b2240/" target="_blank" title="Linkedin Profile"> 
                    <FaLinkedinIn/>
                </a>
                <a href="https://github.com/LucaBobbioDev" target="_blank" title="Github Profile">
                    <FaGithub/>
                </a>
                <a href="https://www.facebook.com/Luca.bobbio.1/" target="_blank" title="Facebook Profile">
                    <FaFacebook/>
                </a>      
                <a href="https://www.salesforce.com/trailblazer/lbobbio" target="_blank" title="Trailblazer Profile">
                    <FaSalesforce/>
                </a> 
            </div>

            <br/>
            
            <p>Informações de Contato</p>
            <div className='sidebar-contact'>
                <button onClick={() => setShowEmail(!showEmail)}> 
                    <AiFillMail/>E-mail
                </button>   
                    {
                        showEmail? <p style={hiddenStyles}> bobbio.luca.117@gmail.com <br/> bobbio.luca@live.com </p>:null
                    }
                <button onClick={() => setShowPhone(!showPhone)}> 
                    <AiFillPhone/>Telefone
                </button>
                    { showPhone?<p style={hiddenStyles}>(11)997030265</p>:null}
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