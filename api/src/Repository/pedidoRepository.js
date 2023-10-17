import { con } from './connection.js';

export async function CadastroPedido( pedido ) {

    const comando = `

    insert into tb_pedido ( id_cliente, id_produto, ds_status_pedido )
        values( ?, ?, ? );

    `

    const [resposta] = await con.query(comando, [pedido.cliente, pedido.produto, pedido.status]);

    pedido.id = resposta.insertId;

    return pedido;


}
