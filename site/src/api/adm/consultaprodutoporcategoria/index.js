
import axios from 'axios';



export async function ConsultarporCategoria(categoria) {



        const resposta = await axios.post('http:// localhost:5036/adm/filtro/categoria', {
        
        categoria: categoria

        })

        return resposta.data;


}



