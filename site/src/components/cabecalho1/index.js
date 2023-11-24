import { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Cabecalho1() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [width, setWidth] = useState(0);
  const [inputVisivel, setInputVisivel] = useState(false);
  const elementRef = useRef(null);

  const ve = () => {
    setMenuVisivel(!menuVisivel);
  };

  useEffect(() => {
    if (!elementRef.current) return;

    setWidth(elementRef.current.getBoundingClientRect().width);
  });

  const vein = () => {
    setInputVisivel(!inputVisivel);
  };

  useEffect(() => {
    if (!elementRef.current) return;

    setWidth(elementRef.current.getBoundingClientRect().width);
  });

  return (
    <div className="page">
      <div
        className={`cabecalho ${menuVisivel ? "aberto" : ""}`}
        style={{
          maxWidth: menuVisivel && `calc(100% - ${width}px)`,
          transform: menuVisivel && `translateX(${width}px)`,
        }}
      >
        <div className="cabecalho1">
          <div className="cab1-esquerda">
            <div className="menu-img">
              <img
                src="/assets/images/zabugaaa.png"
                alt=""
                className="menu1"
                onClick={ve}
              />
            </div>
            <h2>ATELIÊ RÉGIA</h2>
            <div>
              <img src="/assets/images/logo.png" alt="" className="logo1" />
            </div>
          </div>
          <div className={`cab1-direita ${inputVisivel ? "move-to-side" : ""}`}>
            <div
              className={`lupa-escondida ${inputVisivel ? "move-to-side" : ""}`}
            >
              <img
                className="img1-cab1"
                src="/assets/images/lupis.png"
                alt=""
                onClick={vein}
              />
              {inputVisivel && (
                <div class="input-invisivel" ref={elementRef}>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    className="move-to-side"
                  />
                </div>
              )}
            </div>

            <h3>
              <a href="/login/cliente">LOGIN</a>
            </h3>
            <Link to="/sacola">
              <img
                className="img2-cab1"
                src="/assets/images/redfivediamonds.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {menuVisivel && (
        <div className="menu-overlay">
          <div ref={elementRef} className="menu-container">
            <img src="/assets/images/logo.png" />
            <div className="menu">
              <Link to={"/produtos"}>
                <button>Produtos</button>
              </Link>
              <Link to={"/sacola"}>
                <button>Sacola</button>
              </Link>
            </div>
            <div className="log">
              <img src="" alt="" className="" />
              <Link>
                <button to={"/login"}>Login</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import './index.scss';

// export default function Cabecalho1() {
//   return (

//       <div className="cabecalho1">

//         <div className='cab1-esquerda'>

//           <div>
//             <img src="/assets/images/zabugaaa.png" alt="" className="menu1" />

//           </div>

//           <h2>ATELIÊ RÉGIA</h2>

//           <div>
//             <img src="/assets/images/logo.png" alt="" className="logo1" />

//           </div>

//         </div>

//         <div className='cab1-direita'>

//           <img className="img1-cab1" src="/assets/images/lupis.png" alt="" />

//           <h3><a href="/login/cliente">LOGIN</a></h3>

//           <img className="img2-cab1" src="/assets/images/redfivediamonds.png" alt="" />

//         </div>

//       </div>

//   );
// }
