//import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './styles.css';
import Botao from '../../components/Botao';
import {useHistory} from 'react-router-dom';
import {EditarCliente} from './EditarCliente';


export const Client = (props) => {
  const history = useHistory();

  const [cliente, setcliente] = useState({
    nome: "aaaaaaaaaaa",
    cpf: "",
    telefone: "",
    dataDeNascimento: ''
  })

  return (
    <>



      <h2>Cliente</h2>
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

            defaultValue={cliente.nome}
            InputProps={{
              readOnly: true,

            }}

          />
          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="CPF"

            defaultValue={cliente.cpf}
            InputProps={{
              readOnly: true,

            }}
          />
          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="Telefone"

            defaultValue={cliente.telefone}
            InputProps={{
              readOnly: true,

            }}

          />


          <TextField

            id="outlined-read-only-input"
            color="success" focused
            label="Data de Nascimento"
            defaultValue={cliente.dataDeNascimento}
            InputProps={{
              readOnly: true,
            }}
          />

        </div>

      </Box>

      <Stack spacing={5} direction="row">
        <Botao nome="Deletar" color="error" ></Botao>
        <Botao nome="Endereço" color="warning" onClick = {()=>history.push("/endereco",{text: cliente.nome})} 
        ></Botao>
            
      </Stack>
       <EditarCliente/>



    </>
  )
}