
import axios from 'axios';



export async function CadastrarCategoria(nome) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/cadastro/categoria', {
        
        nome: nome

        })

        return resposta.data;


}



