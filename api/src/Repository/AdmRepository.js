import { con } from './connection.js'


export async function inserirLoginadm(loginadm) {

    const comando =

        `INSERT INTO tb_admin ( ds_email, ds_senha   )
            values( ?, ? ) `;

    const [resposta] = await con.query(comando, [loginadm.email, loginadm.senha]);
    loginadm.id = resposta.insertId;

    return loginadm;

}

export async function verificarEmailExistente(email) {
    try {
        const [linhas, campos] = await con.execute('SELECT * FROM tb_admin WHERE ds_email = ?', [email]);

        return linhas.length > 0;
    } catch (err) {
        console.error('Erro ao verificar email existente:', err);
        return false;
    }
}

export async function buscaremail(email) {
    const comando =

        `SELECT id_admin  id,
        ds_email          email,
        ds_senha          senha
        FROM tb_admin
        WHERE ds_email = ?`;

    const [resp] = await con.query(comando, [`%${email}%`]);
    return resp;

}

export async function CadastrarProduto(produto) {

    const comando =
        `insert into tb_produto (id_imagem, nm_produto, vl_preco, vl_promocao, bt_promocao, bt_destaque, bt_disponivel, ds_detalhes, nr_estoque, id_designer, id_categorias )
                                values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );`

    const [resposta] = await con.query(comando, [produto.idimagem, produto.nome, produto.preco, produto.promocao, produto.promocaobool, produto.destaquebool, produto.disponivelbool, produto.detalhes, produto.estoque, produto.iddesigner, produto.idcategorias]);
    produto.id = resposta.insertId;

    return produto;
}


export async function BuscarProdutos(){

    const comando = `
    
    select * from tb_produto;

    `

    const [linhas] = await con.query(comando);

    return linhas;

}


export async function AlterarProduto(id, produto) {

    const comando =
        `
    update  tb_produto
    set     id_imagem               = ?,
            nm_produto              = ?,
            vl_preco                = ?,
            vl_promocao             = ?,
            bt_promocao             = ?,
            bt_destaque             = ?,
            bt_disponivel           = ?,
            ds_detalhes             = ?,
            nr_estoque              = ?,
            id_designer             = ?,
            id_categorias           = ?
            
            WHERE id_produto        = ?`

    const [resposta] = await con.query( comando, [produto.nome, produto.idimagem, produto.valor, produto.valorpromo, produto.promocaobool, produto.destaquebool, produto.disponivelbool, produto.detalhes, produto.estoque, produto.iddesigner, produto.idcategorias, id]);

    return resposta.affectedRows;
}



export async function DeletarProduto( id ) {

    const comando =
        `delete from tb_produto
                where id_produto = ? `

    const [resposta] = await con.query(comando, [ id ]);
    return resposta.affectedRows;
}



export async function inserircategorias( categoria ) {
    const comando = `insert into tb_categorias (nm_categoria)
	values( ? );`

    const [resposta] = await con.query(comando, [categoria.nome]);
    categoria.id = resposta.insertId;

    return categoria;
}

export async function inserirtecidos(tecidos) {
    const comando = `insert into tb_produto_tecidos(ds_tipo)
	values( ? );`

    const [resposta] = await con.query(comando, [tecidos.tipo]);
    tecidos.id = resposta.insertId;

    return tecidos;
}


export async function inserirdesigner( designer ) {
    const comando = `    
    insert into tb_designer (nm_designer)
        values( ? );`

    const [resposta] = await con.query(comando, [designer.nome]);
    designer.id = resposta.insertId;

    return designer;
}

export async function inserircores(cores) {
    const comando = `insert into tb_produto_cores (ds_hexa_decimal)
	values( ? );`

    const [resposta] = await con.query(comando, [cores.codhexa]);
    cores.id = resposta.insertId;

    return cores;
}

export async function inserirtamanho(tamanho) {
    const comando = `insert into tb_produto_tamanho (ds_tamanho)
	values( ? );`

    const [resposta] = await con.query(comando, [tamanho.tamanho]);
    cores.id = resposta.insertId;

    return cores;
}


//verificar com a vivi

export async function cadastrarImagem(imagem, id) {


    const comando =

        `         
        update tb_produto
        set ds_linkimagem = ?
        where id_produto = ?
    `

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;


}

export async function BuscarTodosPedidos(){

    const comando = `
    
    select * from tb_pedido_item inner join tb_pedido on tb_pedido.dt_pedido = tb_pedido_item.dt_pedido;

    `

    const [linhas] = await con.query(comando);

    return linhas;

}

export async function BuscarPedidosAndamento(){

    const comando = `
    
        select * from tb_pedido_item inner join tb_pedido on tb_pedido.id_pedido = tb_pedido_item.id_pedido where ds_situacao like "andamento"

    `

    const [linhas] = await con.query(comando);

    return linhas

}

export async function BuscarPedidosConcluidos(){

    const comando = `
    
        select * from tb_pedido_item inner join tb_pedido on tb_pedido.id_pedido = tb_pedido_item.id_pedido where ds_situacao like "Aprovado"

    `

    const [linhas] = await con.query(comando);

    return linhas

}

export async function FiltroPorMaisNovo(){


    const comando = `
    
    select * from tb_pedido_item inner join tb_pedido on tb_pedido.id_pedido = tb_pedido_item.id_pedido order by dt_pedido asc; 

    `

    const [linhas] = await con.query(comando);

    return linhas;

}

export async function FiltroPorMaisAntigo(){


    const comando = `
    
    select * from tb_pedido_item inner join tb_pedido on tb_pedido.id_pedido = tb_pedido_item.id_pedido order by dt_pedido desc; 

    `

    const [linhas] = await con.query(comando);

    return linhas;

}

