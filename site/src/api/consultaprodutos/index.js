import axios from 'axios';



export async function ConsultarProdutos() {



        const resposta = await axios.get('http://localhost:5038/user/lista/busca')
        return resposta.data;


}


