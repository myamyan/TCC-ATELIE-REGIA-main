
import axios from 'axios';



export async function CadastrarTecido(tipo) {



        const resposta = await axios.post('http:// localhost:5036/adm/cadastro/tecidos', {
        
        tipo: tipo

        })

        return resposta.data;


}



