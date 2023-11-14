
import axios from 'axios';



export async function ConsultarImagens() {



        const resposta = await axios.get('http://localhost:5036/adm/busca/imagem/:id',{ id:id })

        
        return resposta.data;


}


