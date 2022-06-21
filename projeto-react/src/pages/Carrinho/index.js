import React from 'react';
import { Table} from 'react-bootstrap';
import Botao from '../../components/Botao/index';
import { useState } from 'react';
import { EditarH1 } from './styles';
import {useHistory} from 'react-router-dom';

export const Carrinho = () => {
    const history = useHistory();
    const [list, setLista] = useState([{
        id: 1,
        nomeProduto: "Alan Mello",
        categoria: "monitor",
        quantidade:1,
        valorUnitario: 1200.00,
        valorTotal:1200.00

    }, {
        id: 1,
        nomeProduto: "Alan Mello",
        categoria: "monitor",
        quantidade:1,
        valorUnitario: 1200.00,
        valorTotal:1200.00
    }]);

 
    return (
        <>
            <EditarH1>Carrinho de Compras</EditarH1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome Produto</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Valor unitário</th>
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
                                        <td>{item.nomeProduto}</td>
                                        <td>{item.categoria}</td>
                                        <td>{item.quantidade}</td>
                                        <td>{item.valorUnitario}</td>
                                        <td>{item.valorTotal}</td>
                                        <Botao nome="+1"  color= "success" onClick = {()=> item.cpf = (item.quantidade)+1}/>
                                        <Botao nome="-1"  color= "error" />
                                    </tr>
                                    
                                </tbody>
                                
                            </>
                        )
                    })
                }
            </Table>
            <Botao nome="Finalizar Pedido"  color= "success" />

        </>
    )
}