
import axios from 'axios';



export async function ConsultarPedidos() {



        const resposta = await axios.get('http:// 129.148.42.252:5036/adm/consulta/pedidos')
        return resposta.data;


}


