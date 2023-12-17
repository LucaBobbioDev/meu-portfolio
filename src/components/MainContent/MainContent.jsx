import React, {useState} from 'react'

import Card from '../../layout/Card'

import { VscChevronDown,  VscChevronRight } from "react-icons/vsc";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di'
import { AiOutlineCloseCircle, AiOutlineFolderOpen, AiOutlineEllipsis } from "react-icons/ai";


import './maincontent.sass'
import { MyProjects } from '../MyProjects/MyProjects';

export const MainContent = () => {
  const [showProjects, setShowProjects] = useState(false)
  const [showTec, setShowTec] = useState(false)

  const toggleCollapse = () => {
    setShowTec(!showTec);
  };

  const internExp = [
    "Desenvolvimento de Triggers e Classes em Apex para automatizar os processos de precificação de produtos.",
    "Configuração e desenvolvimento de integrações INBOUND e OUTBOUND no Salesforce utilizando ferramentas como Postman, JSON e Apex usando classes de modelo.",
    "Desenvolvimento de um Lightning Web Component para criar uma tela interativa de FAQ, com recursos como filtragem de consulta por termo de busca e paginação de registros.",
    "Desenvolvimento de Lightning Web Components para criar uma tela de Pedido interativa, com recursos como busca de produtos, criação e edição de registros de pedidos."
  ];

  const juniorExp =[
    "Experiência com desenvolvimento Salesforce e metodologias ágeis como Scrum;",
    "Desenvolvimento de aplicações personalizadas utilizando recursos e estruturas da plataforma com Apex, Lightning Web Components, Batches e Flow;",
    "Realiza manutenção corretiva e evolutiva de páginas especiais, classes e jobs Apex, Triggers, componentes Lightning e integrações de serviços web;",
    "Auxilia no escopo e planejamento de projetos e iniciativas relacionadas ao CRM Salesforce;",
    "Possui conhecimento de sistemas de controle de versão (Git) e processo CI/CD;",
    "Conhecimento de testes e depuração com planos de teste, garantindo a qualidade da entrega."
  ]

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
        <section className='section-about-me-container'>
          <h2>Experiência Profissional</h2>
          <h3>Estagiário de Desenvolvimento Salesforce - Mar. 2023/Ago. 2023</h3>
          <p>
            <ul>
              {internExp.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </p>
          <h3>Desenvolvedor Salesforce Júnior - Set. 2023/Atual</h3>
          <p>
            <ul>
              {juniorExp.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
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
        </section>
        <section className='section-tecnhology-container'>
          <h2>Tecnologias Secundárias</h2>
          <button onClick={toggleCollapse} style={toggleButton}>
                {showTec ? <>Exibir -<VscChevronRight style={{ background: 'none' }}/> </> : <>Esconder -<VscChevronDown style={{ background: 'none' }}/></>}
          </button>
          {showTec?
          <Card>
            <span className='left-section-icon'> 
              <DiReact/>React JS
              <span className='right-section-icon'> <AiOutlineEllipsis/> <AiOutlineFolderOpen/> <AiOutlineCloseCircle/></span>
            </span>
            <p>
              React JS: Criação de componentes, uso de hooks como useState, useEffect, useCallback, uso da biblioteca React-Icons, uso do React Axios para consumo de APIs, gerenciamento de páginas com React Router, integração com o Firebase, componentes com uso de Props e estilização com CSS Modules.
            </p>
          </Card>
          :null}

        </section>
        <div className='button-container'>
          <button onClick={() => setShowProjects(!showProjects)}> Ver Projetos</button>
        </div>
        { showProjects? <MyProjects/>:null }
    </main>
  )
}

const toggleButton = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'none',
  backgroundColor: "#222222",
  color: "white",
  margin: '3px',
  padding: '1px',
  border: 'none'
};
