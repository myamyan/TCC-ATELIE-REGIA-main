import { inserircadastrousuario, loginCliente, verificarEmailExistente,  CadastroPedido,  ConsultaPedido, ConsultaProduto, ConsultaPorNome, FiltroPorCategoria, FiltroPorTamanho, FiltroPorTecido, FiltroPorCor, FiltroPorDesigner, FiltroPorPromocao, FiltroPorDestaque, FiltroPorDisponivel, FiltroPorValor, CadastroInformacoesPessoais  } from '../Repository/UserRepository.js'; 

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


  server.post('/cadastro/usuario/finalizacao', async (req, resp) => {
    try {
      const informacoesParaCompletar = req.body;
  
      const informacoesCompletas = await CadastroInformacoesPessoais(informacoesParaCompletar);
  
      resp.send(informacoesCompletas);
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



server.get('/consulta/pedido/:id', async (req, resp) => {

  try {

      const { id } = req.query;

      const pedidoporid = await ConsultaPedido(id);

      resp.send(pedidoporid);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



server.get('/lista/busca', async (req, resp) => {

  try {

      const listaprodutos = await ConsultaProduto();

      resp.send(listaprodutos);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/nome', async (req, resp) => {

  try {

      const { nome } = req.query;

      const produtopornome = await ConsultaPorNome(nome);

      resp.send(produtopornome);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/categoria', async (req, resp) => {

  try {

      const { categoria } = req.query;

      const produtoporcategoria = await FiltroPorCategoria(categoria);

      resp.send(produtoporcategoria);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



server.get('/filtro/valor', async (req, resp) => {

    try {

        const { valor } = req.query;

        const produtoporvalor = await FiltroPorValor( valor );

        resp.send(produtoporvalor);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/filtro/tamanho', async (req, resp) => {

  try {

      const { tamanho } = req.query;

      const produtoportamanho = await FiltroPorTamanho(tamanho);

      resp.send(produtoportamanho);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/tecido', async (req, resp) => {

  try {

      const { tecido } = req.query;

      const produtoportecido = await FiltroPorTecido(tecido);

      resp.send(produtoportecido);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/cor', async (req, resp) => {

  try {

      const { cor } = req.query;

      const produtoporcor = await FiltroPorCor(cor);

      resp.send(produtoporcor);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/designer', async (req, resp) => {

  try {

      const { designer } = req.query;

      const produtopordesigner = await FiltroPorDesigner(designer);

      resp.send(produtopordesigner);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/promocao', async (req, resp) => {

  try {

      const { promocao } = req.query;

      const produtoporpromocao = await FiltroPorPromocao(promocao);

      resp.send(produtoporpromocao);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/destaque', async (req, resp) => {

  try {

      const { destaque } = req.query;

      const produtopordestaque = await FiltroPorDestaque(destaque);

      resp.send(produtopordestaque);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/filtro/disponivel', async (req, resp) => {

  try {

      const { disponivel } = req.query;

      const produtopordisponivel = await FiltroPorDisponivel(disponivel);

      resp.send(produtopordisponivel);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})





export default server;
