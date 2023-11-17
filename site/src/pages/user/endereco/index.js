import {
  addEndereco,
  altEndereco,
  verEndereco,
} from "../../../api/user/enderecoUsuario/endereco.js";
import Cabecalho1 from "../../../components/cabecalho1/index.js";
import Rodape from "../../../components/rodape/index.js";
import "./index.scss";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Enderecos() {
  const [id, setId] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [numres, setNumres] = useState("");
  const [cep, setCEP] = useState("");
  const [complemento, setComplemento] = useState("");
  const [dadosEnd, setDadosEnd] = useState([]);

  // const[buscaEndereco, setBuscaEndereco] = ([]);

  // const { id_endereco } = useParams();

  async function novoEndereco() {
    try {
      let r = await addEndereco(endereco, cep, complemento, numres);

      setDadosEnd(r);

      // setDadosEnd(...dadosEnd, []);
      // dadosEnd(...dadosEnd);

      alert("Endereço adicionado com sucesso!");
    } catch (err) {
      alert(err.response.data.erro);
    }
  }

  async function listarEndereco() {
    const resp = await verEndereco();
    // setBuscaEndereco(resp);
    console.log(resp);
  }

  async function buscandoEndereco() {
    try {
      const r = await verEndereco();
      setDadosEnd(r);
    } catch (err) {
      alert(err.response.data.erro);
    }
  }

  useEffect(() => {
    listarEndereco();
    buscandoEndereco();
  }, []);

  return (
    <div className="pag-conta-endereco">
      <Cabecalho1></Cabecalho1>

      <div className="container">
        <div className="rota-pag">
          <p>
            {" "}
            HOME / <span> MINHA CONTA </span>{" "}
          </p>
        </div>

        <div className="tit-pag">
          <h3> MINHA CONTA </h3>
        </div>

        <div className="conteudo">
          <div className="categorias">
            <span className="dados">
              <a href="/dados">
                {" "}
                <p> MEUS DADOS </p>{" "}
              </a>
            </span>

            <span className="enderecos">
              <a> ENDEREÇOS </a>
            </span>

            <span className="pedidos">
              <a> MEUS PEDIDOS </a>
            </span>

            <span className="lista-desejos">
              <a> CARTÕES </a>
            </span>

            <span className="lista-desejos">
              <a id="lt" href="/favoritos">
                {" "}
                LISTA DE DESEJOS{" "}
              </a>
            </span>
          </div>

          <div className="aba-add">
            <div className="nome-aba">
              <div className="titulo">
                <p> ENDEREÇOS CADASTRADOS </p>
              </div>

              <div className="total">
                <p> endereços </p>
              </div>
            </div>

            <div className="aba-alterar">
              <div className="add">
                <div className="input-add">
                  <div className="cep">
                    <label> CEP </label>
                    <input
                      type="text"
                      value={cep}
                      onChange={(e) => setCEP(e.target.value)}
                      onClick={(e) => setDadosEnd(e.target.value)}
                    />
                  </div>

                  <div className="compl">
                    <label> COMPLEMENTO </label>
                    <input
                      type="text"
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      onClick={(e) => setDadosEnd(e.target.value)}
                    />
                  </div>

                  <div className="num">
                    <label> N° </label>
                    <input
                      type="text"
                      value={numres}
                      onChange={(e) => setNumres(e.target.value)}
                      onClick={(e) => setDadosEnd(e.target.value)}
                    />
                  </div>
                </div>

                <div className="logr">
                  <div>
                    <label> ENDEREÇO </label>
                  </div>
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    onClick={(e) => setDadosEnd(e.target.value)}
                  />
                </div>

                <div className="botao-salvar">
                  <button onClick={novoEndereco}> SALVAR </button>
                </div>
              </div>
            </div>

            <div className="categ-end">
              <label> CEP </label>
              <label> COMPLEM.</label>
              <label> N° RESID. </label>
              <label> ENDEREÇO</label>
            </div>

            <div className="lista-scroll">
              <div>
                {dadosEnd.map((item) => (
                  <div className="info-end">
                    <p> {item.ds_cep} </p>

                    <div>
                      <p> {item.ds_complemento} </p>
                      <p id="num"> {item.nr_numero_res} </p>
                    </div>

                    <p id="log"> {item.ds_endereco} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape></Rodape>
    </div>
  );
}

export default Enderecos;
