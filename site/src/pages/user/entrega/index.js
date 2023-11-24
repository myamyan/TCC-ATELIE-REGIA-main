import Cabecalho1 from "../../../components/cabecalho1";
import Rodape from "../../../components/rodape";
import "./index.scss";
import storage from "local-storage";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cabecalho3 from "../../../components/cabecalho3";
import axios from "axios";


function Entrega() {
  const [produtoId, setProdutoId]= useState();
  const [numeroitens, set]= useState();

  // const [endereco, setEndereco] = useState('');

  // async function salvar() {
  //   try {
  //      const r = await addEndereco(endereco);
  //     //  storage('perfil alterado', r);
  //     alert
  //     ('Endereço adicionado com sucesso!');
  //     }

  //    catch (err) {
  //       alert(err.response.data.erro);
  //   }
  // }

  // function ocultar() {
  //   var element = document.getElementById("add");
  //   element.classList.add("hide");
  // }

  // function mostrar() {
  //   var element = document.getElementById("add");
  //   element.classList.remove("hide");
  // }


 
  



  return (
    <div className="pag-entrega">
 <Cabecalho3/>
      <div className="container">
        <div className="rota-pag">
          <p>
            {" "}
            HOME / <span> MINHA CONTA </span>{" "}
          </p>
        </div>

        <div className="tit-pag">
          <h3> ENTREGA </h3>
        </div>

        <div className="conteudo">
          <div className="aba-alterar">
            <div className="esq">
              <div className="esq-aba">
                <div className="titulo">
                  <p> DETALHES DA ENTREGA </p>
                </div>

                <div className="tres-inp">
                  <span className="input">
                    <label> CEP </label>
                    <input type="text" />
                  </span>

                  <span className="input">
                    <label> COMPLEMENTO </label>
                    <input type="text" />
                  </span>

                  <span className="input">
                    <label> N° </label>
                    <input type="number" />
                  </span>
                </div>

                <span className="input-end">
                  <label> ENDEREÇO </label>
                  <input type="text" />
                </span>

                <div className="entreg-tp">
                  <p> SELECIONE O TIPO DE ENTREGA </p>

                  <span className="cards">
                    <div className="card-esq">
                      <strong> SEDEX </strong>
                      <p>ENTREGA EM ATÈ X DIAS</p>
                    </div>

                    <div className="card-dir">
                      <strong> LOGGI </strong>
                      <p>ENTREGA EM ATÈ X DIAS</p>
                    </div>
                  </span>

                  <span className="botoes-ec">
                    <button id="econ"> ENTREGA ECONÔMICA </button>

                    <button id="exp"> ENTREGA EXPRESS </button>
                  </span>
                </div>
              </div>
            </div>

            <hr />

            <div className="dir-lad">
              <span className="dados">
                <span>
                  <img src="/assets/images/seta.png" />
                </span>

                <div className="info">
                  <strong>ENDEREÇO</strong>
                  <p> Rua xxxxxx, xx - xxxxxx, São Paulo - SP, 04849-160</p>
                </div>
              </span>

              <div className="form-end">
                <span id="linha-1">
                  <strong> ENDEREÇO </strong>
                  <p> Rua xxxxxx, xx - xxxxxx, São Paulo - SP, 04849-160 </p>
                </span>

                <span id="linha-2">
                  <div id="part1">
                    <strong> N° </strong>
                    <p> 12 </p>
                  </div>

                  <div id="part2">
                    <strong> COMPLEMENTO </strong>
                    <p> C</p>
                  </div>
                </span>

                <div id="linha-3">
                  <strong> TIPO DE ENTREGA </strong>
                  <p> SEDEX / ENTREGA EXPRESS </p>
                </div>
              </div>

              <div className="botao-salvar">
                <Link to={"/detalhespedido"}>
                  <button> CONFIRMAR </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape></Rodape>
    </div>
  );
}

export default Entrega;
