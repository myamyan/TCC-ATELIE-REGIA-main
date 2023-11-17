import axios from 'axios';


export async function altCadPerfil(nome, email, senha, id) {

        const resposta = await axios.put('http:// 129.148.42.252:3000/perfil/alt/:id', {
            nome: nome,
            email: email,
            senha: senha,
            id: id
         
        })
            return resposta.data;
        }


        export async function cadPerfil(id, data, cpf, celular) {

            const resposta = await axios.post('http:// 129.148.42.252:3000/perfil/cad/', {
                id: id,
                data: data,
                cpf: cpf,
                celular: celular
        
            })
            
            return resposta.data;
        
        }


// export async function deletarItem(id) {
//     const resposta = await api.delete(`/compra/${id}`);
//     resposta.status;
// }
   


