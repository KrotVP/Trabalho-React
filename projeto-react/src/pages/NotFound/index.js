import { textAlign } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { H1NotFound, H3NotFound, ImageNotFound } from './styles'

const NotFound = () => {
    return (

        <div id="wrapper">
            <ImageNotFound src='https://i.imgur.com/A040Lxr.png' />


            <div id="info">
                <H1NotFound >Perdido no espaço?</H1NotFound>
                <H3NotFound>Isso acontece com todos!
                    <p></p>
                    Recomendo que volte pra nossa página inicial!
                    <p></p>
                    <Link to="/">Clique aqui!</Link>
                </H3NotFound>
            </div>
        </div >
    )
}

export default NotFound