import './index.scss';

export default function Sacola() {

    return (
        <div className="pagina-sacola">
            <div className='pagina-sacolas'>
                <div className="sacola-compras">


                    <h1> SACOLA</h1>
                    <div className="sacola-produtos">
                        <div className="produtos-sacola">
                            <img className="images" src="/assets/images/image 49.png" alt="" />
                            <div className="produtosacola">

                                <p>SHORT DE LINHO OFF -WHITE</p>

                                <p><strong>R$100,00</strong></p>

                            </div>
                            <img className='lixo' src="/assets/images/Vector.png" alt="" />
                            <div className='maismenos'>
                                
                            <button >-</button>
                            <p>1</p>
                            <button>+</button>
        
                            </div>
                            

                        </div>
                        <div className="produtos-sacola">
                            
                            <img className="images" src="/assets/images/image 49.png" alt="" />
                            
                            <div className="produtosacola">

                                <p>SHORT DE LINHO OFF -WHITE</p>

                                <p><strong>R$100,00</strong></p>

                            </div>
                            <img className='lixo' src="/assets/images/Vector.png" alt="" />
                            <div className='maismenos'>
                            <button >-</button>
                            <p>1</p>
                            <button>+</button>
                            </div>

                
                        </div>
                        <div className="produtos-sacola">
                            
                            <img className="images" src="/assets/images/image 49.png" alt="" />
                            
                            <div className="produtosacola">

                                <p>SHORT DE LINHO OFF -WHITE</p>

                                <p><strong>R$100,00</strong></p>

                            </div>
                            <img className='lixo' src="/assets/images/Vector.png" alt="" />
                            <div className='maismenos'>
                            <button >-</button>
                            <p>1</p>
                            <button>+</button>
                            </div>

                
                        </div>
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

                        <button className="escuro">
                            CONTINUAR COMPRANDO
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )

}