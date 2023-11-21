
import axios from 'axios';



export async function AssociarImagemProdutoAdm(idProduto, idImagem) {



        const resposta = await axios.post('http:// localhost:5036/adm/associacao/imagem-produto', {
        
        idProduto: idProduto,
        idImagem: idImagem

        })

        return resposta.data;


}



