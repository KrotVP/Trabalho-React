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
      await API.post(`/endereco`, data)
    } catch (error) {
      console.log(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Editar Endereco</AdicionarH2>
        <fieldset style={{ border: "1px solid green" }}>
       
          <Form.Group className="mb-3">
            <Form.Label>Cep</Form.Label>
            <Form.Control type="text" placeholder="" name="cep"{...register("cep")} />
           
          </Form.Group>
        
          {/* <Form.Group className="mb-3" >
            <Form.Label>Rua</Form.Label>
            <Form.Control type="text" placeholder="São Sebastião" name="rua" {...register("rua")} />
            
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="" name="cidade" {...register("cidade")} />
          
          </Form.Group> */}
        
          <Form.Group className="mb-3">
            <Form.Label>Numero</Form.Label>
            <Form.Control type="text" placeholder="" name="numero"{...register("numero")} />
           
          </Form.Group>

          {/* <Form.Group className="mb-3" >
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Ex: Mosela" name="bairro" {...register("bairro")} />
            
          </Form.Group> */}

          <Form.Group className="mb-3" >
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" placeholder="" name="complemento" {...register("complemento")} />
          
          </Form.Group>

          {/* <Form.Group className="mb-3" >
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="" name="estado" {...register("estado")} />
         
          </Form.Group> */}
       
          <Button type="submit" style={{ background: "green" }} >Editar</Button>
        </fieldset>

        
      </Form>
    </>
  );
}