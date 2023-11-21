import axios from 'axios';



export async function ConsultarProdutosAdm() {



        const resposta = await axios.get('http://localhost:5036/adm/consulta/produtos')
        return resposta.data;


}

