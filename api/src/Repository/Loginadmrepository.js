import { con } from './connection.js';


export async function inserirLoginadm(loginadm) {
    
    const comando= 
    
    `INSERT INTO tb_admin (ds_email, ds_senha   )
    values(?, ?) `;
  
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