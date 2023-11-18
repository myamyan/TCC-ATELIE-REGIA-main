import axios from 'axios';

export async function buscarCartao(id) {
  
    const resposta = await axios.put('http://129.148.42.252:3000/user/consulta/cartao/:id', {
            id: id

        })
            return resposta.data;
        }
  

  