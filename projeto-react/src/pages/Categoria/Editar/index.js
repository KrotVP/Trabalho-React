import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import {EditarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from '../../../services/api';
import { DataContext } from '../../../context/data';

const validationPost = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório"),
  descricao: yup.string(),
  nomeNovo:yup.string()
});

export const Editar = () => {
  const {token}=React.useContext(DataContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });
  const onSubmit = async (data) => {
    const meuToken="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzMzMzkzNzUwNi1mdW5jaW9uYXJpbzEtZnVuY2lvbmFyaW8iLCJleHAiOjE2NTYxOTQ0MDZ9.AoWLc_-Mfbp_V5ovmPBMCgHKn-ovnNfXkaaORFqhSRZ_wDedQ0CiPBDDzGI6Ydz1j9DF9Dbzn2whZRLILUVBig"

    console.log(data);
    const dados={
      nome:data.nomeNovo,
      descricao:data.descricao
    }
    reset();
    try{
      console.log()
      await API.put(`categoria/${data.nomeAntigo}`,dados,{headers:{Authorization:meuToken}})
      alert("Categoria editada com sucesso!")
    }catch(e){
      console.log(e.message);
    }
  }


  return (

    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <EditarH2>Editar Categoria</EditarH2>
        <fieldset style={{ border: "1px solid yellow" }}>
          <Form.Group className="mb-3">
            <Form.Label>Nome Antigo</Form.Label>
            <Form.Control type="text" placeholder="Nome antigo da Categoria" name="nomeAntigo" {...register("nomeAntigo")} />
            <p className="error-message"> {errors.nomeAntigo?.message}</p>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição da Categoria" name="descricao" {...register("descricao")} />
            <p className="error-message"> {errors.descricao?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome novo da Categoria" name="nome" {...register("nome")} />
            <p className="error-message"> {errors.nome?.message}</p>
            <br />
          </Form.Group>
          <Button style={{ background: "yellow", color: "black" }} type="submit">Editar</Button>
        </fieldset>
      </Form>
    </>
  )
}