import './index.scss';

import Cabecalhoadm from '../../components/cabecalhoadm';
import Rodape from '../../components/rodape';

export default function Cadastroproduto() {


    return (

        <div className='pag-cadastroproduto'>


            <Cabecalhoadm />

            <div className="content">

                <div className="cima-produto">

                    <p> ← VOLTAR PARA PAINEL </p>

                    <h1> CADASTRO DE PRODUTOS </h1>

                </div>

                <div className="baixo-produto">

                    <div className="esquerda-produto">

                        <div>

                            <p> ADICIONAR IMAGEM + </p>

                            <input type="file" />

                        </div>

                    </div>


                    <div className="direita-produto">

                        <div className="nome-produto">

                            <p> NOME </p>

                            <input type="text" placeholder="Nome da peça" />

                        </div>

                        <div className="detalhes-produto">

                            <p> DETALHES </p>

                            <input type="text" placeholder="Outras características" />

                        </div>

                        <div className="linha1-produto">

                            <div className="designer-produto">

                                <p> DESIGNER </p>

                                <select>

                                    <option value="Flávia Aranha" key=""> Flávia Aranha </option>

                                </select>

                            </div>

                            <div className="categoria-produto">

                                <p> CATEGORIA </p>

                                <select>

                                    <option value="Flávia Aranha" key=""> Vestido </option>
                                    <option value="Flávia Aranha" key=""> Calça </option>
                                    <option value="Flávia Aranha" key=""> Camisetas </option>
                                    <option value="Flávia Aranha" key=""> Shorts </option>
                                    <option value="Flávia Aranha" key=""> Saias </option>
                                    <option value="Flávia Aranha" key=""> Casacos </option>

                                </select>

                            </div>

                            <div className="estoque-produto">

                                <p> ESTOQUE </p>

                                <input type="number" />

                            </div>


                        </div>


                        <div className="linha2-produto">

                            <div className="cor-produto">

                                <p> COR </p>

                                <select>

                                    <option value="Flávia Aranha" key="">   cor x </option>

                                </select>

                            </div>

                            <div className="tecido-produto">

                                <p> TECIDO </p>

                                <select>

                                    <option value="Flávia Aranha" key=""> Modal </option>
                                    <option value="Flávia Aranha" key=""> Algodão </option>
                                    <option value="Flávia Aranha" key=""> x </option>
                                    <option value="Flávia Aranha" key=""> y </option>
                                    <option value="Flávia Aranha" key=""> z </option>
                                    <option value="Flávia Aranha" key=""> t </option>

                                </select>

                            </div>

                            <div className="tamanho-produto">

                                <p> TAMANHO </p>

                                <select>

                                    <option value="Flávia Aranha" key=""> XPP </option>
                                    <option value="Flávia Aranha" key=""> PP </option>
                                    <option value="Flávia Aranha" key=""> P </option>
                                    <option value="Flávia Aranha" key=""> M </option>
                                    <option value="Flávia Aranha" key=""> G </option>
                                    <option value="Flávia Aranha" key=""> XGG </option>
                                    <option value="Flávia Aranha" key=""> 2XGG </option>
                                    <option value="Flávia Aranha" key=""> 3XGG </option>
                                    <option value="Flávia Aranha" key=""> 4XGG </option>
                                    <option value="Flávia Aranha" key=""> 5XGG </option>
                                </select>

                            </div>


                        </div>


                    </div>


                    <div className="linha3-produto">

                        <div className="valor-produto">

                            <p> VALOR </p>

                            <input type="text" placeholder="R$ 00,00" />

                        </div>

                        <div className="valor-promocional-produto">

                            <p> VALOR PROMOCINAL </p>

                            <input type="text" placeholder="R$ 00,00" />

                        </div>


                    </div>



                    <div className="linha4-produto">

                        <div className="promocao-produto">

                            <input type="checkbox" />

                            <p> PROMOÇÃO </p>

                        </div>

                        <div className="destaque-produto">

                            <input type="checkbox" />

                            <p> DESTAQUE </p>

                        </div>

                        <div className="disponivel-produto">

                            <input type="checkbox" />

                            <p> DISPONÍVEL </p>

                        </div>




                    </div>



                    <div className="linha-produto"></div>

                    <div className="botoes-produto">

                        <button> DELETAR </button>

                        <button> SALVAR </button>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>


    );

}