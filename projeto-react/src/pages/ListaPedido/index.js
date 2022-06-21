import React, { useContext } from 'react';
import { Table} from 'react-bootstrap';
import Botao from '../../components/Botao/index';
import { useState,useEffect } from 'react';
import { EditarH1 } from './styles';
import {useHistory} from 'react-router-dom';
import { DataContext } from '../../context/data';
import { API } from '../../services/api';

export const ListaPedido = () => {
    const {token} = useContext(DataContext)
    const history = useHistory();
    const [list, setLista] = useState([{}])

    const [numeroPedidoDelete, setNumeroPedidoDelete] = useState('');

    const handleDelete = (e)=>{
        setNumeroPedidoDelete(e);
    }

    useEffect(()=>{
        const getPedidos=async () => {
            console.log("entrou");
            console.log(token, "*")
            const listagem= await API.get(`pedido`,{headers:{Authorization:token}})
            setLista(listagem.data)
        
        }
        getPedidos()
    },[])

   
    console.log(numeroPedidoDelete);
    return (
        <>
            <EditarH1>Lista de Pedidos</EditarH1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Numero do Pedido</th>
                        <th>Data da Entrega</th>
                        <th>Valor Total</th>
                        <th>Finalizado</th>
                    </tr>
                </thead>
                {
                    list.map((item) => {
                        return (
                            <>


                                <tbody>
                                    <tr>
                                        <td>{item.cpf}</td>
                                        <td>{item.numeroDoPedido}</td>
                                        <td>{item.dataDaEntrega}</td>
                                        <td>{item.valorTotalDoPedido}</td>
                                        <td>{item.finalizado}</td>
                                        <Botao nome="Deletar"  color= "error" onClick = {()=> handleDelete(item.numeroPedido)}/>
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