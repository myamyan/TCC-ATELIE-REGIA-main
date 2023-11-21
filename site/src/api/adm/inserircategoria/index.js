
import axios from 'axios';



export async function CadastrarCategoria(nome) {



        const resposta = await axios.post('http:// localhost:5036/adm/cadastro/categoria', {
        
        nome: nome

        })

        return resposta.data;


}



