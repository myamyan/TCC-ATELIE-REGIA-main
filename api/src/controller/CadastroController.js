import { inserircadastrousuario } from '../Repository/CadastroRepository.js'; 

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

export default server;
