import React from 'react'
import tribute from "./images/tribute.jpg"
import randomquote from "./images/random-quote-machine.png";
import cal from "./images/calc.png";
import map from "./images/map.jpg";
import wiki from "./images/wiki.png";
import tictactoe from "./images/tic-tac-toe.png";
import "./work.css";


const Work = () => {
  return (
    <div className='work'>
    <div className='container'>

        <h1 className='work__h1'>These are some of my projects</h1>
        <div className="project__list">
            <div className="project__item">
                <img src={tribute} className="image" alt="tribute page" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Tribute Page
                    <span className="code">/&gt;</span>
                  </p>
            </div>
            <div className="project__item">      
                <img src={randomquote} className="image" alt="random quote" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Random Quote Machine
                    <span className="code">/&gt;</span>
                  </p>
            </div>
            <div className="project__item">       
                <img src={cal} className="image" alt="calculator" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    JavaScript Calculator
                    <span className="code">/&gt;</span>
                </p>
            </div>
            <div className="project__item">
                <img src= {map} className="image" alt="map" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Map Data Across the Globe
                    <span className="code">/&gt;</span>
                  </p>
            </div>
            <div className="project__item">
                <img src={wiki} className="image" alt="wikipedia" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                    Wikipedia Viewer
                    <span className="code">/&gt;</span>
                  </p>
            </div>
            <div className="project__item">
                <img src={tictactoe} className="image" alt="tic tac toe game" />
                <p className="project-title">
                    <span className="code">&lt;</span>
                   Tic Tac Toe Game
                    <span className="code">/&gt;</span>
                  </p>
            </div>
        </div>
        <button className="show-btn">Show all &gt;</button>

        
   </div>
   </div>
  )
}

export default Work