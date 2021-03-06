import * as React from 'react';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import { DataContext } from '../../../context/data';
import { API } from '../../../services/api';


export const CriarFuncionario = () => {
  const {token} = React.useContext(DataContext)
  const { register, handleSubmit, reset} = useForm();
  const onSubmitAdd = async (data) => {
    reset();
    console.log(data);
    try{
      await API.post(`/funcionario`, data,{headers:{Authorization:token}})
    } catch (error) {
      console.log(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Criar Funcionario</AdicionarH2>
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
            <Form.Control type="text" placeholder="Ex:1981-07-17" name="dataDenascimento"{...register("dataDeNascimento")} />
        
          </Form.Group>

          
       
          <Button type="submit" style={{ background: "green" }} >Criar</Button>
        </fieldset>

        
      </Form>
    </>
  );
}