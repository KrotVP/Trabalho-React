import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { DeletarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from '../../../services/api';
import { DataContext } from '../../../context/data';

const validationPost = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório")
  
});

export const Deletar = () => {
  const {token}= React.useContext(DataContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });
  const onSubmit = async (data) => {
    console.log(data);
    reset();
    try{
      console.log(token)
      await API.delete(`categoria/${data.nome}`,data,{headers:{Authorization:token}})
      alert("Categoria deletada com sucesso")
    }catch(e){
      console.log(e.message);
    }
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DeletarH2>Deletar Categoria</DeletarH2>
        <fieldset style={{border: "1px solid red"}}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da Categoria" name="nome"{...register("nome")} />
            <p className="error-message"> {errors.nome?.message}</p>
        <br />
          </Form.Group>
          
          <Button style={{background:"red"}} type="submit">Deletar</Button>
        </fieldset>
      </Form>
    </>
  );
}