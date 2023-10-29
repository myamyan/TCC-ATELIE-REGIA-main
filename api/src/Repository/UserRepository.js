import { con } from './connection.js';



export async function inserircadastrousuario(cadastro) {
    
  const comando= 
  
  `INSERT INTO tb_cadastrocliente(nm_cliente, ds_emailcliente, ds_senhacliente, bt_termos)
  values(?, ?, ?, ?) `;

  const [resposta] = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha, cadastro.termos]);
  cadastro.id = resposta.insertId;

  return cadastro;

}


export async function loginCliente(email, senha) {

  const comando = `
  
        select   id_cliente             id,
            ds_emailcliente             email,
            ds_senhacliente             senha

        from tb_cadastrocliente

        where ds_emailcliente = ?
        and ds_senhacliente = ?

  `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas;

}

export async function verificarEmailExistente(email) {
  try {
    const [linhas, campos] = await con.execute('SELECT * FROM tb_cadastrocliente WHERE  ds_emailcliente    = ?', [email]);

    return linhas.length > 0;
  } catch (err) {
    console.error('Erro ao verificar email existente:', err);
    return false;
  }
}

export async function inserirclientelogin(cliente) {
  const comando = `insert into tb_cliente ( id_cadcliente, dt_nascimento, ds_endereco, ds_cpf, ds_genero, ds_num_celular)
  values (?, ?, ?, ?, ?, ?);`

  const [resposta] = await con.query(comando, [cliente.id_cadcliente, cliente.nascimento, cliente.endereco, cliente.cpf, cliente.genero, cliente.celular]);
  cliente.id = resposta.insertId;

  return cliente;

}


//conversar vivi

export async function CadastroPedido( pedido ) {

  const comando = `

  insert into tb_pedido ( id_cliente, nr_itens, id_produto, dt_datapedido, ds_metodopagamento, ds_entrega, ds_status_pedido )
      values( ?, ?, ?, ?, ?, ?, ? );

  `

  const [resposta] = await con.query(comando, [pedido.cliente, pedido.produto, pedido.data, pedido.metodo, pedido.entrega, pedido.status]);

  pedido.id = resposta.insertId;

  return pedido;


}


export async function ConsultaPedido() {

  const comando = `

      select * from tb_pedido;

  `

  const [linhas] = await con.query( comando );
  return linhas;


}



export async function VerProduto( nome ) {

  const comando = `
  
  select * from tb_produto where nm_produto like ?

  `;

  const [linhas] = await con.query(comando, [`%${nome}%`]);
  return linhas

}