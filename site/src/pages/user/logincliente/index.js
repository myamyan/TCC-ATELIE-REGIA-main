import "./index.scss";
import axios from "axios";
import { set } from "local-storage";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginCliente() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function entrarClick() {
    try {
      if (!email || !senha || email === undefined || senha === undefined) {
        throw new Error(
          'Há algo errado com suas informações! Para prosseguir, certifique-se de que suas informações de login estão corretas.'
        );
      }

      const response = await axios.post('http://localhost:5036/user/login/cliente', {
        email: email,
        senha: senha,
      });

      set('carrinho', []);

      navigate('/');
    } catch (err) {
      alert(err.response.data.erro);
    }
  }

  return (
    <div className="pagina-logincliente">
      
      <div className="loginc">
        <div className="imagem-loginc1">
          <img
            src="/assets/images/imagempaginacadastrocliente.png"
            alt=""
            className="camada2-loginc"
          />

          <img
            src="/assets/images/logo.png"
            alt=""
            className="camada3-loginc"
          />
        </div>

        <div className="inputz-login">
          <h1>Bem-vindo</h1>

          <p> Faça o login para continuar </p>

          <div className="inputz-putz-logincliente">
            <div className="div-inputz-loginc">
              <p>Email</p>
              <input
                type="text"
                placeholder="Digite aqui o seu email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="div-inputz-loginc">
              <p>Senha</p>
              <input
                type="password"
                placeholder="Digite aqui a sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="botoes-logincliente">
              <a href=""> Esqueci a senha </a>

              <button className="botao1-logincliente" onClick={entrarClick}>
                {" "}
                LOGIN{" "}
              </button>
            </div>

            <div className="redes-loginc">
              <p> Entrar com as redes sociais </p>

              <div className="icons-redes-logincliente">
                <img src="/assets/images/facebook.png" alt="" />
                <img src="/assets/images/tt.png" alt="" />
                <img src="/assets/images/instagram.png" alt="" />
              </div>

              <p>
                {" "}
                Ainda não possui uma conta?{" "}
                <a href="/cadastro/cliente"> Cadastre-se </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="imagem-loginc2">
          <img
            src="/assets/images/imagempaginacadastrocliente.png"
            alt=""
            className="camada4-loginc"
          />

          <img
            src="/assets/images/logo.png"
            alt=""
            className="camada5-loginc"
          />
        </div>
      </div>
    </div>
  );
}