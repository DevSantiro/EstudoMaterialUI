function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "CPF deve ter 11 dígitos."}
  }
  return {valido: true, texto: ""}
}

function validarSenha(password){
  if(password.length < 4 || password.length > 72){
    return {valido: false, texto: "Senha deve ter entre 4 e 72 dígitos."}
  }
  return {valido: true, texto: ""}
}

function validarNome(nome){
  if(nome.length < 4){
    return {valido: false, texto: "O Nome deve ser maior que 4 dígitos."}
  }
  return {valido: true, texto: ""}
}


export {validarCPF, validarSenha, validarNome};