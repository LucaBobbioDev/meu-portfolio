import React from 'react'

import { MainContent } from './components/MainContent/MainContent'
import { SideBar } from './components/SideBar/SideBar'

import './styles/app.sass'

function App() {
  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Olá, eu sou o <span>Luca Bobbio!</span></h1>
      </header>

      <SideBar/>
      <MainContent/>
      
      <footer className='app-footer'>
        <p>
          Luca Bobbio &copy; 2022
        </p>
      </footer>
    </div>
  );
}

export default App