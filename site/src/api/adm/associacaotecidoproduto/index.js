
import axios from 'axios';



export async function CadastrarCor(idProduto, idTecido) {



        const resposta = await axios.post('http:// localhost:5036/adm/associacao/tecidos-produto', {
        
        idProduto: idProduto,
        idTecido: idTecido

        })

        return resposta.data;


}



