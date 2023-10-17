

import './index.scss';


export default function CabecalhoAdm(props) {


    return (

        <div className="cab-adm">


            <div className="all-adm">

                <div className="esquerda-cabadm">

                    <img src="/assets/images/zabugaaa.png" alt="" />

                    <h2> {props.pag} </h2>

                </div>

                <div className="direita-cabadm">


                    <img src="/assets/images/jinglebellrock.png" alt="" />

                    <div className='input-cabadm'>

                        <button> <img src="/assets/images/backinblack.png" alt="" /> </button>
                        <input type="text" />

                    </div>

                    <div className="c-cabadm">

                        <img src="/assets/images/icon-usuario.png" alt="" className="icon-usuario-cabadm"/>
                        <h3> ADMIN </h3>
                        <img src="/assets/images/arrastaparabaixo.png" alt="" className="arrastaparabaixo-cabadm"/>

                    </div>

                </div>

            </div>

        </div>

    )

}