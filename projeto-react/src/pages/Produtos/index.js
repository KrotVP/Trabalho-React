import Card from "../../components/Card"
import { useHistory } from "react-router-dom"
import { Grid } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { API } from "../../services/api"
import { DataContext } from "../../context/data"
import { DivProduto } from "./styles"



export const Produtos = () => {
    const [listagem,setListagem]=useState([{}])
    const history = useHistory()
    const tokenMeu="	Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjAwMzYzNzAxMy1BbmRyZS1jbGllbnQiLCJleHAiOjE2NTYxMjg5Mjh9.GhvC69j_XSeQkACLYRhyMdYVd0imiwYE5-J7DVGYNaXxNF-bfbJX1ztszWAlGFiciMxyDWeqzLcpLL86qrFe2Q"
    useEffect(()=>{
        const getProdutos=async () => {
            console.log("entrou");
            const lista= await API.get(`produto`,{headers:{Authorization:tokenMeu}})
            setListagem(lista.data)
            console.log(listagem)
        }
        getProdutos()
    },[])
    return (
    <div>
        <header>
            <h1>Produtos</h1>
        </header>
        <DivProduto>
        <Grid  container minWidth={"300px"} >
            {listagem.map((produto)  =>{
           return(
                <Grid item md={4} lg={4} xl={3}>
             <Card
            nome={produto.nome}
            preco={produto.preco}
            image={produto.url}
            onClick={()=> history.push(`produto/${produto.nome}`)}
           />
             </Grid>
        
        )  
})}
         </Grid>
        </DivProduto>
      </div>
    )
}