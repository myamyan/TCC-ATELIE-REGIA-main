import { inserircadastrousuario, inserirclientelogin, loginCliente, verificarEmailExistente,  CadastroPedido,  ConsultaPedido, VerProduto   } from '../Repository/UserRepository.js'; 

import { Router } from "express";

const server = Router();

server.post('/cadastro/usuario', async (req, resp) => {
    try {
      const usuarioParaCadastrar = req.body;
  
      const usuarioCadastrado = await inserircadastrousuario(usuarioParaCadastrar);
  
      resp.send(usuarioCadastrado);
    } catch (err) {
      console.error('Erro na função de cadastro de usuário:', err);
      resp.status(400).send({
        erro: err.message
      });
    }
  });

  server.post('/login/cliente', async (req, resp) => {
    try {
      const loginparainserir = req.body;
  
      const emailExistente = await verificarEmailExistente(loginparainserir.email);
  
      if (emailExistente) {
    
        const logininserida = await inserircadastrousuario(loginparainserir);
        resp.send(logininserida);
      } else {
        
        throw new Error('Este email não está cadastrado.');
      }
  
    } catch (err) {
      resp.status(400).send({
        erro: err.message
      });
    }
  });
  
  server.get('/login/email/:email', async (req, resp) => {
    try {
      const { email } = req.params;
  
      if (!email) {
        resp.status(400).send({ erro: 'O parâmetro email é obrigatório' });
        return;
      }
  
      const resposta = await buscaremail(email);
  
      if (!resposta) {
        resp.status(404).send({ erro: 'Email não encontrado' });
        return;
      }
  
      resp.send(resposta);
    } catch (err) {
      console.error('Erro na função emaillogin:', err);
      resp.status(500).send({ erro: 'Ocorreu um erro ao processar a requisição.' });
    }
  });


  server.post('/cadastro/usuario/informacoespessoais', async (req, resp) => {
    try {
      const informacoesParaCadastrar = req.body;
  
      const informacoesCadastradas = await inserirclientelogin(informacoesParaCadastrar);
  
      resp.send(informacoesCadastradas);
    } catch (err) {
      console.error('Erro na função de cadastro de informações:', err);
      resp.status(400).send({
        erro: err.message
      });
    }
  });


  server.post('/cadastro/pedido', async (req, resp) => {

    try {


        const pedidoParaCadastrar = req.body;

        const pedidoCadastrado = await CadastroPedido(pedidoParaCadastrar);

        resp.send(pedidoCadastrado);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});



server.get('user/filtro/nome', async (req, resp) => {

  try {

      const { nome } = req.query;

      const produtopornome = await VerProduto(categoria);

      resp.send(produtoporcategoria);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



export default server;
