import Rodape from "../../../components/rodape";
import React, { useState } from "react";
import "./index.scss";
import CabecalhoAdm from '../../../components/cabecalhoadm';
export default function Painel() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cabecalhoPosition, setCabecalhoPosition] = useState("normal");

  const ve = () => {
    if (menuVisible) {
      setCabecalhoPosition("normal");
    } else {
      setCabecalhoPosition("direita");
    }
    setMenuVisible(!menuVisible);
  };


  const [pag, setPag] = useState('PAINEL');
  return (
    <div className="painel-adm">
       <CabecalhoAdm pag={pag} />

      <div className="painel">
        <div className="organiza">
          <div className="container">
            <div className="topo">
              <div className="claro">
                <h1>VISITAS</h1>
                <h2>350 mensais</h2>
              </div>
              <div className="escuro">
                <h1> PEDIDOS</h1>
                <h2>1,500 mensais</h2>
              </div>
              <div className="claro">
                <h1>VENDAS</h1>
                <h2>2,100 mensais</h2>
              </div>
              <div className="escuro">
                <h1> USUÁRIOS</h1>
                <h2>1,900 mensais</h2>
              </div>
            </div>
            <div className="container-painel">
              <div className="divide">
                <div className="grafico">
                  <img src="/assets/images/grafico.png" alt="" />
                </div>
                <div className="graficos">
                  <div className="redondo">
                    <img src="/assets/images/graficoredondo.png" alt="" />
                  </div>
                  <div className="circulo">
                    <img src="/assets/images/circulo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
