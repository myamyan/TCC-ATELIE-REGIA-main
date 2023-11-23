
import './index.scss';

export default function Produto() {
  return (

    <div className="pag-item">
    <div className="container">

    <div className='temapag'>
      <p> COLEÇÃO <span>/ SHORTS</span></p>
      </div>

      <div className="faixa1">

      <div className="imagens">

      {/* <div className='seta'>
          <p> ></p> */}

        <div className="imgprincipal">

    
        <img className="short" src="/assets/images/shortlinho.png"/>

        <div className='esfera-vector' >
        <img className="bolinha" src="/assets/images/bolinha.svg"/>
        <img className="bolinha" src="/assets/images/bolinha.svg"/>
        <img className="bolinha" src="/assets/images/bolinha.svg"/>
        <img className="bolinha" src="/assets/images/bolinha.svg"/>
        </div>


        </div>


      <div className="quadros">

      <img className="shortpeq" src="/assets/images/shortlinho.png"/>

      <div className="quadrado"></div>
      <div className="quadrado"></div>
    
      </div>

      </div>


      <div className="descricao">

      <h2> SHORT LINHO </h2>

      <p> Short de Linho na cor Off-White com botões em detalhe marrom.</p>

      <p className="bold"> TAMANHOS DISPONÍVEIS: </p>

      <h3> POR <span>R$ 100,00</span></h3>

    <div className="botaocompra">

    <div className="compras">
    <button className="comprar"> <p>COMPRAR</p> </button>
    <button className="quant"> <p> + 1 - </p></button>
    </div>

    <div className="favsacola">
    <button className="sacola"> <img src="/assets/images/sacolinha.png"/> </button>
    <button className="favorito"> <img src="/assets/images/coracao.svg"/> </button>
    </div>


    </div>

      </div>

      </div>


      <div className="faixa2">

      <div className="avaliacao">

      <div className="texto">
    
      <p className='esq'> Avaliação e Comentários </p>
      <p className='dir'> Perguntas e Respostas </p>
      
      </div>

      <div className='divisoria'>
      <div className='linha'>
    </div>
          </div>
    
      </div>

      <div className="comentario">

      <div className="user">
      <img className='icon-user' src="icon-usuario.png"/>

      <p> Anônimo </p>

      </div>

      <div className="quadrocoment">
        <input type='text'/>

        <div className='funcao-coment'>


        </div>
      </div>

      </div>


      </div>


    </div>

    </div>
  );
}


