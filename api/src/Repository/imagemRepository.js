
import { con } from './connection.js';



export async function cadastrarImagem( imagem, id ) {


    const comando = 

    `         
        update tb_produto
        set ds_linkimagem = ?
        where id_produto = ?
    `

    const [resposta] = await con.query(comando, [ imagem, id ]);
    return resposta.affectedRows;


}