import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export default function CabecalhoAdm(props) {

    const [menuVisible, setMenuVisible] = useState(false);
    const [cabecalhoPosition, setCabecalhoPosition] = useState("normal");
  
    const ve = () => {
      if (menuVisible) {
        setCabecalhoPosition("normal");
      } else {
        setCabecalhoPosition("direita");
      }
      setMenuVisible(!menuVisible);
    };
  
    return (

        <div className="cab-adm">

<div className={`cabecalho-painel ${cabecalhoPosition}`}
        style={{width: menuVisible && "calc(100% - 200px)"}}>
        <div className="menu-icon">
          <img
            className="menu1"
            onClick={ve}
            src="/assets/images/zabugaaa.png"
            alt=""
          />
      <p>  {props.pag} </p>
        </div>

        <div className="alerta">
          <img src="/assets/images/sino.png" alt="" />

          <div className="admin">
            <img src="/assets/images/adm.png" alt="" />
            <p>ADMIN</p>
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="menu-infos-container">
          <div className="menu-infos">
            <img
              className="atelie"
              src="/assets/images/atelieicon.png"
              alt=""
            />
            <div id="menu" className="menu">
              <h5>PAINEL</h5>
              <Link to={'/cadastro/produto'}>
              <a> CADASTRO DE PRODUTOS</a>
              </Link>
            <Link to={'/adm/consulta/pedidos'}>
              
            <a >CONSULTA DE PRODUTOS</a>
                          </Link>
             <Link to={'/adm/consulta/pedidos'}>
              <a>PEDIDOS</a>
             </Link>
             <Link to={'/relatorios'}>
             <a>RELATÓRIOS</a>
             </Link>
            
            </div>
          </div>
        </div>
      )}
        </div>

    )

}

// import './index.scss';


// export default function CabecalhoAdm(props) {


//     return (

//         <div className="cab-adm">


//             <div className="all-adm">

//                 <div className="esquerda-cabadm">

//                     <img src="/assets/images/zabugaaa.png" alt="" />

//                     <h2> {props.pag} </h2>

//                 </div>

//                 <div className="direita-cabadm">


//                     <img src="/assets/images/jinglebellrock.png" alt="" />

//                     <div className="c-cabadm">

//                         <img src="/assets/images/icon-usuario.png" alt="" className="icon-usuario-cabadm"/>
//                         <h3> ADMIN </h3>
//                         <img src="/assets/images/arrastaparabaixo.png" alt="" className="arrastaparabaixo-cabadm"/>

//                     </div>

//                 </div>

//             </div>

//         </div>

//     )

// }