

import { inserirLoginadm, verificarEmailExistente, CadastroProduto, ConsultaProduto, ConsultaPorNome, FiltroPorCategoria, FiltroPorTamanho, FiltroPorTecido, FiltroPorCor, FiltroPorDesigner, FiltroPorPromocao, FiltroPorDestaque, FiltroPorDisponivel, AlterarProduto, DeletarProduto, cadastrarImagem } from '../Repository/AdmRepository.js';

import multer from 'multer';
import { Router } from "express"

const server = Router();
const upload = multer({ dest: 'storage/imagensprodutos' });


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

        const produtopordisponivel = await FiltroPorDisponivel(disponivel);

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

        const resposta = await DeletarProduto(id);

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.post('/cadastro/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {

    try {

        const imagem = req.file.path;

        const resposta = await cadastrarImagem(imagem);

        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }
}
)






export default server;