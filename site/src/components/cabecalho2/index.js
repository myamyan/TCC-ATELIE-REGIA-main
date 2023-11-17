import React, { useState, useEffect, useRef } from "react";
import "./index.scss";

export default function Cabecalho2() {
  const [menuVisivel, setMenuVisivel] = useState(false);

  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);


  useEffect(() => {
    if (!elementRef.current) 
      return;

    setWidth(elementRef.current.getBoundingClientRect().width);
  }); //empty dependency array so it only runs once at render

  const ve = () => {
    setMenuVisivel(!menuVisivel);
  };

  return (
    <div className="page">
      <div
        className={`cabecalho ${menuVisivel ? "aberto" : ""}`}
        style={{ maxWidth: menuVisivel && `calc(100% - ${width}px)`, transform: menuVisivel && `translateX(${width}px)`}}
      >
        <div className="cabecalho1">
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
          <div className="cab1-direita">
            <img className="img1-cab1" src="/assets/images/lupis.png" alt="" />
            <h3>
              <a id="log" href="/login/cliente">LOGIN</a>
            </h3>
            <img
            id="img2-cab1"
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
