
import { Link } from 'react-router-dom';
import { useState } from 'react';

import CabecalhoAdm from '../../../components/cabecalhoadm';
import Rodape from '../../../components/rodape';

import './index.scss';


export default function ConsultaProdutos() {

    const [pag, setPag] = useState('PEDIDOS')

    return (

        <div className="pag-consultapsadm">


            <CabecalhoAdm pag={pag} />

            <div className="content-consultapadm">

                <Link to="/adm/relatorios"> <h3> ← VOLTAR </h3> </Link>

                <div className="corpo-consultapadm">

                    <div className="botoes-consultapadm">

                        <div className="botao-esquerda-consultapadm">

                            <button> EM ANDAMENTO </button>

                        </div>

                        <div className="botao-direita-consultapadm">

                            <button> CONCLUÍDOS </button>

                        </div>

                    </div>

                    <div className='content-consultapadm'>


                        <div className="filtros-consultapadm">

                            <h4> FILTRAR POR </h4>

                            <select>

                                <option value="" key="">Selecione um filtro</option>
                                <option value="" key=""> Tudo </option>
                                <option value="" key=""> Data: atual → antigo </option>
                                <option value="" key=""> Data: atual ← antigo </option>

                            </select>

                        </div>

                        <div className="produtos-consultados-consultapadm">

                            <div className="titulos-consultapadm">

                                <h4> DATA DO PEDIDO </h4>

                                <h4> CATEGORIA </h4>

                                <h4> ITEM </h4>

                                <h4> TOTAL </h4>

                                <h4> MÉTODO </h4>

                                <h4> ENTREGA </h4>

                                <div className="final-consultapadm">

                                    <h4> SITUAÇÃO PAGM. </h4>

                                </div>

                            </div>

                            <div className='linha-consultapadm'></div>

                            <div className="results-consultapadm">

                                <div className="result1">

                                    <p>21 Jul, 2023</p>

                                    <p>Calçados/ <br /> Botas</p>

                                    <div>

                                        <img src="/assets/images/butilmetiletilpropano.png" alt="" />

                                        <div className="sublinhado">
                                            <p>0345 Bota Feminina Preto - 1x</p>
                                        </div>

                                    </div>

                                    <p>R$89,90</p>

                                    <p>Cartão de Débito</p>

                                    <p>01 Ago, 2023 (A caminho)</p>

                                    <div className="colorido">
                                        <p>Aprovado</p>
                                    </div>

                                </div>

                                <div className="result1">

                                    <p>29 Jul, 2023</p>

                                    <p>Partes de baixo/Short</p>

                                    <div>

                                        <img src="/assets/images/shortinhos.png" alt="" />

                                        <div className="sublinhado">
                                            <p>09675 Short Jeans Marrom Terra - 1x</p>
                                        </div>

                                    </div>

                                    <p>R$105,00</p>

                                    <p>Cartão de Crédito (x2)</p>

                                    <p>-------</p>

                                    <div className="colorido">
                                        <p>Pendente</p>
                                    </div>

                                </div>

                                <div className="result1">

                                    <p>29 Jul, 2023</p>

                                    <p>Partes de baixo/Short</p>

                                    <div>

                                        <img src="/assets/images/shortinhos.png" alt="" />

                                        <p>09675 Short Jeans Marrom Terra - 1x</p>

                                    </div>

                                    <p>R$105,00</p>

                                    <p>Cartão de Crédito (x2)</p>

                                    <p>-------</p>

                                    <p>Pendente</p>


                                </div>


                                


                                <div className="result1">

                                    <p>29 Jul, 2023</p>

                                    <p>Partes de baixo/Short</p>

                                    <div>

                                        <img src="/assets/images/shortinhos.png" alt="" />

                                        <p>09675 Short Jeans Marrom Terra - 1x</p>

                                    </div>

                                    <p>R$105,00</p>

                                    <p>Cartão de Crédito (x2)</p>

                                    <p>-------</p>

                                    <p>Pendente</p>


                                </div>



                            </div>



                        </div>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>

    )

}