
import { CadastroPedido,  ConsultaPedido } from "../Repository/pedidoRepository.js";


import { Router } from "express";

const server = Router();

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


export default server;