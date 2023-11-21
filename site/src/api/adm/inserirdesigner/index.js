
import axios from 'axios';



export async function CadastrarCategoria(nome) {



        const resposta = await axios.post('http:// localhost:5036/adm/cadastro/designer', {
        
        nome: nome

        })

        return resposta.data;


}



