
import axios from 'axios';



export async function ConsultarProdutoMaisCaro() {



        const resposta = await axios.get('http:// 129.148.42.252:5036/adm/consulta/produtos-caros')
        return resposta.data;


}


