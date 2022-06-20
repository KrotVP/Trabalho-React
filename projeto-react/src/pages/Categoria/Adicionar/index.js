import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from '../../../services/api';

const validationPost = yup.object().shape({
  nomeAdicionar: yup.string().required("O campo nome é obrigatório"),
  descricaoAdicionar: yup.string().required("A campo descrição é obrigatório"),

});

export const Adicionar = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });
  const onSubmitAdd = async (data) => {
    reset();
    console.log(data);
    try{
      await API.post(`/categoria`, data)
    } catch (error) {
      console.log(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Adicionar Categoria</AdicionarH2>
        <fieldset style={{ border: "1px solid green" }}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da Categoria" name="nomeAdicionar"{...register("nomeAdicionar")} />
            <p className="error-message"> {errors.nomeAdicionar?.message}</p>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição da Categoria" name="descricaoAdicionar" {...register("descricaoAdicionar")} />
            <p className="error-message"> {errors.descricaoAdicionar?.message}</p>
          </Form.Group>
          <Button type="submit" style={{ background: "green" }} >Adicionar</Button>
        </fieldset>
      </Form>
    </>
  );
}