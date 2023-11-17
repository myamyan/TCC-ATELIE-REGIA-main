// import { addEndereco, altEndereco } from '../../api/enderecoUsuario/endereco.js';
import Cabecalho1 from '../../../components/cabecalho1';
import Rodape from '../../../components/rodape';
import './index.scss';
import { useState } from 'react';



function Favoritos() {

      const [endereco, setEndereco] = useState('');
      const [numero, setNumero] = useState('');
      const [cep, setCEP] = useState('');
      const [complem, setComplem] = useState('');

      // async function salvar() {
      //   try {        
      //      const r = await addEndereco(endereco, cep, complem, numero);
      //     //  storage('perfil alterado', r);
      //     alert 
      //     ('Endereço adicionado com sucesso!');
      //     }
  
      //    catch (err) {
      //       alert(err.response.data.erro);
      //   }
      // }

      // async function alterar() {
      //   try {        
      //      const r = await altEndereco(endereco, cep, complem, numero, id);
        
  
      //     alert 
      //     ('Endereço adicionado com sucesso!');
      //     }
  
      //    catch (err) {
      //       alert(err.response.data.erro);
      //   }
      // }


      
  return (
    <div className="pag-lista-favoritos">
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
        <a href='/endereco'> ENDEREÇOS </a>
        </span>

        <span className='pedidos'>
        <a id='pd'> MEUS PEDIDOS </a>
        </span>

        <span className='lista-desejos'>
        <a> <p> CARTÕES </p> </a>
        </span>

        <span className='lista-desejos'>
        <a id='lt'> <p> LISTA DE DESEJOS  </p></a>
        </span>

      </div>

    <div className='aba-fav'>

    <div className='nome-aba'>
        <div className='titulo'>
        <p>LISTA DE FAVORITOS </p>
        </div>

        <div className='total'>
           <p> 2 itens </p>
        </div>
        </div>

      <div className='item-fav'>

        <img className='short-jeans' src='/assets/images/exemplo.png'/>

        <div className='info-item'>
        <p className='produto'> SHORT JEANS TERRA </p>
        <p className='preco'> R$169,00 </p>
        </div>

        <div className='botao-ver'>
            <button> VER PRODUTO </button>
            </div>
      

         </div>

       </div>

      </div>
{/* 
         <div className='linha'></div> */}
     
        


         </div>

     <Rodape>
      
     </Rodape>
    </div>
  );
}

export default Favoritos;

