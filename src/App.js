import React from 'react';
import './css/style.css'
import logo from "./img/Davatar.png";
import poketest from "./img/rayquaza-mega.png"


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

      {/*

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

      */}

      <h2>Poke-fighters</h2>

      <div className="dashboard">

         <div className="poke-container">

            <span class="poke-name">Poke do zé</span>

            <div className="content-container">
               <div class="img-container">
                  <img src={poketest}></img>
               </div>
               <div className="poke-info">
                  <div className="poke-types">
                     <span className="type1 type">Dragon</span>
                     <span className="type2 type">Flying</span>
                  </div>
               
                  <div className="function">
                     <span className="item">ico</span>
                     <span className="strong">/</span>
                     <span className="ability strong">Delta Stream</span>
                  </div>

               </div>
            </div>
         </div>

         <div className="poke-container">

            <span class="poke-name">Poke do zé</span>

            <div className="content-container">
               <div class="img-container">
                  <img src={poketest}></img>
               </div>
               <div className="poke-info">
                  <div className="poke-types">
                     <span className="type1 type">Dragon</span>
                     <span className="type2 type">Flying</span>
                  </div>
               
                  <div className="function">
                     <span className="item">ico</span>
                     <span className="strong">/</span>
                     <span className="ability strong">Delta Stream</span>
                  </div>

               </div>
            </div>
         </div>

         <div className="poke-container">

            <span class="poke-name">Poke do zé</span>

            <div className="content-container">
               <div class="img-container">
                  <img src={poketest}></img>
               </div>
               <div className="poke-info">
                  <div className="poke-types">
                     <span className="type1 type">Dragon</span>
                     <span className="type2 type">Flying</span>
                  </div>
               
                  <div className="function">
                     <span className="item">ico</span>
                     <span className="strong">/</span>
                     <span className="ability strong">Delta Stream</span>
                  </div>

               </div>
            </div>
         </div>
       
      </div>
      

      <div class="footer">
         <div className="footer-info">
            <span className="footer-title">Uma colaboração DokaMagi e Staff PSPT</span>
         </div>
         <div className="footer-info">
            <span>DokaMagi</span>
            <a href="#">Saiba mais!</a>
         </div>
         <div className="footer-info">
            <span>Pokemon Showdown</span>
            <a href="https://play.pokemonshowdown.com/portugus">Sala PT</a>
            <a href="https://pspt.boards.net">Forúm PT</a>
         </div>

      </div>

   </div>

  );
}

export default App;
