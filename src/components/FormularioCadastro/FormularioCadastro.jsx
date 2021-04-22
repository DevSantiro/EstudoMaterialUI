import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("Rodrigo");
  const [sobrenome, setSobrenome] = useState("Santiago");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let auxNome = event.target.value;
          setNome(auxNome);
        }}
        fullWidth
        id="nome"
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
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros({cpf:ehValido});
        }}
        fullWidth
        id="cpf"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
