
import axios from 'axios';



export async function CadastrarCor(idProduto, idCategorias) {



        const resposta = await axios.post('http:// localhost:5036/adm/associacao/categoria-produto', {
        
        idProduto: idProduto,
        idCategorias: idCategorias

        })

        return resposta.data;


}



