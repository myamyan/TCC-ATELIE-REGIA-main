
import axios from 'axios';



export async function CadastrarCor(tamanho) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/cadastro/tamanho', {
        
        tamanho: tamanho

        })

        return resposta.data;


}



