const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement('tr');
  
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">DELETAR</button>
  <a href="edita-clientes.html?id=${id}">
    <button type="button" class="btn btn-info">EDITAR</button>
  </a>
  `;
  
  linha.innerHTML = conteudoLinha;
  
  return linha;
};

const removeCliente = id => {
  if(confirm("Deseja deletar o cliente?")) {
    deletaCliente(id);
    document.location.reload();
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then(clientes => {
    clientes.forEach(index => {
      corpoTabela.appendChild(exibeCliente(index.cpf, index.nome, index.id));
    })
  }
);