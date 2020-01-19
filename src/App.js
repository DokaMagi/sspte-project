import React from 'react';
import './css/style.css'
import logo from "./img/giphy.gif";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faIceCream, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <header>
      <div className="doka-info">
         <h1>
            <div className="logo-container">
               <img src={logo}></img>
            </div>
         </h1>
         
         <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faBars} />
         </div>

         <div className="transparency-background menu-dectived"></div>

         <div className="main-header-nav menu-deactived">
            <div className="mobile-only">
               <div className="mobile-nav-back">
                  <span>Voltar</span>
                  <div className="mobile-nav-icon">   
                     <FontAwesomeIcon icon={faBars} />
                  </div>
               </div>

               <nav>
                  <ul>
                     <li><a href="#" id="nav-home">Página Inicial</a></li>
                     <li><a href="#" id="nav-poke">Poke-fighters</a></li>
                     <li><a href="#" id="nav-more">Saiba Mais</a></li>
                  </ul>
               </nav>
            
            </div>

            <nav>
               <ul>
                  <li><a href="https://play.pokemonshowdown.com">Entre da Sala do PS</a></li>
                  <li><a href="#">Me conheça</a></li>
               </ul>
            </nav>
         </div>

      </div>
      <div className="sspte-nav">
         <nav>
            <ul>
               <li>
                  <a href="#" id="nav-home">
                     <div className="sspte-nav-icon">
                        <FontAwesomeIcon icon={faHome} />
                     </div>
                     <span>Página Inicial</span>
                  </a>
               </li>
               <li><a href="#" id="nav-poke">
                  <div className="sspte-nav-icon">
                        <FontAwesomeIcon icon={faIceCream} />
                     </div>
                     <span>Poke-fighters</span>
                  </a></li>
               <li><a href="#" id="nav-more">
                  <div className="sspte-nav-icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                     </div>
                     <span>Saiba Mais</span>
                  </a></li>
            </ul>
         </nav>
      </div>
   </header>
  );
}

export default App;
