
import { CadastroProduto, ConsultaProduto, ConsultaPorNome, FiltroPorCategoria, FiltroPorTamanho, FiltroPorTecido, FiltroPorCor, FiltroPorDesigner, FiltroPorPromocao, FiltroPorDestaque, AlterarProduto, DeletarProduto } from "../repository/ProdutoRepository.js";

import { Router } from "express";

const server = Router();

server.post('/cadastro/produto', async (req, resp) => {

    try {


        const produtoParaCadastrar = req.body;

        const produtoCadastrado = await CadastroProduto(produtoParaCadastrar);

        resp.send(produtoCadastrado);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

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



// server.get('/filtro', async (req, resp) => {

//     try {

//         const { categoria } = req.query;

//         const produtoporcategoria = await FiltroPorCategoria( categoria );

//         resp.send(produtoporcategoria);

//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         })
//     }
// })



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

        const produtopordisponivel = await FiltroPorPromocao(disponivel);

        resp.send(produtopordisponivel);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.put('/produto/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const produto = req.body;


        const resposta = await AlterarProduto(id, produto);

            resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})



server.delete('/produto/deletar/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await DeletarProduto( id );

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;