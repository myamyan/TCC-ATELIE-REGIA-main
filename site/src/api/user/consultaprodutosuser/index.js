import axios from 'axios';



export async function ConsultarProdutosUser() {



        const resposta = await axios.get('http:// localhost:5036/user/lista/busca')
        return resposta.data;


}

