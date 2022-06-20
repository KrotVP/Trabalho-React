import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';

import { API } from '../../../services/api';


export const EditarFuncionario = () => {

  const { register, handleSubmit, reset} = useForm();
  const onSubmitAdd = async (data) => {
    reset();
    console.log(data);
    try{
      await API.put(`/funcionario`, data)
    } catch (error) {
      console.log(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Editar Funcionario</AdicionarH2>
        <fieldset style={{ border: "1px solid green" }}>
       
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" name="nome"{...register("nome")} />
          
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="somente numeros " name="cpf" {...register("cpf")} />
           
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="somente numeros" name="telefone" {...register("telefone")} />
       
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="text" placeholder="Ex:1981-07-17" name="nascimento"{...register("nascimento")} />
        
          </Form.Group>

          
       
          <Button type="submit" style={{ background: "green" }} >Editar</Button>
        </fieldset>

        
      </Form>
    </>
  );
}