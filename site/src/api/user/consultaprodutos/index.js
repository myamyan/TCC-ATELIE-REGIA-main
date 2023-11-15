import axios from 'axios';



export async function ConsultarProdutos() {



        const resposta = await axios.get('http://localhost:5036/user/lista/busca')
        return resposta.data;


}


