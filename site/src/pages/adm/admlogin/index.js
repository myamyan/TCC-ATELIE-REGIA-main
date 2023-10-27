import { useRef, useState } from 'react'
import './index.scss';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
export default function Loginadm() {

const [ email, setEmail ]= useState('');
const [ senha, setSenha ]= useState('');
const [ erro, setErro ]= useState('');
const [carregando, setCarregando] = useState(false);
const ref = useRef();
const navigate= useNavigate();


const validarEmail = (email) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};


async function Entrarclick() {
  ref.current.continuousStart();
  if (!validarEmail(email)) {
    setErro('Email inválido');
    ref.current.complete();
    return;
  }
  try {
      const r = await axios.post('http://localhost:5000/login', {
          email: email,
          senha: senha
      });

      storage('usuario-logado', r );
      setTimeout(() =>{
          navigate('/produtos');
      }, 3000);   

  }  catch (err) {
      ref.current.complete();
      setCarregando(false);

     
      if (err && err.response && err.response.status === 400) {
          setErro(err.response.data.erro);
      } else {
         
          setErro('Ocorreu um erro ao processar a solicitação.');
      }

}
}




    return (
        <div className='page-login-adm'>
     <LoadingBar color='#0000ff' ref={ref}/>
<div className='adm'>
<h1>Bem-vindo, administrador</h1>
</div>
            <div className='login-adm'>
              
                <div className='login'>
<h1>LOGIN</h1>


<hr/>
                    <div className='login-inputs'>
                        <div className='login-inputs-email'>
                            <label>EMAIL</label>
                        <input type="email" placeholder='Digite aqui o seu email' value={email} onChange={(e) => setEmail(e.target.value)}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                        </div>
                       <div className='login-inputs-senha'>
                       <label>SENHA</label>
                       <input type="password" placeholder='Digite aqui a sua senha'value={senha} onChange={(e) => setSenha(e.target.value)} />
                       </div>
                  
                    </div>
                    <button pointer onClick={Entrarclick}>LOGIN</button>
                    <div className='erro'>
                        {erro}
                        </div>
                </div>
            </div>
        </div>
    )
}