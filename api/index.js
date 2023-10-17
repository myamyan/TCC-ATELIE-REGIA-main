import 'dotenv/config'

// import PedidoController from './src/controller/PedidoController.js';
import Loginadmcontroller from './src/controller/Loginadmcontroller.js'
import ProdutosController from './src/controller/Produtoscontroller.js';
import CadastroController from './src/controller/CadastroController.js';
import LoginusController from './src/controller/LoginusController.js';
// import ProdutosController from './src/controller/Produtoscontroller.js';


import express from 'express'
import cors from 'cors'

const server = express ();
server.use(cors());
server.use(express.json());

server.use(Loginadmcontroller);
server.use(ProdutosController);
server.use(CadastroController);
server.use(LoginusController);
// server.use(ProdutosController);
// server.use(PedidoController);


server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));
