import './index.scss';
import storage, { set } from 'local-storage';
import React, { useEffect, useState } from "react";
import Cabecalho2 from '../../../components/cabecalho2';
import Cabecalho3 from '../../../components/cabecalho3';
import Rodape from '../../../components/rodape';
import axios from 'axios';


export default function Detalhespedido() {

    const [prod, setProd] = useState('');
    const [sacola, setSacola] = useState([]);
  const [preco, setPreco] = useState(0);
  const [promocao, setPromocao]=useState(0);
  const [promocaobt, setPromocaobt]= useState(false);
  const [destaquebt, setDestaquebt]= useState(false);
  const [disponivel, setdisponivel]= useState(false);
  const[detalhes, setDetalhes]= useState('');
  const [estoque, setEstoque]= useState(0);
  const [designer, setDesigner]= useState(null);
const [total, setTotal]= useState(0);
 const[imagem,setImagem]= useState('');

    async function Total() {}
  
    useEffect(() => {
      let itensSacola = storage("carrinho");
      console.log(itensSacola);
      setSacola(itensSacola);
      Soma();
    setProd(itensSacola.nm_produto);
    }, []);

    console.log(prod);
  
    async function Soma() {
      let carrinho = storage("carrinho");
      let totalCalc = 0;
      for (let cont = 0; cont < carrinho.length; cont++) {
        totalCalc = totalCalc + Number(carrinho[cont].vl_preco);
      }
      setTotal(totalCalc);
    }

  
    async function Soma() {
      let carrinho = storage('carrinho');
      let totalCalc = 0
      for (let cont = 0; cont < carrinho.length; cont++) {
        totalCalc = totalCalc + Number(carrinho[cont].vl_preco)
  
      }
      setTotal(totalCalc)
    }

    async function finalizar () {
        const r= await axios.post('http://localhost:5036//user/cadastro/pedido')


    }
  

    async function finalizar() {
        try {
         
          const response = await axios.post('http://localhost:5036/user/cadastro/pedido');
          console.log(response.data); 
          alert('Compra finalizada!');
        } catch (error) {
          console.error('Compra finalizada:', error);
        
          alert('Compra finalizada, muito obrigada pela preferência:');
        }
      }
    return (

        <div className="tudo-detales">
<Cabecalho3/>

<div className='tudoo'>
<div className='tudo-detalhe'>

<div className='cima-detalhe'>

    <div className='escrita-detalhe'>
        <h1>DETALHES DO PEDIDO</h1>
    </div>

    <div className='items-detalhe'>


        <h1>ITENS</h1>

        {sacola.map((item) =>
<div className='detalhe-imagem1'>
<img src={"http://localhost:5036/" + item.imagem}
/>
<div className='detalhe-components'>
                <h1  > {item.nm_produto} </h1>
                <h2>{item.ds_cores}</h2>
                <h3>{item.vl_preco}</h3>

              
            </div>
</div>
)}

        <div >
           

            

        </div>


    </div>

</div>

</div>

<div className='detalhe-baixo'>

<div className='esquerda-detalhes'>
    <p>DETALHES DA COMPRA</p>

    <h1>PEDIDO Nº:  2942</h1>

    <h2>PEDIDO REALIZADO EM:  24/11/2023</h2>


        <h3>LOCAL DE ENTREGA:  Rua xxxxxx, xx - xxxxxx, São Paulo - SP, 04849-160</h3>


    <h4>ITENS  2</h4>
</div>

<div className='direita-detanhes'>


    <h1>PREVISÃO DE ENTREGA:   X DIAS ÚTEIS - QUINTA-FEIRA,  30 / 11 / 2023</h1>

    <h2>TOTAL:{total + 9.9}</h2>

    <h3>PARCELAS :   x2</h3>


</div>

</div>

<hr></hr>

<div className='detalhes-linha'>
<button onClick={finalizar}>FINALIZAR COMPRA</button>
</div>

</div>
           

<Rodape/>
        </div>
    )
}