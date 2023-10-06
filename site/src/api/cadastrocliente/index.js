
import axios from 'axios';



export async function cadastrarCliente(nome, email, senha, termos) {



        const resposta = await axios.post('http://localhost:5000/cadastro/usuario', {
        nome: nome, 
        email: email,
        senha: senha,
        termos: termos

        })
    
        return resposta.data;


}



