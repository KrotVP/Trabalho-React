import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from '../../../services/api';



export const EditarEndereco = () => {

  const { register, handleSubmit, reset} = useForm();

  const onSubmitAdd = async (data) => {
    reset();
    console.log(data);
    try{
      await API.put(`/endereco/${data.nome}`, data)
    } catch (error) {
      console.log(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Editar Endereco</AdicionarH2>
        <fieldset style={{ border: "1px solid yellow" }}>
       
          <Form.Group className="mb-3">
            <Form.Label>Cep</Form.Label>
            <Form.Control type="text" placeholder="" name="cep"{...register("cep")} />
           
          </Form.Group>
        
             
          <Form.Group className="mb-3">
            <Form.Label>Numero</Form.Label>
            <Form.Control type="text" placeholder="" name="numero"{...register("numero")} />
           
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" placeholder="" name="complemento" {...register("complemento")} />
          
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" name="Nome" {...register("nome")} />
          
          </Form.Group>


         
       
          <Button type="submit" style={{ background: "yellow", color:"black" }} >Editar</Button>
        </fieldset>

        
      </Form>
    </>
  );
}