import Endereco from '../endereco';
import { altCadPerfil, cadPerfil } from "../../../api/user/contaUsuario/usuario.js";
// import Favoritos from '../../../api/user/';
import Cabecalho1 from '../../../components/cabecalho1/index.js';
import Rodape from '../../../components/rodape/index.js';
import './index.scss';
import { useState } from 'react';

export default function DadosUsuario() {

        const[id, setID] = useState(0);
        const[nome, setNome] = useState('');
        const[data, setData] = useState('');
        const[email, setEmail] = useState('');
        const[senha, setSenha] = useState('');
        const[cpf, setCPF] = useState('');
        const[genero, setGenero] = useState('');
        const[celular, setCelular] = useState('');

        const [buscaPerfil, setBuscaPerfil] = ([]);

        // const {}


        async function salvarPerfil() {
          try {        
             const r = await cadPerfil(data, cpf, celular);
  
            alert('Usuário cadastrado com sucesso!!');
            }
    
           catch (err) {
              alert(err.response.data.erro);
          }
      }

      async function altCad() {
        try {        
           const r = await altCadPerfil(nome, email, senha, id);
          
          alert('Alterado com sucesso!!');
          }
  
         catch (err) {
            alert(err.response.data.erro);
        }
    }



  return (
    <div className="pag-conta-dados" >
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
       <a href='/dados'> <p> MEUS DADOS </p></a>
        </span>
        
        <span className='enderecos'>
        <a href='/endereco'> <p> ENDEREÇOS </p> </a>
        </span>

        <span className='pedidos'>
        <a id='pd'> <p> MEUS PEDIDOS </p> </a>
        </span>

        <span className='lista-desejos'>
        <a> <p> CARTÕES </p> </a>
        </span>

        <span className='lista-desejos'>
        <a id='lt' href='/favoritos'> <p> LISTA DE DESEJOS </p> </a>
        </span>

      </div>

      <div className='aba-alterar'>

      <div className='nome-aba'>
          <p> PERFIL </p>
          </div>
     
        <div className='info-mostrar'>

        <div className='perfil-info'>

          <div className='dados-esq'>
          <label>NOME: {nome}</label>
          <label>EMAIL: {email}</label>
          <label>SENHA: {senha}</label>
          <label>CPF: {cpf}</label>
          </div>

          <div className='dados-dir'>
          <label>NUM. CEL.: {celular}</label>
          <label>DATA NASC.: {data}</label>
          <label>GENÊRO: {genero}</label>
          </div>

          </div>

        </div>

        <div className='info'>

          <div className='inputs-cadperfil'>

            <div className='nome-aba'>
          <p> DADOS DE ACESSO </p>
          </div>
            
          <span className='nome'>
          <label> NOME </label>
           <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
           </span>

         <div>
          <span className='email'>
          <label> EMAIL </label>
          <input type='text'  value={email} onChange={e => setEmail(e.target.value)} />
          </span>  

          <span className='senha'>
          <label> SENHA </label>
          <input type='text' value={senha} onChange={e => setSenha(e.target.value)}/>          
          </span>

          </div>

            <div className='botao-salvar'>
          <button onclick={altCad}> SALVAR </button>
          </div>

          </div>

          <div className='inputs-altperfil'>

          <div className='nome-aba'>
          <p> OUTROS DADOS </p>
          </div>

            <div className='cpf-cel'>

              
          <span className='cpf'>
          <label> CPF </label>
          <input type='text'  value={cpf} onChange={e => setCPF(e.target.value)} />
          </span>


            <span className='celular'>
          <label> NÚMERO DE CELULAR </label>
          <input type='text'value={celular} onChange={e => setCelular(e.target.value)} onclick="Salvar();"/>
          </span>

            </div>

          <div className='dt-gn'>
           <span className='data'>
          <label> DATA DE NASC. </label>
          <input type='date'value={data} onChange={e => setData(e.target.value)} />
          </span>

          <span className='genero'>
          <label> GENÊRO </label>
          <input type='text' placeholder='*Campo Opcional' value={genero} onChange={e => setGenero(e.target.value)} />
          </span>

          </div>


          <div className='botao-salvar'>
        <button onclick={salvarPerfil}> SALVAR </button>
        </div>

          </div>
          </div>

       

          {/* <span className='endereco'>
          <label> ENDEREÇO </label>
          <input type='text'value={endereco} onChange={e => setEndereco(e.target.value)} onclick="Salvar();"/>
          </span> */}

       

       

{/* 
        <div className='botao-salvar'>
        <button > SALVAR </button>
        </div>
 */}

      </div>

      </div>

      </div>


     <Rodape>
     </Rodape>
    
    </div>
  );
}


