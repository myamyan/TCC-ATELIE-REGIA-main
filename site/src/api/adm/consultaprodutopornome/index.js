
import axios from 'axios';



export async function ConsultarporNome(nome) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/filtro/nome', {
        
        nome: nome

        })

        return resposta.data;


}



