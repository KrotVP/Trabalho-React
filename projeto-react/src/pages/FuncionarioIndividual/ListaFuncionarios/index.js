import React, { useContext } from 'react';
import { Table} from 'react-bootstrap';
import Botao from '../../../components/Botao/index'
import { useState,useEffect } from 'react';
import { EditarH1 } from './styles';
import {useHistory} from 'react-router-dom';
import { DataContext } from '../../../context/data';
import { API } from '../../../services/api';

export const ListaFuncionarios = () => {
    const {token} = useContext(DataContext)
    const history = useHistory();
    const [list, setLista] = useState([{}])

    const [cpfDelete, setCpfDelete] = useState('');

    const handleDelete = (e)=>{
        setCpfDelete(e);
    }
    useEffect(()=>{
        const getFuncionarios=async () => {
            console.log("entrou");
            console.log(token, "*")
            const listagem= await API.get(`funcionario`,{headers:{Authorization:token}})
            setLista(listagem.data)
        }
        getFuncionarios()
    },[])
    console.log(cpfDelete);
    return (
        <>
            <EditarH1>Lista de Funcionários</EditarH1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                {
                    list.map((item) => {
                        
                        return (
                            <>


                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.cpf}</td>
                                        <td>{item.telefone}</td>
                                        <Botao nome="Deletar"  color= "error" onClick = {()=> handleDelete(item.cpf)}/>
                                    </tr>
                                    
                                </tbody>
                                
                            </>
                        )
                    })
                }
            </Table>


        </>
    )
}