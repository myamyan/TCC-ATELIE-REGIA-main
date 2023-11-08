import './index.scss';

import { Link } from 'react-router-dom';


export default function Menu() {

    return(

        <div className="all-menu">

        <div className="cima-menu"> <img src="/assets/images/logo.png" alt="" /> </div>

        <div className="meio-menu">
            
            <Link to='/produtos/novidades'> Novidades </Link>
            <Link to='/produtos/feminino'> Feminino </Link>
            <Link to='/produtos/masculino'> Masculino </Link>
            <Link to='/produtos/acessorios'> Acessórios </Link>
            <Link to='/produtos/sale'> Sale </Link>


            </div>

            <div className="baixo-menu">

                <img src="/assets/images/user.svg" alt="" />
                <p>Login</p>

            </div>

        </div>

    );


}