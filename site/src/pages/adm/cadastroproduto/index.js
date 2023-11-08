import './index.scss';

import Cabecalhoadm from '../../../components/cabecalhoadm';
import Rodape from '../../../components/rodape';

export default function Cadastroproduto() {


    return (

        <div className='tudo-cadastroproduto'>

            <div className='escrever'>

                <a> ← VOLTAR PARA PAINEL</a>
                <h1> CADASTRO DE PRODUTOS</h1>
            </div>


            <div className="input-orisontal1">

                <div className='direita-cadastroproduto-quadrado'>

                    <div className='escrita-quadrado'>
                        <input className="input-css" placeholder="Adicionar imagem +" />
                    </div>

                </div>

                <div className="inputs-adicionar">


                    <div className="adicionar">

                        <div className="input-nome">
                            <label> NOME</label>
                            <input className="input-nome1" text="Nome da peça" placeholder='Nome da peça' />
                        </div>

                        <div className="input-detalhes">
                            <label>DETALHES</label>
                            <input className="input-nome2" text="Nome da peça" placeholder='Outras características' />
                        </div>
                    </div>


                    <div className="inputs2">


                        <div className="input-designer">
                            <label> DESIGNER</label>
                            <select className="custom-select1" name="select-designer">
                                <option value="valor1">Valor 1</option>
                                <option value="valor2" selected>Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>
                            <button className='button-designer' type="button">adicionar novo designer</button>
                        </div>

                        <div className="input-categoria">
                            <label>CATEGORIA</label>
                            <select className="custom-select2" name="select-categoria">
                                <option value="valor1">Vestido 1</option>
                                <option value="valor2" selected>Vestido 2</option>
                                <option value="valor3">Vestido 3</option>
                            </select>
                            <button className='button-designer' type="button">adicionar nova categoria</button>
                        </div>

                        <div className="input-estoque">
                            <label>ESTOQUE</label>
                            <input number="estoque" placeholder='0' />
                        </div>

                    </div>


                    <div className="inputs3">

                        <div className="cor">
                            <label>COR</label>

                            <select className="custom-select1" name="select-categoria">
                                <option value="valor1">Verde</option>
                                <option value="valor2">Preto</option>
                                <option value="valor3">Amarelo</option>
                                <option value="valor4">Vermelho</option>
                            </select>
                            <button className='button-designer' type="button">adicionar nova cor</button>

                        </div>

                        <div className="tecido">
                            <label>TECIDO</label>
                            <select className="custom-select5" name="select-categoria">
                                <option value="valor1">tecido 4</option>
                                <option value="valor2">tecido 3</option>
                                <option value="valor3">tecido 2</option>
                                <option value="valor4">tecido 1</option>
                            </select>
                            <button className='button-designer' type="button">adicionar novo tecido</button>

                        </div>


                        <div className="tamanho">
                            <label>TAMANHO</label>
                            <select className="custom-select6" name="select-categoria">
                                <option value="valor1">tamanho 4</option>
                                <option value="valor2">tamanho 3</option>
                                <option value="valor3">tamanho 2</option>
                                <option value="valor4">tamano 1</option>
                            </select>
                            <button className='button-designer' type="button">adicionar novo tecido</button>

                        </div>


                    </div>

                    <div className="inputs4">

                        <div className="valor-produto">
                            <label> VALOR </label>
                            <input type="text" placeholder="R$ 00,00" />
                        </div>

                        <div className="valor-promocional-produto">
                            <label> VALOR PROMOCINAL </label>
                            <input type="text" placeholder="R$ 00,00" />
                        </div>

                    </div>

                    <div className="checkbox">

                        <input type="checkbox" />
                        <label> PROMOÇÃO</label>

                        <input type="checkbox" />
                        <label> DESTAQUE</label>

                        <input type="checkbox" />
                        <label> DISPONÍVEL</label>
                    </div>

                </div>
            </div>
            <div className="linha-produto"></div>

            <div className="botoes-produto">

                <button> DELETAR </button>

                <button> SALVAR </button>

            </div>

        </div>


    );

}