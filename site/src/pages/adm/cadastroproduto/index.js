import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

export default function Cadastroproduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [promocao, setPromocao] = useState(0);
  const [promocaoBt, setPromocaoBt] = useState(false);
  const [destaque, setDestaque] = useState(false);
  const [disponivel, setDisponivel] = useState(false);
  const [detalhes, setDetalhes] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [designer, setDesigner] = useState("");
  const [novodesigner, setNovodesigner] = useState("");
  const [buscarDesigner, setBuscarDesigner] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [buscarCategorias, setBuscarCategorias] = useState([]);
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [cor, setCor] = useState("");
  const [buscarCores, setBuscarCores] = useState([]);
  const [novacor, setNovacor] = useState("");
  const [tecido, setTecido] = useState("");
  const [buscarTecidos, setBuscarTecidos] = useState([]);
  const [novotecido, setNovotecido] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [buscartamanho, setBuscartamanho] = useState([]);
  const [novotamanho, setNovotamanho] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("");
  const [produtoIdParaExcluir, setProdutoIdParaExcluir] = useState(null);
  const [imagem, setImagem] = useState(null);
  
  async function buscarCategoria() {
    try {
      const r = await axios.get(
        "http://localhost:5036/adm/cadastro/categoria",
        {
          categoria: categoria,
        }
      );

      const data = r.data;
      setBuscarCategorias(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5036/buscarcategoria"
        );
        const data = response.data;
        console.log("Dados recebidos:", data);
        setBuscarCategorias(data);
        setDadosCarregados(true);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  async function postarCategoria() {
    try {
      const r = await axios.post(
        "http://localhost:5036/adm/cadastro/categoria",
        {
          nome: novaCategoria,
        }
      );

      if (r.status === 200) {
        setCategoria(r.data.id_categorias);

        buscarCategoria();
      } else {
        console.error("Falha ao adicionar categoria.");
      }

      buscarCategoria();
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  async function buscarDesigners() {
    try {
      const r = await axios.get("http://localhost:5036/buscardesigner", {
        designer: novodesigner,
      });

      const data = r.data;
      setBuscarDesigner(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:5036/buscarcategoria"
        );
        const data = response.data;
        console.log("Dados recebidos:", data);
        setBuscarCategorias(data);
        setDadosCarregados(true);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  async function postardesigner() {
    try {
      const response = await axios.post(
        "http://localhost:5036/adm/cadastro/designer",
        {
          nome: novodesigner,
        }
      );

      if (response.status === 200) {
        setDesigner(response.data.id_designer);
        buscarDesigners();
      } else {
        console.error("Falha ao adicionar designer.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const responseCategorias = await axios.get(
          "http://localhost:5036/buscarcategoria"
        );
        const dataCategorias = responseCategorias.data;
        console.log("Dados de Categorias recebidos:", dataCategorias);
        setBuscarCategorias(dataCategorias);
        setDadosCarregados(true);

        const responseDesigners = await axios.get(
          "http://localhost:5036/buscardesigner"
        );
        const dataDesigners = responseDesigners.data;
        console.log("Dados de Designers recebidos:", dataDesigners);
        setBuscarDesigner(dataDesigners);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  async function salvardados() {
    try {
    const imagemId =await Salvarimagem(); 
  
      console.log("Dados enviados para o servidor:", {
        imagem,
        nome,
        preco,
        promocao,
        promocaoBt,
        destaque,
        disponivel,
        detalhes,
        estoque,
        designer,
        categoria,
        cor,
        tecido,
        tamanho,
      });
  
      const r = await axios.post(
        "http://localhost:5036/adm/cadastro/produto",
        {
          nome: nome,
          preco: preco,
          promocao: promocao,
          promocaobool: promocaoBt,
          destaquebool: destaque,
          disponivelbool: disponivel,
          detalhes: detalhes,
          estoque: estoque,
          designer: designer,
          categoria: novaCategoria,
        }
      );
  
      console.log("Resposta do servidor:", r.data);
      return r.data.id_produto;
    } catch (error) {
      console.error("Erro na solicitação:", error);
      console.log("Detalhes do erro:", error.response.data);
    }
  }
  

  async function buscarCore() {
    try {
      const response = await axios.get("http://localhost:5036/buscarcores");
      const data = response.data;
      setBuscarCores(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  useEffect(() => {
    buscarCore();
  }, []);

  async function postarCor() {
    try {
      const response = await axios.post(
        "http://localhost:5036/adm/cadastro/cores",
        {
          codhexa: novacor,
        }
      );
  
      if (response.status === 200) {
        setCor(response.data.id_cores);
        buscarCores();
      } else {
        console.error("Falha ao adicionar cor.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  async function buscartecido() {
    try {
      const response = await axios.get("http://localhost:5036/buscartecido");
      const data = response.data;
      setBuscarTecidos(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  useEffect(() => {
    buscartecido();
  }, []);

  async function postartecido() {
    try {
      const response = await axios.post(
        "http://localhost:5036/adm/cadastro/tecidos",
        {
          tipo: novotecido,
        }
      );
  
      if (response.status === 200) {
        setTecido(response.data.id_tecidos);
        buscarTecidos();
      } else {
        console.error("Falha ao adicionar tecido.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }



  async function buscartamanhos() {
    try {
      const response = await axios.get("http://localhost:5036/buscarTAMANHO");
      const data = response.data;
      setBuscartamanho(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  useEffect(() => {
   buscartamanhos();
  }, []);

  async function postartamanho() {
    try {
      const response = await axios.post(
        "http://localhost:5036/adm/cadastro/tamanho",
        {
          tamanho: novotamanho,
        }
      );
  
      if (response.status === 200) {
        setTamanho(response.data.id_tamanho);
        buscartamanho();
      } else {
        console.error("Falha ao adicionar tecido.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }
  async function Deletar(id) {
    try {
      if (id) {
        const resposta = await axios.delete(`http://localhost:5036/adm/produto/deletar/${id}`);
    
        if (resposta.status === 200) {
          console.log('Produto excluído com sucesso');
        } else {
          console.error('Falha ao excluir o produto');
        }
      } else {
        console.error('ID do produto para exclusão não definido');
      }
    } catch (erro) {
      console.error('Erro durante a exclusão:', erro);
    }
  }

  async function Salvarimagem() {
    try {
      const formData = new FormData();
      formData.append('imagem', imagem);
  
      const r = await axios.post(
        'http://localhost:5036/adm/cadastro/produto/imagem',
        formData
      );
  
      console.log('Resposta do servidor:', r.data);
    } catch (error) {
      console.error('Erro na solicitação:', error);
      console.log('Detalhes do erro:', error.response.data);
    }
  }
  
  

  return (
    <div className="tudo-cadastroproduto">
      <div className="escrever">
        <a> ← VOLTAR PARA PAINEL</a>
        <h1> CADASTRO DE PRODUTOS</h1>
      </div>

      <div className="input-orisontal1">
        <div className="direita-cadastroproduto-quadrado">
        <div class="custom-file-input-wrapper">
  <button
    class="custom-file-input-button"
    onClick={() => document.getElementById('inputImagem').click()}

  >
    ADICIONAR IMAGEM +
  </button>
  <input
  type="file"
  id="inputImagem"
  className="input-file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files.length > 0) {
      setImagem(e.target.files[0]);
    }
  }}
/>

</div>
{imagem && (
  <div className="imagem-preview">
    <img src={URL.createObjectURL(imagem)} className="image" alt="Imagem de pré-visualização"   />
  </div>
)}

        </div>

        <div className="inputs-adicionar">
          <div className="adicionar">
            <div className="input-nome">
              <label> NOME</label>
              <input
                className="input-nome1"
                type="text"
                placeholder="Nome da peça"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="input-detalhes">
              <label>DETALHES</label>
              <input
                className="input-nome2"
                type="text"
                placeholder="Outras características"
                value={detalhes}
                onChange={(e) => setDetalhes(e.target.value)}
              />
            </div>
          </div>

          <div className="inputs2">
            <div className="input-designer">
              <label> DESIGNER</label>
              <select
                className="custom-select1"
                name="select-designer"
                value={designer}
                onChange={(e) => setDesigner(e.target.value)}
              >
                 <option>Escolha um designer</option>
                {dadosCarregados &&
                  buscarDesigner.map((item) => (
                   
                    <option key={item.id_designer} value={item.id_designer}>
                      {item.nm_designer}
                    </option>

                  ))}
              </select>

              <div className="button-designer" type="button">
                <input
                  type="text"
                  class="muda"
                  placeholder="Adicionar novo designer"
                  value={novodesigner}
                  onChange={(e) => setNovodesigner(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      postardesigner();
                    }
                  }}
                />
              </div>
            </div>

            <div className="input-categoria">
              <label>CATEGORIA</label>
              <select
                onChange={(e) => setCategoria(e.target.value)}
                className="custom-select2"
                name="select-categoria"
              >
                <option>Selecione categoria</option>
                {dadosCarregados &&
                  buscarCategorias.map((item) => {
                    console.log("Mapeando item:", item);
                    return (
                      <option
                        key={item.id_categorias}
                        value={item.id_categorias}
                      >
                        {item.nm_categoria}
                      </option>
                    );
                  })}
              </select>
              <div className="button-designer" type="button">
                <input
                  type="text"
                  class="muda"
                  placeholder="Adicionar nova categoria"
                  value={novaCategoria}
                  onChange={(e) => setNovaCategoria(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      postarCategoria();
                    }
                  }}
                />
              </div>
            </div>

            <div className="input-estoque">
              <label>ESTOQUE</label>
              <input  placeholder="0" inputMode="numeric"  />
            </div>
          </div>

          <div className="inputs3">
            <div className="cor">
              <label>COR</label>
              <select
  className="custom-select1"
  value={cor}
  onChange={(e) => setCor(e.target.value)}
>
<option>Selecione designer</option>
  {dadosCarregados &&
    buscarCores.map((item) => (
      <option key={item.id_cores} value={item.id_cores}>
        {item.ds_hexa_decimal}
      </option>
    ))}
</select>
              <div className="button-designer" type="button">
              <input
    type="text"
    class="muda"
    placeholder="Adicionar nova cor"
    value={novacor}
    onChange={(e) => setNovacor(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        postarCor(undefined, true);
      }
    }}
  />
              </div>
            </div>

            <div className="tecido">
              <label>TECIDO</label>
              <select className="custom-select5">

              <option>Selecione tecido</option>
              {dadosCarregados &&
                  buscarTecidos.map((item) => {
                    console.log("Mapeando item:", item);
                    return (
                      <option
                        key={item.id_tecidos}
                        value={item.id_tecidos}
                      >
                        {item.ds_tipo}
                      </option>
                    );
                  })}

              </select>
              <div className="button-designer" type="button">
                <input
                  type="text"
                  class="muda"
                  placeholder="Adicionar novo tecido"
                  value={novotecido}
                  onChange={(e) => setNovotecido(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      postartecido();
                    }
                  }}
                />
              </div>
            </div>

            <div className="tamanho">
              <label>TAMANHO</label>
              <select className="custom-select6">
              <option>Selecione tamanho</option>
              {dadosCarregados &&
  buscartamanho.map((item) => {
    console.log("Mapeando item:", item);
    return (
      <option key={item.id_tamanho} value={item.id_tamanho}>
        {item.ds_tamanho}
      </option>
    );
  })}
              </select>
              <div className="button-designer" type="button">
                <input
                  type="text"
                  class="muda"
                  placeholder="Adicionar novo tamanho"
                  value={novotamanho}
                  onChange={(e) => setNovotamanho(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      postartamanho();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="inputs4">
            <div className="valor-produto">
              <label> VALOR </label>
              <input
                placeholder="R$ 00,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                inputMode="numeric" 
              />
            </div>

            <div className="valor-promocional-produto">
              <label> VALOR PROMOCINAL </label>
              <input
                placeholder="R$ 00,00"
                value={promocao}
                onChange={(e) => setPromocao(e.target.value)}
                  inputMode="numeric" 
              />
            </div>
          </div>

          <div className="checkbox">
            <input
               type="checkbox"
               checked={promocaoBt}
               onChange={() => setPromocaoBt(!promocaoBt)}
             
            />
            <label> PROMOÇÃO</label>

            <input
 type="checkbox"
 checked={destaque}
 onChange={(e) => setDestaque(e.target.checked)}
/>

            <label> DESTAQUE</label>

            <input

type="checkbox"
  checked={disponivel}
  onChange={(e) => setDisponivel(e.target.checked)}
/>
            <label> DISPONÍVEL</label>
          </div>
        </div>
      </div>

      <hr />

      <div className="botoes-produto">
      <button id="branco" onClick={Deletar}> DELETAR </button>
        <button id="preto" onClick={salvardados}>
          SALVAR
        </button>
      </div>
    </div>
  );
}
// import './index.scss';

// export default function Cadastroproduto() {

//     return (

//         <div className='tudo-cadastroproduto'>

//             <div className='escrever'>

//                 <a> ← VOLTAR PARA PAINEL</a>
//                 <h1> CADASTRO DE PRODUTOS</h1>
//             </div>

//             <div className="input-orisontal1">

//                 <div className='direita-cadastroproduto-quadrado'>

//                     <div className='escrita-quadrado'>
//                         <input className="input-css" placeholder="Adicionar imagem +" />
//                     </div>

//                 </div>

//                 <div className="inputs-adicionar">

//                     <div className="adicionar">

//                         <div className="input-nome">
//                             <label> NOME</label>
//                             <input className="input-nome1" text="Nome da peça" placeholder='Nome da peça' />
//                         </div>

//                         <div className="input-detalhes">
//                             <label>DETALHES</label>
//                             <input className="input-nome2" text="Nome da peça" placeholder='Outras características' />
//                         </div>
//                     </div>

//                     <div className="inputs2">

//                         <div className="input-designer">
//                             <label> DESIGNER</label>
//                             <select className="custom-select1" name="select-designer">
//                                 <option value="valor1">Valor 1</option>
//                                 <option value="valor2" selected>Valor 2</option>
//                                 <option value="valor3">Valor 3</option>
//                             </select>
//                             <button className='button-designer' type="button">adicionar novo designer</button>
//                         </div>

//                         <div className="input-categoria">
//                             <label>CATEGORIA</label>
//                             <select className="custom-select2" name="select-categoria">
//                                 <option value="valor1">Vestido 1</option>
//                                 <option value="valor2" selected>Vestido 2</option>
//                                 <option value="valor3">Vestido 3</option>
//                             </select>
//                             <button className='button-designer' type="button">adicionar nova categoria</button>
//                         </div>

//                         <div className="input-estoque">
//                             <label>ESTOQUE</label>
//                             <input number="estoque" placeholder='0' />
//                         </div>

//                     </div>

//                     <div className="inputs3">

//                         <div className="cor">
//                             <label>COR</label>

//                             <select className="custom-select1" name="select-categoria">
//                                 <option value="valor1">Verde</option>
//                                 <option value="valor2">Preto</option>
//                                 <option value="valor3">Amarelo</option>
//                                 <option value="valor4">Vermelho</option>
//                             </select>
//                             <button className='button-designer' type="button">adicionar nova cor</button>

//                         </div>

//                         <div className="tecido">
//                             <label>TECIDO</label>
//                             <select className="custom-select5" name="select-categoria">
//                                 <option value="valor1">tecido 4</option>
//                                 <option value="valor2">tecido 3</option>
//                                 <option value="valor3">tecido 2</option>
//                                 <option value="valor4">tecido 1</option>
//                             </select>
//                             <button className='button-designer' type="button">adicionar novo tecido</button>

//                         </div>

//                         <div className="tamanho">
//                             <label>TAMANHO</label>
//                             <select className="custom-select6" name="select-categoria">
//                                 <option value="valor1">tamanho 4</option>
//                                 <option value="valor2">tamanho 3</option>
//                                 <option value="valor3">tamanho 2</option>
//                                 <option value="valor4">tamano 1</option>
//                             </select>
//                             <button className='button-designer' type="button">adicionar novo tecido</button>

//                         </div>

//                     </div>

//                     <div className="inputs4">

//                         <div className="valor-produto">
//                             <label> VALOR </label>
//                             <input type="text" placeholder="R$ 00,00" />
//                         </div>

//                         <div className="valor-promocional-produto">
//                             <label> VALOR PROMOCINAL </label>
//                             <input type="text" placeholder="R$ 00,00" />
//                         </div>

//                     </div>

//                     <div className="checkbox">

//                         <input type="checkbox" />
//                         <label> PROMOÇÃO</label>

//                         <input type="checkbox" />
//                         <label> DESTAQUE</label>

//                         <input type="checkbox" />
//                         <label> DISPONÍVEL</label>
//                     </div>

//                 </div>

//             </div>

//             <hr></hr>

//             <div className="botoes-produto">

//                 <button id="branco"> DELETAR </button>

//                 <button id="preto"> SALVAR </button>

//             </div>
//         </div>

//     );

// }
