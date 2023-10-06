import {con} from '../Repository/connection.js'

export async function inserirloginadm(produto) {

    const comando=
`insert into tb_admin (ds_email, ds_senha)
values (?, ?);`    

const [resposta] = await con.query(comando, [produto.email, produto.senha]);
    produto.id = resposta.insertId;

    return produto;
}

export async function inserirproduto(img) {

    const comando=
`insert into tb_produto (id_imagem, id_categorias, id_produto_tamanho, id_produto_cores, id_produto_tecidos, nm_produto, vl_preco, vl_promocao, bt_promocao, bt_destaque, bt_disponivel, ds_detalhes, nr_estoque)
values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?);`    

const [resposta] = await con.query(comando, [img.imagem, img.categorias, img.produto_tamanho, img.produto_cores, img.produto_tecidos, img.produto, img.preco, img.promocao, img.promocao, img.destaque, img.disponivel, img.detalhes, img.estoque]);
    img.id = resposta.insertId;

    return img;
}
        

export async function inserirclientelogin(cliente) {
    const comando = `insert into tb_cliente (nm_cliente, ds_email, ds_senha, ds_cpf, ds_genero, ds_num_celular)
    values (?, ?, ?, ?, ?, ?);`

    const [resposta] = await con.query (comando, [cliente.nome, cliente.email, cliente.senha,cliente.cpf, cliente.genero, cliente.celular]);
    cliente.id = resposta.insertId;

    return cliente;
    
}

export async function inserirdesigner(designer) {
    const comando = `    
    insert into tb_designer (nm_designer)
        values( ?);`

        const [resposta] = await con.query (comando, [designer.nome]);
        designer.id = resposta.insertId;

        return designer;
}


export async function inserircategorias(categoria) {
    const comando = `insert into tb_categorias (nm_categoria)
	values(?);`

    const [resposta] = await con.query (comando, [categoria.nome]);
    categoria.id = resposta.insertId;

    return categoria;
}
  

export async function inserirtecidos(tecidos) {
    const comando = `insert into tb_produto_tecidos(ds_tipo)
	values(?);`

    const [resposta] = await con.query (comando, [tecidos.tipo]);
    tecidos.id = resposta.insertId;

    return tecidos;
}

export async function inserircores (cores) {
    const comando = `insert into tb_produto_cores (ds_hexa_decimal)
	values(?);`

    const[resposta] = await con.query(comando, [cores.codhexa]);
    cores.id = resposta.insertId;

    return cores;
}

