
import { inserirproduto, enviarImagem, inserirImagem } from "../Repository/Produtorepository.js";

import { Router } from "express"

const server = Router();

server.put('/roupa/:id/capa', async (req, resp) => {
  try {
      const id = req.params.id; 
      const imagem = req.body.imagem; 

      const status = await enviarImagem(id, imagem);

      if (status === 200) {
          resp.status(200).json({ mensagem: 'Imagem enviada com sucesso' });
      } else {
          resp.status(status).json({ mensagem: 'Erro ao enviar a imagem' });
      }
  } catch (err) {
      console.error('Erro ao enviar imagem:', err);
      resp.status(500).json({ erro: 'Erro interno do servidor' });
  }
});


server.post('/inserirproduto', async (req, resp) => {
    try {
      const produtoparainserir = req.body;
      const produtoinserido = await inserirproduto(produtoparainserir);
  
      resp.status(201).json({ id: produtoinserido.id, mensagem: 'Produto inserido com sucesso' });
    } catch (err) {
      resp.status(400).json({ erro: err.message });
    }
  });

  

export default server;
