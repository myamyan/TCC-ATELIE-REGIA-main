import axios from "axios";

export async function addEndereco(endereco, cep, complemento, numres) {

  const resposta = await axios.post("http://localhost:5036/user/cadastro/informacoes-entrega", {
    endereco: endereco,
    cep: cep,
    complemento: complemento,
    numres: numres
  });
  return resposta.data;
}

export async function AssociarEndereco( endereco, cliente ){
  const resp = await axios.post("http://localhost:5036/user/associacao/endereco-cliente", {
    endereco: endereco,
    cliente: cliente
  });

  return resp.data;
}

export async function altEndereco(endereco, cep, complemento, numres, id) {
  const resposta = await axios.put(
    `http://localhost:5036/user/alterar/endereco/${id}`,
    {
      endereco: endereco,
      cep: cep,
      complem: complemento,
      numero: numres,
      id: id,
    }
  );
  return resposta.data;
}

export async function verEndereco(id) {
  const resposta = await axios.get(
    `http://localhost:5036/user/consulta/enderecos?id=${id}`
  );

  return resposta.data;
}



export async function verificarId(id) {
  const resposta = await axios.get(
    "http://localhost:5036/user/consulta/enderecos"
  );

  return resposta.data;
}
