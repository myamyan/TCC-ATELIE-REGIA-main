import './index.scss';
import { useCarrinho } from '../carrinhocontext/CarrinhoContext.js';
import { Link } from 'react-router-dom';
export default function Sacola() {
    const { carrinho } = useCarrinho();
    return (
        <div className="pagina-sacola">
            <div className='pagina-sacolas'>
                <div className="sacola-compras">


                    <h1> SACOLA</h1>
                    <div className="sacola-produtos">
            {carrinho.map((produto) => (
              <div className="produtos-sacola" key={produto.id_produto}>
                <img className="images" src={produto.imagem} alt={produto.nm_produto} />
                <div className="produtosacola">
                  <p>{produto.nm_produto}</p>
                  <p>
                    <strong>{produto.vl_preco}</strong>
                  </p>
                </div>
                <img className="lixo" src="/assets/images/Vector.png" alt="Remover" />
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

                    <div className="cupom">
                        <label>CUPOM</label>
                        <div className='adicionar'>
                            <input type="text" placeholder='CÓDIGO' />
                            <button>ADICIONAR</button>
                        </div>

                    </div>
                    <hr />
                    <div className="sub">
                        <div className="subtotal">
                            <p>SUBTOTAL</p>
                            <p>R$ 190,00</p>
                        </div>
                        <div className="entrega">
                            <p>ENTREGA</p>
                            <p>R$ 9,90</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <p>TOTAL</p>
                        <p>R$ 280,90</p>
                    </div>
                    <div className='botoes'>
                        <button className="claro">
                            <strong>CONFIRMAR PEDIDO</strong></button>
<Link to={'/pagamento'}>
<button className="escuro">
                            CONTINUAR COMPRANDO
                        </button>
</Link>                    
                    </div>

                </div>
            </div>
        </div>

    )

}