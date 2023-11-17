import axios from 'axios';



export async function ConsultarProdutosAdm() {



        const resposta = await axios.get('http:// 129.148.42.252:5036/adm/consulta/produtos')
        return resposta.data;


}

