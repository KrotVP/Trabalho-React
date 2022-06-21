import React from 'react';
import { Table} from 'react-bootstrap';
import Botao from '../../../components/Botao/index'
import { useState } from 'react';
import { EditarH1 } from './styles';
import {useHistory} from 'react-router-dom';

export const ListaFuncionarios = () => {
    const history = useHistory();
    const [list, setLista] = useState([{
        id: 1,
        nome: "Alan Mello",
        cpf: "09139100740",
        telefone:"21092448"
    }, {
        id: 2,
        nome: "Cauã Mello",
        cpf: "09234651782",
        telefone:"992728309"
    }]);

    const [cpfDelete, setCpfDelete] = useState('');

    const handleDelete = (e)=>{
        setCpfDelete(e);
    }
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