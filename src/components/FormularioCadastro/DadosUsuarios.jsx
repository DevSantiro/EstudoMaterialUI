import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuarios({ aoEnviar }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar( {email, senha} );
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
        id="email"
        label="email"
        type="email"
        fullWidth
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={senha}
        onChange={(event) => { 
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        fullWidth
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
