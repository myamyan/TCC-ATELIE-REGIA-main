import { con } from './connection.js';

export async function CadastroPedido( pedido ) {

    const comando = `

    insert into tb_pedido ( id_cliente, id_produto, dt_datapedido, ds_metodopagamento, ds_entrega, ds_status_pedido )
        values( ?, ?, ?, ?, ?, ?);

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