import { CardContent, CardMedia, Typography } from "@mui/material";
import { CardContainer } from "./styles";

const Card = (props) => {
    return (

        <div style={{ height: "150", width: "500" }}>
            <CardContainer>
                <CardMedia
                    component="img"
                    height="10%"
                    image={props.image}
                    alt={props.nome}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.preco}
                    </Typography>
                </CardContent>
            </CardContainer>
        </div>
    )
}

export default Card
