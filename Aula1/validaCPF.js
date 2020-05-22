function verificaCPFInvalidos(cpf) {
  // array de CPFs que sabemos que não irão passar na validação
  const cpfsInvalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "00000000000"
  ];
  // se passarmos um cpf invalido, o indexOf() irá retornar o index desse cpf invalido
  // um cpf válido irá ter como indexOf() -1
  // o retorno dessa função é false para cpfs invalidos e true para cpfs validos
  return cpfsInvalidos.indexOf(cpf) === -1;
}

//funções que fazem a conta de validação de cpf disponibilizado pela receita

// Função para somar os números do CPF
function somaNumerosCPF(cpf, totalDeDigitos, peso) {
  let soma = 0;
  for (let indice = 1; indice <= totalDeDigitos; indice++) {
  soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
  }
  return soma;
}

// Função que verifica se a soma multiplicada por 10 e dividida por nove é igual o digito de verificação do CPF
function verificaDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao) {
  const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
  const resto = (soma * 10) % 11;
  return resto === digitoDeVerificacao;
}

// Função que verifica o primeiro digito de verificação
function verificaPrimeiroDigito(cpf) {
  const peso = 11;
  const totalDeDigitosPrimeiraParte = 9;
  const digitoDeVerificacao = parseInt(cpf.substring(9, 10));

  return verificaDigito(
    cpf,
    totalDeDigitosPrimeiraParte,
    peso,
    digitoDeVerificacao
  );
}

// Função que verifica o segundo digito de verificação
function verificaSegundoDigito(cpf) {
  const peso = 12;
  const totalDeDigitosSegundaParte = 10;
  const digitoDeVerificacao = parseInt(cpf.substring(10, 11));

  return verificaDigito(
    cpf,
    totalDeDigitosSegundaParte,
    peso,
    digitoDeVerificacao
  );
}

// console.log("Verificação do primeiro digito", verificaPrimeiroDigito("18875539081"))
// console.log("Verificação do primeiro digito", verificaPrimeiroDigito("06381069660"))
// console.log("Verificação do segundo digito", verificaSegundoDigito("18875539081"))
// console.log("Verificação do segundo digito", verificaSegundoDigito("06381069660"))

// Função matriz que reune as outras
function validaCPF(cpf) {
  return (
    // retorno será booleano dessas três funções
    verificaPrimeiroDigito(cpf) &&
    verificaSegundoDigito(cpf) &&
    verificaCPFInvalidos(cpf)
  )
}