
import axios from 'axios';



export async function ConsultarProdutoMaisBarato() {



        const resposta = await axios.get('http:// 129.148.42.252:5036/adm/consulta/produtos-baratos')
        return resposta.data;


}


