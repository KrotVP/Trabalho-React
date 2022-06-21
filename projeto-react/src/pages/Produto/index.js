import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { default as Botao } from "../../components/Botao";
import Card from "../../components/Card";
import { API } from "../../services/api";
import { DivProduto } from "../Produtos/styles";
import { H1Produto, H2Produto } from "./styles";
import {useHistory} from 'react-router-dom';


const tokenMeu="	Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjAwMzYzNzAxMy1BbmRyZS1jbGllbnQiLCJleHAiOjE2NTYxMjg5Mjh9.GhvC69j_XSeQkACLYRhyMdYVd0imiwYE5-J7DVGYNaXxNF-bfbJX1ztszWAlGFiciMxyDWeqzLcpLL86qrFe2Q"
export const Produto = ()=>{
    const history = useHistory();
    const {nome}=useParams()
    const [produto,setProduto]=useState({})
useEffect(()=>{
    const getProduto=async () => {
        console.log("entrou");
        const produtoAPI= await API.get(`produto/${nome}`,{headers:{Authorization:tokenMeu}})
        setProduto(produtoAPI.data)
        
    }
    getProduto()
},[])
    return(
        <DivProduto>
        <Grid container minWidth={"300px"} >
                <Grid item md={6} lg={6} xl={6}>
             <Card
            nome={produto.nome}
            preco={produto.preco}
            image={produto.url}

           />
             </Grid>
             <Grid item md={6} lg={6} xl= {6}>
                <H1Produto>{produto.nome}</H1Produto>
                <H2Produto>{produto.descricao}</H2Produto>
                <precoProduto>{produto.preco}</precoProduto>
                <Botao nome="Comprar" color="success"></Botao>
                <Botao nome="Editar" color="warning" onClick = {()=> history.push("/produto/editar")}></Botao>
                 </Grid>
        </Grid>
        </DivProduto>  
    )   

}