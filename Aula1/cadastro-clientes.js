// seleciona o form pelo atribute
const formCadastroCliente = document.querySelector('[data-form]');

// event listener do submit no form
formCadastroCliente.addEventListener('submit', event => {
  // previne atualização e sumir com os dados
  event.preventDefault();

  const cpf = event.target.querySelector('[data-cpf]').value;
  const nome = event.target.querySelector('[data-nome]').value;

  if(validaCPF(cpf) && cpf.length === 11) {
    cadastrarClientes(nome, cpf);
    console.log("Cadastro realizado.")
  } else {
    alert('O CPF não é válido');
  }
});