import { con } from './connection.js';

export async function inserircadastrousuario(cadastro) {
    
    const comando= 
    
    `INSERT INTO tb_cadastrocliente(nm_cliente, ds_email, ds_senha   )
    values(?, ?, ?) `;
  
    const [resposta] = await con.query(comando, [cadastro.cliente, cadastro.email, cadastro.senha]);
    cadastro.id = resposta.insertId;

    return cadastro;

}