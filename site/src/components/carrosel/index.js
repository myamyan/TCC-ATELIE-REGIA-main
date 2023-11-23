import React, { useState } from "react";
import "./index.scss";
import Cabecalho2 from "../cabecalho2";

const CarrosselDeImagens = ({ imagens }) => {
  const [slideAtual, setSlideAtual] = useState(0);

  const irParaProximoSlide = () => {
    setSlideAtual((slideAtual + 1) % imagens.length);
  };

  const irParaSlideAnterior = () => {
    setSlideAtual((slideAtual - 1 + imagens.length) % imagens.length);
  };

  const avancarNaClicada = () => {
    irParaProximoSlide();
  };

  const retrocederNaClicada = () => {
    irParaSlideAnterior();
  };

  return (
    <div className="carrossel-de-imagens">
      <div className="cabecalho-sobreposto">
      <Cabecalho2/>
      </div>
      <div className="slide">
        <div className="botao-navegacao botao-esquerda" onClick={retrocederNaClicada}>
          &lt;
        </div>
        <img
          className="imagem-do-slide"
          src={imagens[slideAtual]}
          alt={`Slide ${slideAtual + 1}`}
        />
        <div className="conteudo-sobre-imagens">
          <div className="direita">
            <p className="">INÍCIO / COLEÇÕES /</p>
          </div>
          <div className="esquerda">
            <p>NOVA COLEÇÃO PRIMAVERA/VERÃO 2024</p>
          </div>
        </div>
        <div className="botao-navegacao botao-direita" onClick={avancarNaClicada}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default CarrosselDeImagens;
