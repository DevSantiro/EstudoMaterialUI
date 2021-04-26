import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import "fontsource-roboto";

import {validarCPF, validarSenha, validarNome} from './models/cadastro';
import validacoesCadastro from './context/validacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <validacoesCadastro.Provider 
        value={{ cpf:validarCPF, senha:validarSenha, nome:validarNome }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
