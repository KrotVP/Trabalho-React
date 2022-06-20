import React from "react";
import { Button } from "@mui/material";

const Botao = (props) => {
    return (
        <Button variant="contained" color={props.color} onClick={props.onClick}>
            {props.nome}
        </Button>
    )
}
export default Botao;