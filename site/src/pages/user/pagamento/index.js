import Cabecalho3 from "../../../components/cabecalho3";
import Rodape from "../../../components/rodape";
import Produto from "../pagina-produto";
import "./index.scss";
import { get, set } from 'local-storage';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import storage from 'local-storage';

export default function Pagamento() {
  const [prod, setProd] = useState([]);
  const [sacola, setSacola] = useState([]);
 
const [total, setTotal]= useState(0);

  useEffect(() => {
    let itensSacola = storage('carrinho');
    console.log(itensSacola);
    setSacola(itensSacola);
Soma();
  }, [])

  // useEffect(() => {
  //   const itensvisualizar = storage('');
  //   setSacola(itensSacola);

  // }, []


  async function Soma() {
    let carrinho = storage('carrinho');
    let totalCalc = 0
    for (let cont = 0; cont < carrinho.length; cont++) {
      totalCalc = totalCalc + Number(carrinho[cont].vl_preco)

    }
    setTotal(totalCalc)
  }

  return (
    <div className="pagamento">
      <Cabecalho3 />

      <div class="separa">
        <h2 className="pagamento-titulo">PAGAMENTO</h2>

        <div className="container">

          <div className="container-preencher">
            <div className="tipos-pagamento">
              <p>CARTÃO DE CRÉDITO</p>
              <hr />
              <p>CARTÃO DE DÉBITO</p>
              <hr />
              <p> PIX</p>
              <hr />
              <p> BOLETO </p>
              <hr />
              <p>VALE-PRESENTE</p>
            </div>
            <hr />
            <div className="infos">
              <div className="separa">
                <div className="nome-cartao">
                  <label>NOME IMPRESSO NO CARTÃO</label>
                  <input type="text" />
                </div>
                <div className="validade">
                  <label>VALIDADE</label>
                  <div className="validade-sub">
                    <input placeholder="MÊS" type="text" />
                    <input placeholder="ANO" type="text" />
                  </div>
                </div>
              </div>
              <div className="outrosepara">
                <div className="numero-cartao">
                  <label>NUMERO IMPRESSO NO CARTÃO</label>
                  <input type="text" />
                </div>

                <div className="seguranca-sub">
                  <div className="codigo-seguranca">
                    <label>CÓDIGO DE SEGURANÇA</label>

                    <input type="text" />
                  </div>

                  <div className="parcelas">
                    <label>PARCELAS</label>

                    <input placeholder="1x SEM JUROS" type="text" />
                  </div>

                  <div className="cartao">
                    <label>BANDEIRA</label>
                    <select className="fale-sel">
                      <option>
                        <img src='/assets/images/shortinhos.png' alt='' />
                      </option>

                      <option value="" key="">
                        esse
                      </option>
                      <option value="" key="">
                        esse
                      </option>
                      <option value="" key="">
                        esse
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <h5> TOTAL: R${total + 9.9} </h5>
              <Link to={'/entrega'}>
                <a>IR PARA ENTREGA</a>

              </Link>

            </div>
          </div>
          <div className="sacola">
            <h1>ITENS</h1>

            {sacola.map((item) =>
              <div className="produtos">
                <img src={"http://localhost:5036/" + item.imagem}
                />
                <div className="texto-produtos">
                  <p>{item.nm_produto}</p>

                </div>
              </div>
            )}
          </div>

        </div>

        <Rodape />
      </div>


    </div>
  );
}