
import axios from 'axios';



export async function CadastrarCor(idProduto, idCores) {



        const resposta = await axios.post('http:// localhost:5036/adm/associacao/cor-produto', {
        
        idProduto: idProduto,
        idCores: idCores

        })

        return resposta.data;


}



