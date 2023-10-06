import { con } from './connection.js';

export async function inserirloginadm(produto) {

    const comando=
`insert into tb_admin (ds_email, ds_senha)
values (?, ?);`    

const [resposta] = await con.query(comando, [produto.email, produto.senha]);
    produto.id = resposta.insertId;

    return produto;
}
export async function inserirproduto(produto) {
    const comando = `
      INSERT INTO tb_produto (
        id_imagem,
        id_categorias,
        id_produto_tamanho,
        id_produto_cores,
        id_produto_tecidos,
        nm_produto,
        vl_preco,
        vl_promocao,
        bt_promocao,
        bt_destaque,
        bt_disponivel,
        ds_detalhes,
        nr_estoque
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  
    const [resposta] = await con.query(comando, [
      produto.id_imagem,
      produto.id_categorias,
      produto.id_produto_tamanho,
      produto.id_produto_cores,
      produto.id_produto_tecidos,
      produto.nm_produto,
      produto.vl_preco,
      produto.vl_promocao,
      produto.bt_promocao,
      produto.bt_destaque,
      produto.bt_disponivel,
      produto.ds_detalhes,
      produto.nr_estoque
    ]);
  
    produto.id = resposta.insertId;
  
    return produto;
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

export async function inserirImagem(imgLink) {
    try {
     
      await con.connect();
  
     
      const comando = 'INSERT INTO tb_produto_imagem (img_link) VALUES (?)';
  
   
      const [resposta] = await con.query(comando, [imgLink]);
      const id_imagem = resposta.insertId;
  
      return { id_imagem, img_link: imgLink };
    } catch (error) {
      console.error('Erro ao inserir imagem:', error);
      throw error;
    } finally {
      con.end();
    }
  }
  


export async function enviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/roupa/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}
