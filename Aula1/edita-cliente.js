// pega a URL da pagina
const pegaURL = new URL(window.location);

// usa o método da URL .searchParams pra pegar o valor do id
const id = pegaURL.searchParams.get('id');

// pega o valor dos campos e insere no detalhamento do cliente por id
const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados => {
  inputCPF.value = dados[0].cpf
  inputNome.value = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]');

const alerta = (classe, mensagem) => {
  const linha = document.createElement('tr');
  
  const conteudoLinha = `
  <div class="${classe}">
    ${mensagem}
  </div>
  `;
  
  linha.innerHTML = conteudoLinha;
  return linha;
}

// função pra enviar dados editados
formEdicao.addEventListener("submit", event => {
  event.preventDefault()

  // verifica se o CPF editado é válido
  if(!validaCPF(inputCPF.value)) {
    alert("Esse CPF não existe.")
    return;
  }

  editaCliente(id, inputCPF.value, inputNome.value)
  .then(resp => {
    console.log(resp)
    if(resp.status === 200) {
      formEdicao.appendChild(alerta(
        'alert alert-success',
        'Cliente editado com sucesso!'
      ))
    } else {
      formEdicao.appendChild(alerta(
        'alert alert-warning',
        'Erro na edição do cliente.'
      ))
    }
  })
})