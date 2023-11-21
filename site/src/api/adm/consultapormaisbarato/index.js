
import axios from 'axios';



export async function ConsultarProdutoMaisBarato() {



        const resposta = await axios.get('http:// localhost:5036/adm/consulta/produtos-baratos')
        return resposta.data;


}


