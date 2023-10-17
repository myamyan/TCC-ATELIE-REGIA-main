
import { Link } from 'react-router-dom';
import { useState } from 'react';

import CabecalhoAdm from '../../components/cabecalhoadm';
import Rodape from '../../components/rodape';

import './index.scss';


export default function ConsultaProdutos() {

    const [pag, setPag] = useState('PRODUTOS')

    return (
        
        <div className="pag-consultapsadm">


            <CabecalhoAdm pag={pag} />

            <div className="content-consultapadm">

                <Link to="/adm/relatorios"> <h3> ← VOLTAR </h3> </Link>

                <div className="corpo-consultapadm">

                    

                </div>

            </div>

            <Rodape/>

        </div>

    )

}