
import axios from 'axios';



export async function CadastrarCor(idProduto, idTamanho) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/associacao/tamanho-produto', {
        
        idProduto: idProduto,
        idTamanho: idTamanho

        })

        return resposta.data;


}



