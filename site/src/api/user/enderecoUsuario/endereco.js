import axios from "axios";

export async function addEndereco(endereco, cep, complemento, numres) {
  const resposta = await axios.post("http:// 129.148.42.252:5036/endereco/", {
    endereco: endereco,
    cep: cep,
    complemento: complemento,
    numres: numres
  });
  return resposta.data;
}

export async function altEndereco(endereco, cep, complemento, numres, id) {
  const resposta = await axios.put(
    "http:// 129.148.42.252:5036user/alterar/endereco/:id",
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
    "http:// 129.148.42.252:5036/user/consulta/enderecos"
  );

  return resposta.data;
}
