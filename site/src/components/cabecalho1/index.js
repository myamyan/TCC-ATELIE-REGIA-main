
import Menu from '../menu';
import './index.scss';

export default function Cabecalho1() {
  return (

    <div className="auau-cab1">

      <Menu />


      <div className="cabecalho1">


        <div className='cab1-esquerda'>


          <div>
            <img src="/assets/images/zabugaaa.png" alt="" className="menu1" />

          </div>

          <h2>ATELIÊ RÉGIA</h2>

          <div>
            <img src="/assets/images/logo.png" alt="" className="logo1" />

          </div>

        </div>


        <div className='cab1-direita'>


          <img className="img1-cab1" src="/assets/images/lupis.png" alt="" />

          <h3><a href="/login/cliente">LOGIN</a></h3>

          <img className="img2-cab1" src="/assets/images/redfivediamonds.png" alt="" />

        </div>

      </div>

    </div>
  );
}
