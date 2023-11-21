
import axios from 'axios';



export async function ConsultarProdutoMaisCaro() {



        const resposta = await axios.get('http:// localhost:5036/adm/consulta/produtos-caros')
        return resposta.data;


}


