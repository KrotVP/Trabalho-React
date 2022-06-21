import * as React from 'react';
import './styles.css';
import { Form, Button} from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from '../../../services/api';
import { DataContext } from '../../../context/data';


const validationPost = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório"),
  descricao: yup.string().required("A campo descrição é obrigatório"),

});

export const Adicionar = () => {
  const {token}=React.useContext(DataContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });
  const meuToken="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzMzMzkzNzUwNi1mdW5jaW9uYXJpbzEtZnVuY2lvbmFyaW8iLCJleHAiOjE2NTYxOTQ0MDZ9.AoWLc_-Mfbp_V5ovmPBMCgHKn-ovnNfXkaaORFqhSRZ_wDedQ0CiPBDDzGI6Ydz1j9DF9Dbzn2whZRLILUVBig"
  const onSubmitAdd = async (data) => {
    reset();
    console.log(data);
    try{
     const response=await API.post(`/categoria`, data, {headers:{Authorization:meuToken}})
       alert("Categoria adicionado com sucesso");
    } catch (error) {
      alert(error.message)
      
    }
    
    
    
  }

  return (

    <>
      <Form onSubmit={handleSubmit(onSubmitAdd)}>
        <AdicionarH2>Adicionar Categoria</AdicionarH2>
        <fieldset style={{ border: "1px solid green" }}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da Categoria" name="nome"{...register("nome")} />
            <p className="error-message"> {errors.nome?.message}</p>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição da Categoria" name="descricao" {...register("descricao")} />
            <p className="error-message"> {errors.descricao?.message}</p>
          </Form.Group>
          <Button type="submit" style={{ background: "green" }}>Adicionar</Button>
        </fieldset>
      </Form>
    </>
  );
}