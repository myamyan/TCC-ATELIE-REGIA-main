import './index.scss';

export default function Detalhespedido() {


    return (

        <div className="tudo-detales">

            <div className='tudo-detalhe'>

                <div className='cima-detalhe'>

                    <div className='escrita-detalhe'>
                        <h1>DETALHES DO PEDIDO</h1>
                    </div>

                    <div className='items-detalhe'>
                        <h1>ITENS</h1>

                        <div className='detalhe-imagem1'>
                            <img src="/assets/images/image 49.png" alt="" />

                            <div className='detalhe-components'>
                                <h1> SHORT DE LINHO </h1>
                                <h2>OFF-WHITE</h2>
                                <h3>R$100,00</h3>

                                <button>VER PRODUTO</button>
                            </div>

                        </div>

                        <div className='detalhe-imagem1'>
                            <img src="/assets/images/image 389.png" alt="" />

                            <div className="detalhe-components">
                                <h1> SHORT DE LINHO </h1>
                                <h2>OFF-WHITE</h2>
                                <h3>R$100,00</h3>

                                <button>VER PRODUTO</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='detalhe-baixo'>

                <div className='esquerda-detalhes'>
                    <p>DETALHES DA COMPRA</p>

                    <h1>PEDIDO Nº:  2942</h1>

                    <h2>PEDIDO REALIZADO EM:  07/09/2023</h2>


                        <h3>LOCAL DE ENTREGA:  Rua xxxxxx, xx - xxxxxx, São Paulo - SP, 04849-160</h3>


                    <h4>ITENS  2</h4>
                </div>

                <div className='direita-detanhes'>


                    <h1>PREVISÃO DE ENTREGA:   X DIAS ÚTEIS - QUINTA-FEIRA,  14 / 08 / 2023</h1>

                    <h2>TOTAL:   R$280,90</h2>

                    <h3>PARCELAS :   x2</h3>


                </div>

            </div>

            <hr></hr>

            <div className='detalhes-linha'>
                <button>FINALIZAR COMPRA</button>
            </div>


        </div>
    )
    }