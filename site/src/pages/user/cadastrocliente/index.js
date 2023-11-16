import { useState } from 'react';
import './index.scss';


import { cadastrarCliente } from '../../../api/user/cadastrocliente';



export default function Cadastrocliente() {



    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [termos, setTermos] = useState(false);


    async function salvarCliente() {


        try {

            const r = await cadastrarCliente(nome, email, senha, termos);

            if (!nome || nome === undefined)
                throw new Error('Campo nome é obrigatório!');

            if (!email || email === undefined)
                throw new Error('Campo email é obrigatório!')

            if (!senha || senha === undefined)
                throw new Error('Campo senha é obrigatório!')
                if (!termos || termos === undefined)
                throw new Error('Para prosseguir é preciso concordar com os termos.')

            alert('Usuário cadastrado com sucesso!!');





        } catch (err) {


            alert(err.response.data.erro);

        }




    }





    return (

        <div className="pagina-cadastrocliente">



            <div className="cadastroc">




                <div className='imagem-cadastroc1'>


                    <img src="/assets/images/imagempaginacadastrocliente.png" alt="" className='camada2-cadastroc' />

                    <img src="/assets/images/logo.png" alt="" className='camada3-cadastroc' />



                </div>



                <div className="inputz">


                    <h1>
                        Crie uma conta
                    </h1>

                    <p> Já possui uma conta? Faça <a href="/login/cliente"> login </a> </p>

                    <div className="inputz-putz-cadastrocliente">

                        <div className="div-inputz-cadastroc" >
                            <p>Nome</p>
                            <input type="text" placeholder='Digite aqui o seu nome' value={nome} onChange={e => setNome(e.target.value)} />

                        </div>


                        <div className="div-inputz-cadastroc">
                            <p>Email</p>
                            <input type="text" placeholder='Digite aqui o seu email ' value={email} onChange={e => setEmail(e.target.value)} />

                        </div>

                        <div className="div-inputz-cadastroc">
                            <p>Senha</p>
                            <input type="password" placeholder='Digite aqui a sua senha' value={senha} onChange={e => setSenha(e.target.value)} />

                        </div>
                        <div className="botoes-cadastrocliente">

                            <p><input type="checkbox" className='chechbox-cadastrarc' checked={termos} onChange={e => setTermos(e.target.checked)} />   Eu concordo com as Diretrizes de Privacidade.</p>

                            <button className='botao1-cadastrocliente' onClick={salvarCliente}>Cadastrar</button>

                        </div>

                        <div className='redes-cadastro'>

                            <p> Entrar com as redes sociais </p>

                            <div className='icons-redes-cadastroc'>



                                <img src="/assets/images/facebook.png" alt="" />
                                <img src="/assets/images/tt.png" alt="" />
                                <img src="/assets/images/instagram.png" alt="" />


                            </div>

                        </div>


                    </div>


                </div>



                <div className='imagem-cadastroc2'>


                    <img src="/assets/images/imagempaginacadastrocliente.png" alt="" className='camada2-cadastroc' />

                    <img src="/assets/images/logo.png" alt="" className='camada3-cadastroc' />



                </div>

            </div>


        </div>

    );

}