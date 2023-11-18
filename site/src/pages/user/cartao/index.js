
// import { addEndereco, altEndereco, verEndereco } from '../../api/enderecoUsuario/endereco.js';
import Cabecalho1 from '../../components/cabecalho1/index.js';
import Rodape from '../../components/rodape/index.js';
import './index.scss';
import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from 'react-router-dom';



function Cartao() {

      
  return (
    <div className="pag-conta-cartao">
        <Cabecalho1>
      </Cabecalho1>
      
      <div className='container'>

      <div className='rota-pag'>

      <p> HOME / <span> MINHA CONTA </span> </p>

      </div>

      <div className='tit-pag'>

        <h3> MINHA CONTA </h3>
      </div>

      <div className='conteudo'>

      <div className='categorias'>

        <span className='dados'>
       <a href='/dados'> <p> MEUS DADOS </p> </a>
        </span>
        
        <span className='enderecos'>
        <a> ENDEREÇOS </a>
        </span>

        <span className='pedidos'>
        <a> MEUS PEDIDOS </a>
        </span>

        <span className='lista-desejos'>
        <a> CARTÕES </a>
        </span>

        <span className='lista-desejos'>
        <a id='lt' href='/favoritos'> LISTA DE DESEJOS </a>
        </span>

      </div>

    <div className='aba-add'>

    <div className='nome-aba'>
        <div className='titulo'>
        <p> CARTÕES CADASTRADOS </p>
        </div>

        <div className='total'>
           <p> 2  </p>
        </div>
        </div>

      <div className='aba-alterar'>

      <div className="visual-cartao">

    {/* <img className='short-jeans' src='/assets/images/exemplo.png'/> */}

    <div className='info-item'>
    <label> Nome </label>
    <label> Numero  </label>
    <label> Nome </label>
    </div>




          <div className='logr'>
          <div>
          <label> ENDEREÇO </label>
          </div>
          <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)} onClick={e => setDadosEnd(e.target.value)}/>
          </div>

          

          <div className='botao-salvar'>
        <button onClick={novoEndereco}> SALVAR </button>
        </div>

         </div>

       </div>

       <div className='categ-end'>
          <label> CEP </label>
          <label> COMPLEM.</label>
          <label> N° RESID. </label>
          <label> ENDEREÇO</label>
          </div>
          

       <div className='lista-scroll'>

        
        
       <div>
    
            

         
       </div>

      </div>

      </div>

   </div>
   </div>


     <Rodape>
      
     </Rodape>
    </div>
  );
}

export default Enderecos;
