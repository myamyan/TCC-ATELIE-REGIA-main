import { con } from './connection.js';

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

export async function inserircadastrousuario(cadastro) {
    
    const comando= 
    
    `INSERT INTO tb_cadastrocliente(nm_cliente, ds_emailcliente, ds_senhacliente, bt_termos)
    values(?, ?, ?, ?) `;

    const [resposta] = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha, cadastro.termos]);
    cadastro.id = resposta.insertId;

    return cadastro;

}
