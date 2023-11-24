import './index.scss';
import { useCarrinho } from '../carrinhocontext/CarrinhoContext.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { get, set } from 'local-storage';
import Cabecalho3 from '../../../components/cabecalho3';
import Rodape from '../../../components/rodape';


export default function Sacola() {
    const [prod, setProd] = useState([]);
    const [total, setTotal] = useState([]);

    let carrinho = get('carrinho');

    useEffect(() => {
        setProd(carrinho);
    }, []);

    useEffect(() => {
        Soma();
    }, [carrinho]);

 

    async function Deletar(index) {
        let inicio = carrinho.slice(0, index);
        let final = carrinho.slice(index + 1);

        carrinho = [...inicio, ...final];

        set('carrinho', carrinho);
        setProd(carrinho);
    }


    // async function adicionarcompra() {
    //     const r = await axios.post('http://localhost:5036/user/cadastro/pedido')
    // }

async function Soma() {
    let totalCalc = 0
    for(let cont = 0; cont < carrinho.length; cont++){
        totalCalc = totalCalc + Number(carrinho[cont].vl_preco)
        
    }
    setTotal(totalCalc);
}



    return (
        <div className="pagina-sacola">
            <Cabecalho3 />
            <div className='pagina-sacolas'>
                <div className="sacola-compras">
                    <h1> SACOLA</h1>
                    <div className="sacola-produtos">
                        {prod.map((produto, index) => (
                            <div className="produtos-sacola">
                                <img className="images" src={"http://localhost:5036/" + (produto.imagem ? produto.imagem : produto.img_link)} alt={produto.nm_produto} />
                                <div className="produtosacola">
                                    <p>{produto.nm_produto}</p>
                                    <p>
                                        <strong>{produto.vl_preco}</strong>
                                    </p>
                                </div>
                                <img className="lixo" src="/assets/images/Vector.png" alt="Remover" onClick={() => Deletar(index)} />
                                <div className="maismenos">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="sacola-confirmacao">

                  
                    <hr />
                    <div className="sub">
                        <div className="subtotal">
                            <p></p>
                            <p>R$ {total}</p>
                        </div>
                        <div className="entrega">
                            <p>ENTREGA</p>
                            <p>R$ 9,90</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <p>TOTAL</p>
                        <p>R$ {total+9.9}</p>
                    </div>
                    <div className='botoes'>
                        {/* <button className="claro">
                           <strong>CONFIRMAR PEDIDO</strong></button>  */}
                        <Link to={'/pagamento'}>
                            <button id='escuro' className="escuro">
                                CONTINUAR COMPRANDO
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
            <Rodape />
        </div>

    )

}