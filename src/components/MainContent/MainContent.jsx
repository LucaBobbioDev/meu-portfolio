import React, {useState} from 'react'

import Card from '../../layout/Card'

import {DiHtml5, DiCss3, DiJavascript, DiReact} from 'react-icons/di'
import { AiOutlineCloseCircle, AiOutlineFolderOpen, AiOutlineEllipsis } from "react-icons/ai";


import './maincontent.sass'
import { MyProjects } from '../MyProjects/MyProjects';

export const MainContent = () => {
  const [show, setShow] = useState(false)

  return (
    <main className='main-content-container'>
        <section className='section-about-me-container'>
          <h2>Sobre mim</h2>
          <p>
          Sou um profissional formado em Análise e Desenvolvimento de Sistemas pela Fatec Santana de Parnaíba. Tenho 1 ano de experiência como desenvolvedor júnior na área Salesforce, trabalhando diariamente com tecnologias como Apex, LWC, Visualforce, SOSL/SOQL e etc. 
          <br /> <br />
          Também possuo conhecimento em ReactJS, Java, C# (.NET), Python, Shell Script. Dentre essas tecnologias secundárias, possuo um interesse maior no desenvolvimento de aplicações web com o framework React JS.
          </p>
        </section>
        <section className='section-tecnhology-container'>
          <h2>Principais Tecnologias</h2>
          <Card>
            <span className='left-section-icon'> 
              <DiHtml5/> HTML5
              <span className='right-section-icon'> <AiOutlineEllipsis/> <AiOutlineFolderOpen/> <AiOutlineCloseCircle/></span>
            </span>
              <p>
                HyperText Markup Language: Uso das tags de forma semântica, criação de listas, inserção de imagens, criação e formatação de tabelas, criação e desenvolvimento de formulários, uso de iframes, integração com arquivos CSS etc.
              </p>
          </Card>
          <Card>
            <span span className='left-section-icon'> 
              <DiCss3/>CSS3
              <span className='right-section-icon'> <AiOutlineEllipsis/> <AiOutlineFolderOpen/> <AiOutlineCloseCircle/></span>
            </span>
              <p>
                Cascading Style Sheet: Aplicação de estilos em arquivos HTML, Uso da tag style, uso de seletores, entendimento e aplicação das propriedades, uso e entendimento do FlexBox, animações, posicionamento de informações, keyframes, responsividade, uso de pré-processadores SCSS e SASS etc.
              </p>
          </Card>
          <Card>
            <span span className='left-section-icon'>
              <DiJavascript/>JavaScript
              <span className='right-section-icon'> <AiOutlineEllipsis/> <AiOutlineFolderOpen/> <AiOutlineCloseCircle/></span>
            </span>
              <p>
                JavaScript: Manipulação do DOM (Document Object Model), requisições via Fetch API, uso de Promises, uso de Arrow Functions, manipulação de vetores, estruturas de repetição e condicionais, funções Assíncronas, tratamento de erros e exceções, requisições HTTP, conhecimentos básicos em TypeScript, uso de eventos etc.
              </p>
          </Card>
          <Card>
          <span className='left-section-icon'> 
            <DiReact/>React JS
            <span className='right-section-icon'> <AiOutlineEllipsis/> <AiOutlineFolderOpen/> <AiOutlineCloseCircle/></span>
          </span>
              <p>
                React JS: Criação de componentes, uso de hooks como useState, useEffect, useCallback, uso da biblioteca React-Icons, uso do React Axios para consumo de APIs, gerenciamento de páginas com React Router, integração com o Firebase, componentes com uso de Props e estilização com CSS Modules.
              </p>
          </Card>
        </section>
        <div className='button-container'>
          <button onClick={() => setShow(!show)}> Ver Projetos</button>
        </div>
        { show? <MyProjects/>:null }
    </main>
  )
}
