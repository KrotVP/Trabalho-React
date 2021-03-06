//import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './styles.css';
import Botao from '../../components/Botao';
import {CriarFuncionario} from './CriarFuncionario';
import {EditarFuncionario} from './EditarFuncionario';
import {useHistory} from 'react-router-dom';

export const FuncionarioIndividual = (props) => {
  const history = useHistory();
  const [funcionario, setFuncionario] = useState({
    nome: "aaaaaaaaaaa",
    cpf: "",
    telefone: "",
    dataDeNascimento: ''
  })

  return (
    <>



      <h2>Funcionário</h2>
      <Box
        style={{
          border: "1px solid green",
          borderRadius: "5px",
          marginBottom:"10px"
        }}
        className="teste"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>

          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="Nome"

            defaultValue={funcionario.nome}
            InputProps={{
              readOnly: true,

            }}

          />
          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="CPF"

            defaultValue={funcionario.cpf}
            InputProps={{
              readOnly: true,

            }}
          />
          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="Telefone"

            defaultValue={funcionario.telefone}
            InputProps={{
              readOnly: true,

            }}

          />


          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="Data de Nascimento"
            defaultValue={funcionario.dataDeNascimento}
            InputProps={{
              readOnly: true,
            }}
          />

        </div>

      </Box>

      <Stack spacing={5} direction="row">
        <Botao nome="Deletar" color="error" onClick = {()=> history.push("/funcionario/lista")} ></Botao>
       {/*  <Botao nome="Editar" color="warning" ></Botao>
        <Botao nome="Criar" color="success" ></Botao> */}
      </Stack>
        <CriarFuncionario/>
        <EditarFuncionario/>



    </>
  )
}