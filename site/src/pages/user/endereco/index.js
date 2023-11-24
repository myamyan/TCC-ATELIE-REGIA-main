
import { addEndereco, AssociarEndereco, verEndereco }  from '../../../api/user/enderecoUsuario/endereco.js';
import Cabecalho3 from "../../../components/cabecalho2/index.js";
import Rodape from "../../../components/rodape/index.js";
import "./index.scss";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import storage from "local-storage";
import axios from 'axios';

function Enderecos() {

  const [dados, setDados] = useState([]);
  const [exibir, setExibir] = useState([]);
  const [ endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [ complemento , setComplemento ] = useState('');
  const [ numres, setNumres ] = useState();
  const [infoFinal, setInfoFinal] = useState([]);

  async function cadastrarendereco(){

    
  const resposta = await axios.post("http://localhost:5036/user/cadastro/informacoes-entrega", {
    endereco: endereco,
    cep: cep,
    complemento: complemento,
    numres: numres
  });

  const dados = resposta.data;

    
    if(!endereco || endereco === undefined)
    alert('Erro ao cadastrar o endereço, por favor verificar se as informações estão corretas')

    const clienteId = storage('usuario-login').id

    const info = AssociarEndereco( dados.id, clienteId );

    setInfoFinal(info)

    alert( 'Endereço cadastrado com sucesso!' )

    exibirend();
  }


  async function exibirend(){

    const idcliente = storage('usuario-login').id

    let infoend = await verEndereco(idcliente);
    console.log(infoend)
    setExibir(infoend)


  }


  useEffect(() => {
    exibirend();
  }, []);


  return (
    <div className="pag-conta-endereco">
      <Cabecalho3/>

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
                <p> {exibir.length} endereços </p>
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
                      onChange={(e) => setCep(e.target.value)}

                    />
                  </div>

                  <div className="compl">
                    <label> COMPLEMENTO </label>
                    <input
                      type="text"
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}

                    />
                  </div>

                  <div className="num">
                    <label> N° </label>
                    <input
                      type="text"
                      value={numres}
                      onChange={(e) => setNumres(e.target.value)}

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

                  />
                </div>

                <div className="botao-salvar">
                  <button onClick={cadastrarendereco}> SALVAR </button>
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
                {exibir.map((item) => (
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

      <Rodape/>
    </div>
  );
}

export default Enderecos;
