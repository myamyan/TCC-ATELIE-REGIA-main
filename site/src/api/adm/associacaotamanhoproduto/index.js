
import axios from 'axios';



export async function CadastrarCor(idProduto, idTamanho) {



        const resposta = await axios.post('http:// localhost:5036/adm/associacao/tamanho-produto', {
        
        idProduto: idProduto,
        idTamanho: idTamanho

        })

        return resposta.data;


}



