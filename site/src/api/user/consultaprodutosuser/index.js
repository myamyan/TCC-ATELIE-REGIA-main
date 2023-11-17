import axios from 'axios';



export async function ConsultarProdutosUser() {



        const resposta = await axios.get('http:// 129.148.42.252:5036/user/lista/busca')
        return resposta.data;


}

