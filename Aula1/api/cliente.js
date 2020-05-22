// colocar o fetch dentro de uma função
const listarClientes = () => {
  // o retorno do fetch é uma Promise, para lidar com Promise usamos .then()
  return fetch("http:localhost:4000/clientes", {
    method: "get"
  })
    // then() mostra a resposta da Promise. pedimos o json() dessa resposta
    .then(resp => {
      return resp.json();
    })
    // o json() retorna outra Promise, por isso encadeamos o método then()
    .then(json => {
      return json;
  });
};

// função POST
const cadastrarClientes = (nome, cpf) => {
  // variável criada para passar no body
  const json = JSON.stringify({
    // inserir os dados
    nome: nome,
    cpf: cpf
  });
  // também faz um fetch
  return fetch("http:localhost:4000/clientes/cliente", {
    // tem que definir qual o tipo de método quer que o fetch execute
    // no GET não precisou definir porque é o padrão
    method: "POST",
    // tem que passar o headers - o tipo de dado enviado pro servidor
    headers: {
      'Content-Type': 'application/json'
    },
    // body para enviar os dados dos clientes
    body: json
  })
  // then() para pegar o resultado do fetch
  .then(resp => {
    console.log("resp do fetch cadastrar", resp)
    // envia o body pro servidor
    return resp.body;
  })
}

// função DELETE
const deletaCliente = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE"
  })
}

// função GET unitário
const detalhaCliente = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "GET"
  })
  .then(resp => {
    return resp.json();
  })
}

// função PUT
const editaCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  });

  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
}