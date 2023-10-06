

import { cadastrarImagem } from '../Repository/imagemRepository.js';


import multer from 'multer';
import { Router } from 'express';

const server = Router();
const upload = multer({ dest: 'storage/imagensprodutos' });


server.post('/cadastro/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {

    try {

        const imagem = req.file.path;

        const resposta = await cadastrarImagem( imagem );

        if(resposta != 1)
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