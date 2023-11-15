
import axios from 'axios';



export async function cadastrarCliente(nome, email, senha, termos) {



        const resposta = await axios.post('http://129.148.42.252:5036/user/cadastro/usuario', {
        nome: nome, 
        email: email,
        senha: senha,
        termos: termos

        })

        return resposta.data;


}



