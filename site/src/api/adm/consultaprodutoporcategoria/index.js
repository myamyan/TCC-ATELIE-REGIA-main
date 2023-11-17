
import axios from 'axios';



export async function ConsultarporCategoria(categoria) {



        const resposta = await axios.post('http:// 129.148.42.252:5036/adm/filtro/categoria', {
        
        categoria: categoria

        })

        return resposta.data;


}



