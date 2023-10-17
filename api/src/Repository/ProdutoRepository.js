
import { con } from './connection.js';




export async function CadastroProduto( produto ) {

    const comando = `

    insert into tb_pedido ( id_produto, nm_produto, ds_detalhes, ds_designer_produto, ds_categoria_produto, dc_estoque, ds_cor_produto, ds_tecido_produto, ds_tamanho_produto, dc_valor, dc_valor_promocional, bt_promocao, bt_destaque, bt_disponivel, ds_linkimagem )
        values( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  );

    `

    const [resposta] = await con.query(comando, [ produto.nome, produto.detalhes, produto.designer, produto.categoria, produto.estoque, produto.cor, produto.tecido, produto.tamanho, produto.valor, produto.valorpromo, produto.promocaobool, produto.destaquebool, produto.disponivelbool,
    produto.linkimagem ]);

    produto.id = resposta.insertId;

    return produto;


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
    
    select * from tb_produto 
    
    where ds_categoria_produto like ?

    `

    const [linhas] = await con.query(comando, [`%${categoria}%`]);

    return linhas;

}


// export async function FiltroPorValor( valor ) {

//     const comando = `  

//     select * from tb_produto 

//     where dc_valor or dc_valor_promocional between ? or ?;

//     `

//     const [ linhas ] = await con.query( comando, [ valor ] );

//     return linhas[0];

// }

export async function FiltroPorTamanho(tamanho) {

    const comando = `  
    
    select * from tb_produto 
    
    where ds_tamanho_produto like ?;

    `

    const [linhas] = await con.query(comando, [`${tamanho}`]);

    return linhas;

}



export async function FiltroPorTecido(tecido) {

    const comando = `  
    
    select * from tb_produto 
    
    where ds_tecido_produto like ?;

    `

    const [linhas] = await con.query(comando, [`${tecido}`]);

    return linhas;

}

export async function FiltroPorCor(cor) {

    const comando = `  
    
    select * from tb_produto 
    
    where ds_cor_produto like ?;

    `

    const [linhas] = await con.query(comando, [`${cor}`]);

    return linhas;

}


export async function FiltroPorDesigner(designer) {

    const comando = `  
    
    select * from tb_produto 
    
    where ds_designer_produto like ?;

    `

    const [linhas] = await con.query(comando, [`${designer}`]);

    return linhas;

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


export async function AlterarProduto(id, produto) {

    const comando =
        `
    update  tb_produto
    set     nm_produto              = ?,
            ds_detalhes             = ?,
            ds_designer_produto     = ?,
            ds_categoria_produto    = ?,
            dc_estoque              = ?,
            ds_cor_produto          = ?,
            ds_tecido_produto       = ?,
            ds_tamanho_produto      = ?,
            dc_valor                = ?,
            dc_valor_promocional    = ?,
            bt_promocao             = ?,
            bt_destaque             = ?,
            bt_disponivel           = ?,
            ds_linkimagem           = ?
            
            WHERE id_produto         = ?`

    const [resposta] = await con.query( comando, [produto.nome, produto.detalhes, produto.designer, produto.categoria, produto.estoque, produto.cor, produto.tecido, produto.tamanho, produto.valor, produto.valorpromo, produto.promocaobool, produto.destaquebool, produto.disponivelbool, produto.linkimagem, id]);

    return resposta.affectedRows;
}





export async function DeletarProduto( id ) {

    const comando =
        `delete from tb_produto
                where id_produto = ? `

    const [resposta] = await con.query(comando, [ id ]);
    return resposta.affectedRows;
}

