import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("Rodrigo");
  const [sobrenome, setSobrenome] = useState("Santiago");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let auxNome = event.target.value;
          if (auxNome.length >= 3) {
            auxNome = auxNome.substring(0,3);
          }
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
          if (auxSobrenome.length >= 3) {
            auxSobrenome = auxSobrenome.substring(0,3);
          }
          setSobrenome(auxSobrenome);
        }}      
        fullWidth
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
      />

      <TextField
        fullWidth
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="Promoções" defaultChecked={true} color="primary" />
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="Novidades" defaultChecked={true} color="primary" />
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
