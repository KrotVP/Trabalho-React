import * as React from 'react';
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';

import { API } from '../../../services/api';


export const EditarProduto = () => {

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
        <AdicionarH2>Editar Produto</AdicionarH2>
        <fieldset style={{ border: "1px solid yellow" }}>
       
       
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" name="nome"{...register("nome")} />
          
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder=" " name="descricao" {...register("descricao")} />
           
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="" name="categoria" {...register("categoria")} />
       
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label>Preço</Form.Label>
            <Form.Control type="text" placeholder="" name="preco"{...register("preco")} />
        
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade em Estoque</Form.Label>
            <Form.Control type="text" placeholder="" name="quantEstoque"{...register("quantEstoque")} />
        
          </Form.Group>

          
       
          <Button type="submit" style={{ background: "yellow", color:'black' }} >Editar</Button>
        </fieldset>

        
      </Form>
    </>
  );
}