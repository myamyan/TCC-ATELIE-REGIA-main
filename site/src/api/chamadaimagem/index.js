
import axios from 'axios';



export async function ConsultarImagens(id) {



        const resposta = await axios.get(`http:// 129.148.42.252:5036/adm/busca/imagem?id=${id}`)

        
        return resposta.data;


}

export function construirUrl(imagem){
        console.log(imagem);
        return `http:// 129.148.42.252:5036/${imagem}`
}


