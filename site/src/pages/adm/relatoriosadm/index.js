
import './index.scss';

import { useState } from "react";
import { Link } from 'react-router-dom';

import CabecalhoAdm from "../../../components/cabecalhoadm";
import Rodape from "../../../components/rodape";


export default function RelatoriosAdm() {


    const [pag, setPag] = useState('RELATÓRIOS');

    return (

        <div className="pag-relatoriosadm">


            <CabecalhoAdm pag={pag} />

            <div className="content-relatoriosadm">

                <Link to="/"> <h3> ← VOLTAR </h3> </Link>

                <div className="graficos-relatoriosadm">

                    <div className="faixamarrom-relatoriosadm"> <h1> GRÁFICOS </h1> </div>

                    <div className="resto-relatoriosadm">

                        <div className="filtros-relatorioadm">

                            <h4> FILTRAR POR </h4>

                            <select>

                            <option value="" key=""> Categoria </option>
                            <option value="" key=""> Mensal </option>
                            <option value="" key=""> Anual </option>

                            </select>

                        </div>

                        <div className="imagens-relatorioadm">

                            <img src="/assets/images/graficorelatorios1bom.png" alt="" />
                            <img src="/assets/images/graficorelatorios2bom.png" alt="" />
                        </div>

                    </div>

                </div>

            </div>

            <Rodape/>

        </div>




    )

}