
import { useParams } from 'react-router-dom';
import './index.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import Cabecalho3 from '../../../components/cabecalho3';
import Rodape from '../../../components/rodape';
import { useNavigate } from 'react-router-dom';
import { get, set } from "local-storage";


export default function Produtos() {
const [prod, setProd]= useState({});
const [carrinho, setCarrinho] = useState([]);
const navigate = useNavigate();
  const idProduto = useParams().id;

  

  async function produtoAqui() {
    const r = await axios.get('http://localhost:5036/adm/consulta/produto/' + idProduto);
    setProd(r.data[0]);
  }

  useEffect(() => {
    produtoAqui();
  }, [])


  
  

  const adicionarAoCarrinhoENavegar = async () => {
    try {
      let carrinho = get('carrinho');
  
      carrinho = carrinho ? carrinho : [];
  
      carrinho.push(prod);
    
      set('carrinho', carrinho);
  
      alert(`Produto ${prod.nm_produto} adicionado ao carrinho!`);
   
      navigate('/sacola');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };
  
  return (

    <div className="pag-item">

      <Cabecalho3/>
    <div className="container">

    <div className='temapag'>
      <p> COLEÇÃO <span>/ SHORTS</span></p>
      </div>

      <div className="faixa1">

      <div className="imagens">

    

        <div className="imgprincipal">

    
        <img className="bolinha" src={"http://localhost:5036/" + prod.img_link}/>

        <div className='esfera-vector' >
    
      
        </div>


        </div>


      <div className="quadros">

      <img className="shortpeq" src={"http://localhost:5036/" + prod.img_link}/>

      <div className="quadrado">  <img className="shortpeq" src={"http://localhost:5036/" + prod.img_link}/></div>
      <div className="quadrado">  <img className="shortpeq" src={"http://localhost:5036/" + prod.img_link}/></div>
    
      </div>

      </div>


      <div className="descricao">

      <h2> {prod.nm_produto} </h2>

      <p> Detalhes produtos: {prod.ds_detalhes}</p>

      <p className="bold"> TAMANHOS DISPONÍVEIS:{prod.bt_disponivel} </p>

      <h3> POR <span>{prod.vl_preco}</span></h3>

    <div className="botaocompra">

    <div className="compras">
    <button className="comprar" onClick={adicionarAoCarrinhoENavegar}>COMPRAR</button>
   
    </div>

   

    </div>

      </div>

      </div>


      <div className="faixa2">

      <div className="avaliacao">

      <div className="texto">
    
      <p className='esq'> Avaliação e Comentários </p>
  
      
      </div>

      <div className='divisoria'>
      <div className='linha'>
    </div>
          </div>
    
      </div>

      <div className="comentario">

      <div className="user">
      <img className='icon-user' src="/assets/images/anonimo.png"/>

      <p> Anônimo </p>

      </div>

      <div className="quadrocoment">
       
        <p>Produtos muito bons e que não são só bonitos, são sustentáveis.</p>
        <div className='funcao-coment'>


        </div>
      </div>

      </div>


      </div>

      <Rodape/>
    </div>

    </div>
  );
}


