import React, { useState, useEffect, useRef } from "react";
import "./index.scss";

export default function Cabecalho2() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [inputVisivel, setInputVisivel] = useState(false);
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);


  useEffect(() => {
    if (!elementRef.current) 
      return;

    setWidth(elementRef.current.getBoundingClientRect().width);
  }); 

  const ve = () => {
    setMenuVisivel(!menuVisivel);
  };

  
  const vein = () => {
    setInputVisivel(!inputVisivel);
  };

  useEffect(() => {
    if (!elementRef.current) 
      return;

    setWidth(elementRef.current.getBoundingClientRect().width);
  }); 

  return (
    <div className="page">
      <div
        className={`cabecalho ${menuVisivel ? "aberto" : ""}`}
        style={{ maxWidth: menuVisivel && `calc(100% - ${width}px)`, transform: menuVisivel && `translateX(${width}px)`}}
      >
        <div className="cabecalho2">
          <div className="cab1-esquerda">
            <div className="menu-img">
              <img
                src="/assets/images/zabugaaa.png"
                alt=""
                id="menu1"
                className="menu1"
                onClick={ve}
              />
            </div>
            <h2  id="nome">ATELIÊ RÉGIA</h2>
            <div>
              <img src="/assets/images/logo.png" alt="" className="logo1" />
            </div>
          </div>
          <div className={`cab1-direita ${inputVisivel ? "move-to-side" : ""}`}>
          <div className={`lupa-escondida ${inputVisivel ? "move-to-side" : ""}`}>
            <img className="img1-cab1" src="/assets/images/lupis.png" alt="" onClick={vein} />
            {inputVisivel && (
              <div class="input-invisivel"  ref={elementRef} >
                
                <input
                  type="text"
              placeholder="Digite aqui"
              className="move-to-side" 
                />
              </div>
            )}

            </div>
            
            <h3>
              <a href="/login/cliente">LOGIN</a>
            </h3>
            <img
              className="img2-cab1"
              src="/assets/images/redfivediamonds.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {menuVisivel && (
        <div className="menu-overlay">
          <div ref={elementRef} className="menu-container">
            <img src="/assets/images/logo.png" />
            <div className="menu">
              <a>Novidades</a>
              <a>Feminino</a>
              <a>Masculino</a>
              <a>Acessórios</a>
              <a>Sale</a>
            </div>

            <div className="log">
              <img src="" alt="" className="" />
              <p>Login</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
