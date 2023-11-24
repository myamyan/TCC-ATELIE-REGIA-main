import "./index.scss";
import React, { useEffect, useState } from "react";
import CarrosselDeImagens from "../../../components/carrosel";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Cabecalho1 from "../../../components/cabecalho1/index";
import { ConsultarProdutos } from "../../../api/user/consultaprodutos";
import { ConsultarImagens, construirUrl } from "../../../api/chamadaimagem";
import Rodape from "../../../components/rodape";
import { useCarrinho } from '../carrinhocontext/CarrinhoContext.js';
import { get, set } from "local-storage";


export default function Produto() {
 const [carrinho, setCarrinho] = useState([]);
 const navigate = useNavigate();

  // async function Categorias( ) {
  //   try {
  //     const r= await axios.get("")
  //   } catch (error) {
      
  //   }
  // }


    const images = [
      "/assets/images/image_43.png",
      "/assets/images/image_47.webp",
      "/assets/images/image_48.png"
    ];
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    const [produtos, setProdutos] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  async function buscar() {
    let prod = await ConsultarProdutos();

    for (let cont = 0; cont < prod.length; cont++) {
      let img = await ConsultarImagens(prod[cont].id_produto);
      prod[cont].imagem = img.img_link;
    }

    setProdutos(prod);
  }


  function chamarImagem(imagem) {
   
    if (imagem) {
      return construirUrl(imagem);
    } else {
      
      
      return "/caminho/para/imagem/default.png";
    }
  }
  
  useEffect(() => {
    buscar();
  
  }, []);
  

// ........................................FILTROS..............................

function adicionarAoCarrinho(produto) {


  alert(`Produto ${produto.nm_produto} adicionado ao carrinho!`);
 
  navigate('/sacola');
}


async function carregarProdutosPorCategoria(categoria) {
  try {
    if (!categoria) {
      console.log('Categoria não definida.');
      return;
    }

    const response = await fetch(`http://localhost:5036/buscarcategoriafiltros?categoria=${categoria}`);
    const data = await response.json();

    if (Array.isArray(data)) {
      console.log('Produtos filtrados por categoria:', data);
      setProdutosFiltrados(data);
    } else {
      console.error('A resposta do servidor não contém um array de produtos:', data);
    }
    console.log('Categoria enviada para o servidor:', categoria);
  } catch (error) {
    console.error(error.message);
  }
}


async function filtroCategoria(categoriaDesejada) {
  console.log('Categoria desejada:', categoriaDesejada);
  setCategoriaSelecionada(categoriaDesejada);

  try {
    const response = await fetch(`http://localhost:5036/buscarcategoriafiltros?categoria=${categoriaDesejada}`);
    const data = await response.json();

    if (Array.isArray(data)) {
      console.log('Produtos filtrados por categoria:', data);
      setProdutos(data);
    } else {
      console.error('A resposta do servidor não contém um array de produtos:', data);
    }
  } catch (error) {
    console.error('Erro ao carregar produtos por categoria:', error);
  }
}


// .............................................


async function adicionarAoCarrinho(produto) {
  try {
    
    const r= await axios.post("http://localhost:5036//user/cadastro/pedido");

    const idDoPedido = r.id_pedido;
  } catch (error) {
    
  }
}

const adicionarAoCarrinhoENavegar = async (produto) => {
  try {
    let carrinho = get('carrinho');

    carrinho = carrinho ? carrinho : [];

    carrinho.push(produto);
  
    set('carrinho', carrinho);

    alert(`Produto ${produto.nm_produto} adicionado ao carrinho!`);
 
    navigate('/sacola');
  } catch (error) {
    console.error('Erro ao adicionar ao carrinho:', error);
  }
};


  return (
    <div className="container-produtos">

     

      <CarrosselDeImagens imagens={images} />

      {/* ............................................................ */}

      <div className="secao-container-ordem">
        <div className="faixa-ordem">
          <p id="titulo-ordem"> {produtos.length} PRODUTOS </p>
          <div className="secao-                      ordem">
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
              <div class="secoes-quadrado" onClick={() => carregarProdutosPorCategoria("Blusas")}>
              <input type="checkbox"></input>
                <a>Blusas</a>
              </div>
              <div class="secoes-quadrado" onClick={() => carregarProdutosPorCategoria("Calças")}>
  <input type="checkbox"></input>
  <a>Calças</a>
</div>

              <div class="secoes-quadrado">
              <input type="checkbox" onClick={() => carregarProdutosPorCategoria("Shorts")}></input>
                <a>Shorts</a>
              </div>
              <div class="secoes-quadrado">
              <input type="checkbox" onClick={() => carregarProdutosPorCategoria("Vestido")}></input><a>Vestidos</a>
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
              {produtos && produtos.length > 0 && produtos
  .filter((produto) => !categoriaSelecionada || produto.nm_categoria === categoriaSelecionada)
  .map((produto) => (
    <div class="produto" key={produto.id_produto} >
      <img src={chamarImagem(produto.imagem)} onClick={() => navigate('/pagina/item/' + produto.id_produto)} />
      <Link id="fixado" to="/sacola">
        <a onClick={() => adicionarAoCarrinhoENavegar(produto)}>
          COMPRAR
        </a>
      </Link>
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
      <Rodape/>
      </div>
      
    </div>
  );
}
