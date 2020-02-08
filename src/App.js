import React from 'react';
import './css/style.css'
import logo from "./img/Davatar.png";
import poketest from "./img/rayquaza-mega.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKhanda, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <div id="app">
      <div className="background"></div>
      <header>

         <div className="flex-box header">
            <div className="img-container logo">
               <img src={logo}></img>
            </div>

            <h1>Projetos PSPT</h1>
            
            <div className="img-container logo">
               <img src={logo}></img>
            </div>
         </div>

         <div className="menu-drawer-background">
            <div className="button menu-drawer-button">
               <button>
                  <FontAwesomeIcon icon={faEllipsisH} size="3x"/>
               </button>
            </div>
         </div>

         <nav>

         </nav>

      </header>

      <main>
         <h2>Poke-fighters</h2>

         <div className="dashboard flex-box">

            <div className="poke-container">

               <span className="poke-name">Poke do zé</span>

               <div className="content-container flex-box">
                  <div className="img-container poke-icon-container">
                     <img src={poketest}></img>
                  </div>
                  <div className="poke-info flex-box">
                     <div className="flex-box flex-vertical-container">
                        <div className="poke-definitions flex-box">
                           <div className="level-display flex-box">
                              <span className="level-title">LVL</span>
                              <span className="level-value">100</span>
                           </div>
                           <div className="poke-types flex-box">
                              <span className="type type1">Dragon</span> 
                              <span className="type type2">Flying</span>
                           </div>
                        </div>
                     </div>
                     <div className="poke-utility">
                        <span className="item">ico</span>
                        <span className="strong">/</span>
                        <span className="ability strong">Delta Stream</span>
                     </div>

                  </div>
               </div>
            </div>

            <div className="poke-container">

               <span className="poke-name">Poke do zé</span>

               <div className="content-container flex-box">
                  <div className="img-container poke-icon-container">
                     <img src={poketest}></img>
                  </div>
                  <div className="poke-info flex-box">
                     <div className="flex-box flex-vertical-container">
                        <div className="poke-definitions flex-box">
                           <div className="level-display flex-box">
                              <span className="level-title">LVL</span>
                              <span className="level-value">100</span>
                           </div>
                           <div className="poke-types flex-box">
                              <span className="type type1">Dragon</span> 
                              <span className="type type2">Flying</span>
                           </div>
                        </div>
                     </div>
                     <div className="poke-utility">
                        <span className="item">ico</span>
                        <span className="strong">/</span>
                        <span className="ability strong">Delta Stream</span>
                     </div>

                  </div>
               </div>
            </div>

            <div className="poke-container">

               <span className="poke-name">Poke do zé</span>

               <div className="content-container flex-box">
                  <div className="img-container poke-icon-container">
                     <img src={poketest}></img>
                  </div>
                  <div className="poke-info flex-box">
                     <div className="flex-box flex-vertical-container">
                        <div className="poke-definitions flex-box">
                           <div className="level-display flex-box">
                              <span className="level-title">LVL</span>
                              <span className="level-value">100</span>
                           </div>
                           <div className="poke-types flex-box">
                              <span className="type type1">Dragon</span> 
                              <span className="type type2">Flying</span>
                           </div>
                        </div>
                     </div>
                     <div className="poke-utility">
                        <span className="item">ico</span>
                        <span className="strong">/</span>
                        <span className="ability strong">Delta Stream</span>
                     </div>

                  </div>
               </div>
            </div>

            <div className="poke-container">

               <span className="poke-name">Poke do zé</span>

               <div className="content-container flex-box">
                  <div className="img-container poke-icon-container">
                     <img src={poketest}></img>
                  </div>
                  <div className="poke-info flex-box">
                     <div className="flex-box flex-vertical-container">
                        <div className="poke-definitions flex-box">
                           <div className="level-display flex-box">
                              <span className="level-title">LVL</span>
                              <span className="level-value">100</span>
                           </div>
                           <div className="poke-types flex-box">
                              <span className="type type1">Dragon</span> 
                              <span className="type type2">Flying</span>
                           </div>
                        </div>
                     </div>
                     <div className="poke-utility">
                        <span className="item">ico</span>
                        <span className="strong">/</span>
                        <span className="ability strong">Delta Stream</span>
                     </div>

                  </div>
               </div>
            </div>

            <div className="poke-container">

               <span className="poke-name">Poke do zé</span>

               <div className="content-container flex-box">
                  <div className="img-container poke-icon-container">
                     <img src={poketest}></img>
                  </div>
                  <div className="poke-info flex-box">
                     <div className="flex-box flex-vertical-container">
                        <div className="poke-definitions flex-box">
                           <div className="level-display flex-box">
                              <span className="level-title">LVL</span>
                              <span className="level-value">100</span>
                           </div>
                           <div className="poke-types flex-box">
                              <span className="type type1">Dragon</span> 
                              <span className="type type2">Flying</span>
                           </div>
                        </div>
                     </div>
                     <div className="poke-utility">
                        <span className="item">ico</span>
                        <span className="strong">/</span>
                        <span className="ability strong">Delta Stream</span>
                     </div>

                  </div>
               </div>
            </div>
         
         </div>
      
      </main>

      <footer>
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

      </footer>

   </div>

  );
}

export default App;
