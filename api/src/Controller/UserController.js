import { inserircadastrousuario, loginCliente, verificarEmailExistente,  CadastroPedido,  ConsultaPedido, ConsultaProduto, ConsultaPorNome, FiltroPorCategoria, FiltroPorTamanho, FiltroPorTecido, FiltroPorCor, FiltroPorDesigner, FiltroPorPromocao, FiltroPorDestaque, FiltroPorDisponivel, FiltroPorValor, CadastroInformacoesPessoais, CadastroInfoEntrega, ItensPedido, ConsultarEnderecos  } from '../Repository/UserRepository.js'; 

import { Router } from "express";

const server = Router();

server.post('/user/cadastro/usuario', async (req, resp) => {
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

  server.post('/user/login/cliente', async (req, resp) => {
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
  
  server.get('/user/login/email/:email', async (req, resp) => {
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


  server.post('/user/cadastro/finalizacao', async (req, resp) => {
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


  server.post('/user/cadastro/pedido', async (req, resp) => {

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



server.get('/user/consulta/pedido/:id', async (req, resp) => {

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



server.get('/user/lista/busca', async (req, resp) => {

  try {

      const listaprodutos = await ConsultaProduto();

      resp.send(listaprodutos);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})


server.get('/user/filtro/nome', async (req, resp) => {

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


server.get('/user/filtro/categoria', async (req, resp) => {

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


server.get('/user/filtro/tecido', async (req, resp) => {

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



server.get('/user/filtro/designer', async (req, resp) => {

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




server.get('/user/filtro/cor', async (req, resp) => {

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

server.get('/user/filtro/tamanho', async (req, resp) => {

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


server.get('/user/filtro/valor', async (req, resp) => {

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




server.get('/user/filtro/promocao', async (req, resp) => {

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


server.get('/user/filtro/destaque', async (req, resp) => {

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


server.get('/user/filtro/disponivel', async (req, resp) => {

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


server.post('/user/cadastro/informacoes-entrega', async (req, resp) => {
  try {
    const infoParaCadastrar = req.body;

    const infoCadastrada = await CadastroInfoEntrega(infoParaCadastrar);

    resp.send(infoCadastrada);
  } catch (err) {
    console.error('Erro na função de cadastro de usuário:', err);
    resp.status(400).send({
      erro: err.message
    });
  }
});



server.get('/user/consulta/itens-pedido', async (req, resp) => {

  try {

      const { id } = req.query;

      const itenspedido = await ItensPedido(id);

      resp.send(itenspedido);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})

server.get('/user/consulta/enderecos', async (req, resp) => {

  try {

      const { id } = req.query;

      const enderecoscliente = await ConsultarEnderecos(id);

      resp.send(enderecoscliente);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



server.post('/user/cadastro/lista-favoritos', async (req, resp) => {
  try {
    const favoritoParaCadastrar = req.body;

    const favoritoCadastrado = await CadastroInfoEntrega(favoritoParaCadastrar);

    resp.send(favoritoCadastrado);
  } catch (err) {
    console.error('Opss! Houve um erro ao adicionar este produto a sua lista de favoritos, tente novamente', err);
    resp.status(400).send({
      erro: err.message
    });
  }
});


server.get('/user/consulta/lista-favoritos', async (req, resp) => {

  try {

      const { id } = req.query;

      const enderecoscliente = await ConsultarEnderecos(id);

      resp.send(enderecoscliente);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      })
  }
})



export default server;
