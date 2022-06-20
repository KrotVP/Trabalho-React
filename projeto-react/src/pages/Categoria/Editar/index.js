import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import {EditarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const validationPost = yup.object().shape({
  nomeEditar: yup.string().required("O campo nome é obrigatório"),
  descricaoEditar: yup.string().required("A campo descrição é obrigatório"),

});

export const Editar = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }


  return (

    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <EditarH2>Editar Categoria</EditarH2>
        <fieldset style={{ border: "1px solid yellow" }}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da Categoria" name="nomeEditar" {...register("nomeEditar")} />
            <p className="error-message"> {errors.nomeEditar?.message}</p>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição da Categoria" name="descricaoEditar" {...register("descricaoEditar")} />
            <p className="error-message"> {errors.descricaoEditar?.message}</p>
          </Form.Group>
          <Button style={{ background: "yellow", color: "black" }} type="submit">Editar</Button>
        </fieldset>
      </Form>
    </>
  )
}