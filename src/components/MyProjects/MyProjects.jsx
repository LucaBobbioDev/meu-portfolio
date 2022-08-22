import React from 'react'

import HandLender from '../../assets/gifs/hand-lender.gif';
import SeuFilme from '../../assets/gifs/seu-filme.gif'
import ConsumoApi from '../../assets/gifs/consumo-api.gif'
import Verificador from '../../assets/gifs/verificador-idade.gif'
import ToDoList from '../../assets/gifs/todo-list.gif'

import './myprojects.sass'

export const MyProjects = () => {
  return (
    <section>
        <h2>Meus Projetos</h2>
        <div className='projects-container'>
          <h3>React JS - Projeto Hand Lender</h3>
          <img className='project-gif' src={HandLender} alt="Gif of the project hand lender" />
          <br />
          <a href="https://github.com/LucaBobbioDev/hand-lender" target='blank'> -&gt; Repositório</a>
        </div>
        <div className='projects-container'>
          <h3>React JS - MoviesLib</h3>
          <img className='project-gif' src={SeuFilme} alt="Gif of the react website movieslib" />
          <br />
          <a href="https://github.com/LucaBobbioDev/movies-app" target='blank'> -&gt; Repositório</a>
        </div>
        <div className='projects-container'>
          <h3>React JS - Consumindo API</h3>
          <img className='project-gif' src={ConsumoApi} alt="Gif of the react api" />
          <br />
          <a href="https://github.com/LucaBobbioDev/api-teste" target='blank'> -&gt; Repositório</a>
        </div>
        <div className='projects-container'>
          <h3>Vanilla JS - Verificador de Idade</h3>
          <img className='project-gif' src={Verificador} alt="Gif of the website age verifier" />
          <br />
          <a href="https://github.com/LucaBobbioDev/-VanillaJS-Verificador-de-Idade" target='blank'> -&gt; Repositório</a>
        </div>
        <div className='projects-container'>
          <h3>Flutter App - ToDo List</h3>
          <img className='project-gif' src={ToDoList} alt="Gif of the flutter app ToDo List" style={{width:250}}/>
          <br />
          <a href="https://github.com/LucaBobbioDev/Flutter-AppToDo" target='blank'> -&gt; Repositório</a>
        </div>
    </section>
  )
}
