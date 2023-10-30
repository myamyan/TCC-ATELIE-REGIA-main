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

export async function CadastroInformacoesPessoais(infop) {

  const comando = ` 
  
    insert tb_cliente (id_cadcliente, dt_nascimento, ds_endereco, ds_cpf, id_genero, ds_num_celular, id_entregas)
                values( ?, ?, ?, ?, ?, ? ,? )

  `

  const [resposta] = await con.query(comando, [infop.idcadastro, infop.datanasc, infop.endereco, infop.cpf, infop.genero, infop.numcel , infop.entregas ])
  return resposta;

}

//conversar vivi

export async function CadastroPedido( pedido ) {

  const comando = `

  insert into tb_pedido ( id_cliente, nr_itens, vl_totalcompra, dt_pedido, ds_situacao, tp_pagamento, nm_cartao, nr_cartao, dt_validade, nr_cod_seg, nr_parcelas, id_bandeira, ds_entrega )
      values( ?, ?, ?, ?, ?, ?, ? );

  `

  const [resposta] = await con.query(comando, [pedido.cliente, pedido.numeroitens, pedido.vltotal, pedido.data, pedido.situacao, pedido.tppagamento, pedido.nomecartao, pedido.nrcartao, pedido.dtvalidade, pedido.nrcodseguranca, pedido.parcelas, pedido.idbandeira, pedido.entrega]);

  pedido.id = resposta.insertId;

  return pedido;


}


export async function ConsultaPedido( id ){

  const comando = `
  
  select * from tb_pedido where id_cliente like ?

  `

  const [resposta] = await con.query(comando, [ id ])

}



export async function ConsultaProduto() {

  const comando = `

      select * from tb_produto;

  `

  const [linhas] = await con.query(comando);
  return linhas;


}


export async function ConsultaPorNome(nome) {

  const comando = `  
  
  select * from tb_produto 
  
  where nm_produto like ?

  `

  const [linhas] = await con.query(comando, [`%${nome}%`]);

  return linhas;

}


export async function FiltroPorCategoria(categoria) {

  const comando = `  
  
  select * from tb_p_categorias 
  
  where nm_categoria like ?

  `

  const [linhas] = await con.query(comando, [`%${categoria}%`]);

  return linhas;

}


export async function FiltroPorTecido(tecido) {

  const comando = `  
  
  select * from tb_p_tecido 
  
  where ds_tipo like ?;

  `

  const [linhas] = await con.query(comando, [`${tecido}`]);

  return linhas;

}

export async function FiltroPorDesigner(designer) {

  const comando = `  
  
  select * from tb_p_designer
  
  where nm_designer like ?;

  `

  const [linhas] = await con.query(comando, [`${designer}`]);

  return linhas;

}

export async function FiltroPorCor(cor) {

  const comando = `  
  
  select * from tb_p_cor 
  
  where ds_hexa_decimal like ?;

  `

  const [linhas] = await con.query(comando, [`${cor}`]);

  return linhas;

}

export async function FiltroPorTamanho(tamanho) {

  const comando = `  
  
  select * from tb_p_tamanho 
  
  where ds_tamanho like ?;

  `

  const [linhas] = await con.query(comando, [`${tamanho}`]);

  return linhas;

}



export async function FiltroPorValor( valor ) {

    const comando = `  

    select * from tb_produto 

    where vl_preco or vl_promocao between ? or ?;

    `

    const [ linhas ] = await con.query( comando, [ valor ] );

    return linhas[0];

}



export async function FiltroPorPromocao(promocao) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_promocao like 1;

  `

  const [linhas] = await con.query(comando, [promocao]);

  return linhas;

}


export async function FiltroPorDestaque(destaque) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_destaque like 1;

  `

  const [linhas] = await con.query(comando, [destaque]);

  return linhas;

}


export async function FiltroPorDisponivel(disponivel) {

  const comando = `  
  
  select * from tb_produto 
  
  where bt_disponivel = 1;

  `

  const [linhas] = await con.query(comando, [disponivel]);

  return linhas;

}

//fazer controller ↓

export default function CadastroInfoEntrega(pedido){

  const comando = `
  
    update tb_cliente
    set     
    ds_endereco             = ?,
    ds_cep                  = ?,
    nr_numero               = ?,
    ds_complemento          = ?,
    id_entregas             = ?
    
    WHERE id_cliente        = ?

  `

}  


