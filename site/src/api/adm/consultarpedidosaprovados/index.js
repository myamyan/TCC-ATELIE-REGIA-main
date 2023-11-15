
import axios from 'axios';



export async function ConsultarPedidosAprovados() {



        const resposta = await axios.get('http://localhost:5036/adm/consulta/pedidos-em-andamento')
        return resposta.data;


}


