import React from 'react';
import { Table} from 'react-bootstrap';
import Botao from '../../components/Botao/index';
import { useState } from 'react';
import { EditarH1 } from './styles';
import {useHistory} from 'react-router-dom';

export const ListaPedido = () => {
    const history = useHistory();
    const [list, setLista] = useState([{
        id: 1,
        numeroPedido: 23,
        dataPedido: "10-12-2021",
        valorTotal: 1223.90
    }, {
        id: 2,
        numeroPedido: 24,
        dataPedido: "10-12-2021",
        valorTotal: 1324.98
    }]);

    const [numeroPedidoDelete, setNumeroPedidoDelete] = useState('');

    const handleDelete = (e)=>{
        setNumeroPedidoDelete(e);
    }
    console.log(numeroPedidoDelete);
    return (
        <>
            <EditarH1>Lista de Pedidos</EditarH1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Numero do Pedido</th>
                        <th>Data do Pedido</th>
                        <th>Valor Total</th>
                    </tr>
                </thead>
                {
                    list.map((item) => {
                        
                        return (
                            <>


                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.numeroPedido}</td>
                                        <td>{item.dataPedido}</td>
                                        <td>{item.valorTotal}</td>
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