//import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import {EditarFuncionario} from './EditarFuncionario';

import { useState } from 'react';
import './styles.css';


export const FuncionarioIndividual = (props) => {

  const[funcionario, setFuncionario] = useState({
    nome:"aaaaaaaaaaa",
		cpf: "",
		telefone:"",
	  dataDeNascimento:''
  })

  return (
    <>
      

           
              <h2>Funcionário</h2>
              <Box
                style={{
                  border: "1px solid green",
                  borderRadius: "5px"
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
              <Stack spacing={2} direction="row">
                <Button style={{ panding: "100px" }} size="large" color="error" variant="contained" startIcon={<DeleteIcon />} >Deletar</Button>
                {/* <Button style={{ panding: "100px" }} size="large" color="success" variant="contained" >Editar</Button> */}
              </Stack>

              <EditarFuncionario/> 

          
    </>
  )
}