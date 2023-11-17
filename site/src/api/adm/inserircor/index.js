
import axios from 'axios';



export async function CadastrarCor(codhexa) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/cadastro/cores', {
        
        codhexa: codhexa

        })

        return resposta.data;


}



