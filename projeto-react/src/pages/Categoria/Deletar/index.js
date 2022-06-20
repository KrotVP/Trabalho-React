import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { DeletarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const validationPost = yup.object().shape({
  nomeDeletar: yup.string().required("O campo nome é obrigatório")
  
});

export const Deletar = () => {

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
        <DeletarH2>Deletar Categoria</DeletarH2>
        <fieldset style={{border: "1px solid red"}}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da Categoria" name="nomeDeletar"{...register("nomeDeletar")} />
            <p className="error-message"> {errors.nomeDeletar?.message}</p>
        <br />
          </Form.Group>
          
          <Button style={{background:"red"}} type="submit">Deletar</Button>
        </fieldset>
      </Form>
    </>
  );
}