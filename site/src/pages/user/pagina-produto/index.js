import "./index.scss";
import React, { useEffect, useState } from "react";
import CarrosselDeImagens from "../../../components/carrosel";

import { ConsultarProdutos } from "../../../api/user/consultaprodutos";
import { ConsultarImagens, construirUrl } from "../../../api/chamadaimagem";
import Cabecalho2 from "../../../components/cabecalho2";
import Rodape from "../../../components/rodape";

export default function Produto() {


  // const [ imagens, setImagens ] = useState([]);
  // const [ id, setId ] = useState([]);

  async function buscar() {
    let prod = await ConsultarProdutos();

    for (let cont = 0; cont < prod.length; cont++) {
      let img = await ConsultarImagens(prod[cont].id_produto);
      prod[cont].imagem = img.img_link;
    }

    setProdutos(prod);

    console.log(prod);

    // setImagens(imagem)
  }

  function chamarImagem(imagem) {
    // if(typeof imagem == string)
    //   console.log('oi');
      console.log(imagem);
      return construirUrl(imagem)
  }

  useEffect(() => {
    buscar();
  }, []);



    const images = [
      "/assets/images/image_43.png",
      "/assets/images/image_47.webp",
      "/assets/images/image_48.png"
    ];

  const [produtos, setProdutos] = useState([]);
  const [ imagens, setImagens ] = useState([]);
  const [ id, setId ] = useState([]);

  const carregarProdutosPorCategoria = async (categoriaId) => {
    try {
      const response = await (categoriaId);

      if (Array.isArray(response)) {
        console.log('Produtos filtrados por categoria:', response);
        setProdutos(response);
      } else {
        console.error('A resposta do servidor não contém um array de produtos:', response);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  async function buscar() {
    let prod = await ConsultarProdutos();

    for (let cont = 0; cont < prod.length; cont++) {
      let img = await ConsultarImagens(prod[cont].id_produto);
      prod[cont].imagem = img.img_link;
    }

    setProdutos(prod);

    console.log(prod);

    // setImagens(imagem)
  }

  function chamarImagem(imagem) {
    // if(typeof imagem == string)
    //   console.log('oi');
      console.log(imagem);
      return construirUrl(imagem)
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="container-produtos">


      <CarrosselDeImagens imagens={images} />

      {/* ............................................................ */}

      <div className="secao-container-ordem">
        <div className="faixa-ordem">
          <p id="titulo-ordem">15 PRODUTOS</p>
          <div className="secao-ordem">
            <p id="titulo-ordem">ORDENAR POR </p>
            <div className="images">
              <img id="baixo" src="/assets/images/Arrow 1.png" alt="" />
              <img id="cima" src="/assets/images/Arrow 2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="secao-container-produtos">
        <div class="secao-container-filtros">
            <h6 id="filtra">
              <strong>FILTROS</strong>
            </h6>
            <div class="secoes" id="filtroSecoes">
              <h6 id='filtra'> 
                <strong>CATEGORIAS</strong>
              </h6>
              <div class="secoes-quadrado"onClick={() => carregarProdutosPorCategoria("Blusas")}>
              <input type="checkbox"></input>
                <a>Blusas</a>
              </div>
              <div class="secoes-quadrado" onClick={() => carregarProdutosPorCategoria("Calças")}>
              <input type="checkbox"></input> <a>Calças</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>Shorts</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input><a>Vestidos</a>
              </div>
            </div>

            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong> PREÇO</strong>
              </h6>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>Entre 50-100</a>
              </div>
            </div>
            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong> TAMANHO</strong>
              </h6>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>P</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>M</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>G</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>GG</a>
              </div>
            </div>
            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong>TECIDO</strong>{" "}
              </h6>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>Algodão Orgânico</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>

                <a>Tricô</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>Seda</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>Linho</a>
              </div>
            </div>

            <div class="secoes" id="filtroSecoes">
              <h6>
                <strong>COR</strong>
              </h6>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>
                
                  <a>Erva-mate</a>
                </a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>
           
                  <a>Madeira</a>
                </a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>
                 
                  <a>Off-white</a>
                </a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox"></input>
                <a>
                  <a>cobre</a>
                </a>
              </div>
            </div>
          </div>

          <hr />

          <div id="secao-produto" className="secao-produto">
            <div id="produtos" className="produtos">
              <div class="produto-pair">
                {produtos.map((produto) => (
                  <div class="produto">
                   
                      <img
                          // id={produto.id_produto}
                          src={ chamarImagem(produto.imagem)}
                          alt="oi"
                        />
                   
                    <h3 id="fixado">COMPRAR</h3>
                    <h1 id="nome-produto" className="nome-produto">
                      {produto.nm_produto}
                    </h1>

                    <p>
                      POR <strong>{produto.vl_preco}</strong>
                    </p>
                  </div>
                ))}
                
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
