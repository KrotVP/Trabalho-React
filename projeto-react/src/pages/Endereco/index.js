//import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';
import './styles.css';


import { EditarEndereco } from './EditarEndereco';

export const Endereco = (props) => {
  /*
    cep: '',
      rua: '',
      Bairro:'',
      cidade:'',
      numero:'',
      complemento:'',
      Estado:''
  */

  const endereco = [{
    nome: 'João',
    cep: 'a',
    rua: 'a',
    Bairro: 'a',
    cidade: 'a',
    numero: 'a',
    complemento: 'a',
    Estado: 'a'
  },
  {
    nome: 'alan',
    cep: 'b',
    rua: 'b',
    Bairro: 'b',
    cidade: 'b',
    numero: 'b',
    complemento: 'b',
    Estado: 'b'
  }]
  return (
    <>
      {
        endereco.map((item) => {
          return (

            <>
              <h2 color={{color:'rgb(243, 123, 10)'}} >Endereço</h2>
              <Box
                style={{
                  border: "1px solid rgb(243, 123, 10)",
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
                    color="warning" focused
                    label="Nome"

                    defaultValue={item.nome}
                    InputProps={{
                      readOnly: true,

                    }}
                  />
                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Cep"

                    defaultValue={item.cep}
                    InputProps={{
                      readOnly: true,

                    }}

                  />
                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Rua"

                    defaultValue={item.rua}
                    InputProps={{
                      readOnly: true,

                    }}
                  />

                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Bairro"

                    defaultValue={item.Bairro}
                    InputProps={{
                      readOnly: true,

                    }}

                  />

                </div>
                <div>


                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Cidade"
                    defaultValue={item.cidade}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Numero"
                    defaultValue={item.numero}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Complemento"
                    defaultValue={item.complemento}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField

                    id="outlined-read-only-input"
                    color="warning" focused
                    label="Estado"
                    defaultValue={item.Estado}
                    InputProps={{
                      readOnly: true,
                    }}
                  />


                </div>
              </Box>
              <Stack spacing={2} direction="row">
                <Button style={{ panding: "100px" }} size="large" color="error" variant="contained" startIcon={<DeleteIcon />} >Deletar</Button>
               <Button style={{ panding: "100px" }} size="large" color="warning" variant="contained" >Editar</Button>
              </Stack>


            </>
          )
        }


        )
      }
      
    </>
  )
}