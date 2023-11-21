
import axios from 'axios';



export async function CadastrarProduto(nome, preco, promocao, promocaobool, destaquebool, disponivelbool, detalhes, estoque, iddesigner) {



        const resposta = await axios.post('http:// localhost:5036/adm/cadastro/produto', {
        nome: nome, 
        preco: preco,
        promocao: promocao,
        promocaobool: promocaobool,
        destaquebool: destaquebool,
        disponivelbool: disponivelbool,
        detalhes: detalhes,
        estoque: estoque,
        iddesigner: iddesigner

        })

        return resposta.data;


}



