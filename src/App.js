import React from 'react';
import './css/style.css'
import logo from "./img/Davatar.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKhanda, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <div id="app">
      <div className="background"></div>
      <div className="header">
            <div className="logo-container">
               <img src={logo}></img>
            </div>
            <h1>Projetos PSPT</h1>
            <div className="logo-container">
               <img src={logo}></img>
            </div>
         
      </div>

      <div className="user-toolbar">
         <div className="user-teams user-button">
            <FontAwesomeIcon icon={faKhanda}></FontAwesomeIcon>
            <span>Times</span>
         </div>
         <div className="user-icon user-button">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span>Usuário</span>
         </div>
      </div>

      <div className="dashboard">

       
      </div>

      <div class="footer">
         
      </div>

   </div>

  );
}

export default App;
