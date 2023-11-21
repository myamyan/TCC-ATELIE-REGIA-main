
import axios from 'axios';



export async function ConsultarPedidos() {



        const resposta = await axios.get('http:// localhost:5036/adm/consulta/pedidos')
        return resposta.data;


}


