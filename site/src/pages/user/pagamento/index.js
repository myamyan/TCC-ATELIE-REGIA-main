import Cabecalho1 from "../../../components/cabecalho1";
import "./index.scss";

export default function Pagamento() {
  return (
    <div className="pagamento">
    <Cabecalho1/>

<div class="separa">
<h2 className="pagamento-titulo">PAGAMENTO</h2>

<div className="container">
        
        <div className="container-preencher">
          <div className="tipos-pagamento">
            <p>CARTÃO DE CRÉDITO</p>
            <hr />
            <p>CARTÃO DE DÉBITO</p>
            <hr />
            <p> PIX</p>
            <hr />
            <p> BOLETO </p>
            <hr />
            <p>VALE-PRESENTE</p>
          </div>
          <hr />
          <div className="infos">
            <div className="separa">
              <div className="nome-cartao">
                <label>NOME IMPRESSO NO CARTÃO</label>
                <input type="text" />
              </div>
              <div className="validade">
                <label>VALIDADE</label>
                <div className="validade-sub">
                  <input placeholder="MÊS" type="text" />
                  <input placeholder="ANO" type="text" />
                </div>
              </div>
            </div>
            <div className="outrosepara">
              <div className="numero-cartao">
                <label>NUMERO IMPRESSO NO CARTÃO</label>
                <input type="text" />
              </div>

              <div className="seguranca-sub">
                <div className="codigo-seguranca">
                  <label>CÓDIGO DE SEGURANÇA</label>

                  <input type="text" />
                </div>

                <div className="parcelas">
                  <label>PARCELAS</label>

                  <input placeholder="1x SEM JUROS" type="text" />
                </div>

                <div className="cartao">
                  <label>BANDEIRA</label>
                  <select className="fale-sel">
                    <option>
                    <img src='/assets/images/shortinhos.png' alt=''/>
                    </option>

                    <option value="" key="">
                      esse
                    </option>
                    <option value="" key="">
                      esse
                    </option>
                    <option value="" key="">
                      esse
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="total">
            <h5> TOTAL: R$280,90 </h5>

            <button>IR PARA ENTREGA</button>
          </div>
        </div>

        <div className="sacola">
          <h1>ITENS</h1>

          <div className="produtos">
            <img src="/assets/images/shortinhos.png" alt="" />

            <div className="texto-produtos">
              <p>SHORT DE JEANS MARROM TERRA R$90,00</p>
              <button> VER PRODUTO</button>
            </div>
          </div>
        </div>

        <p> HOUVE ALGUM PROBLEMA? </p>
      </div>
</div>
 
    
    </div>
  );
}