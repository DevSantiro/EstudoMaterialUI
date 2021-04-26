import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        fullWidth
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          let auxSobrenome = event.target.value;
          setSobrenome(auxSobrenome);
        }}
        fullWidth
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
      />

      <TextField
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        fullWidth
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch checked={promocoes} name="Promoções" onChange={(event) => {
             setPromocoes(event.target.checked);
          } }
         color="primary" />
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch checked={novidades} name="Novidades" onChange={(event) => {
            setNovidades(event.target.checked);
          }}
          color="primary" />
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
