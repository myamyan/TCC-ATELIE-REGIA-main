import {inserirLoginadm, verificarEmailExistente } from '../Repository/Loginadmrepository.js'

import { Router } from "express"

const server = Router();

server.post('/login', async (req, resp) => {
  try {
    const loginparainserir = req.body;

    const emailExistente = await verificarEmailExistente(loginparainserir.email);

    if (emailExistente) {
   
      const logininserida = await inserirLoginadm(loginparainserir);
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


server.post('/inserirloginadm', async (req, resp) => {
  try {
    const loginadmparainserir = req.body;

    const emailinserido = await inserirLoginadm(loginadmparainserir);

    const loginadminserido = [];
    loginadminserido.push(loginadmparainserir.email);

    resp.send(loginadminserido);
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});



export default server;