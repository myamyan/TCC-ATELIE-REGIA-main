import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './pages/user/pagina-produto';
import Sacola from './pages/user/sacola';
import Loginadm from './pages/adm/admlogin';
import Cadastroproduto from './pages/adm/cadastroproduto';
import Cadastrocliente from './pages/user/cadastrocliente';
import LoginCliente from './pages/user/logincliente';
import Homepage from './pages/user/pagina-inicio';
import RelatoriosAdm from './pages/adm/relatoriosadm';
import ConsultaProdutos from './pages/adm/consultapedidos';
import Detalhespedido from './pages/user/detalhespedido';
import Enderecos from './pages/user/endereco';
import DadosUsuario from "./pages/user/dadosUsuario";
import Favoritos from './pages/user/listaDeDesejos';
import Painel from './pages/adm/paineladm';
import { CarrinhoProvider } from '../../site/src/pages/user/carrinhocontext/CarrinhoContext';
import Pagamento from './pages/user/pagamento';
import Produtos from './pages/user/pag-item';
import Entrega from './pages/user/entrega';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarrinhoProvider>
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/pagamento' element={<Pagamento/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>
        <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
        <Route path='/login/cliente' element={<LoginCliente/>}/>
        <Route path='/adm/relatorios' element={<RelatoriosAdm/>}/>
        <Route path='/adm/consulta/pedidos' element={<ConsultaProdutos/>}/>
        <Route path='/detalhespedido' element={<Detalhespedido/>}/>
        <Route path='/user/enderecos' element={<Enderecos/>}/>
        <Route path='/user/dados' element={<DadosUsuario/>}/>
        <Route path='/user/favoritos' element={<Favoritos/>}/>
        <Route path='/painel' element={<Painel/>}/>
        <Route path='/pagina/item/:id' element={<Produtos/>}/>
        <Route path='/entrega' element={<Entrega/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </CarrinhoProvider>
);

