import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { API } from "../../services/api"
import jwt_decode from "jwt-decode";
import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { DataContext } from "../../context/data";

const validationPost = yup.object().shape({
    username: yup.string().required("O campo username é obrigatório"),
    password: yup.string().required("O campo senha é obrigatório!"),
});
export const Login = () => {
    const { setCPF, setToken, CPF, token, setRole, role } = useContext(DataContext)
    const history = useHistory()
    const [usuario, setUsuario] = useState([])
    const [storeCPF, setStoreCPF] = useState()
    const [storeToken, setStoreToken] = useState({})
    const [storeRole, setStoreRole] = useState()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });
    const onSubmitAdd = async (data) => {
             
                reset();
                try {
                    const response = await API.post(`/login`, data)
                    const header= response.headers.authorization
                    const decoded = jwt_decode(header)
                    console.log(decoded)
                    setStoreCPF(decoded.sub?.split("-")[0])
                    setStoreToken(response.headers.authorization)
                    setStoreRole(decoded.sub?.split("-")[2])
                    console.log(storeCPF)
                    console.log(storeRole)
                  

                } catch (error) {
                    console.log(error.message)
                }
         
         
        }
      
    useEffect(() => {
        if (storeToken && storeCPF && storeRole) {
            setToken(storeToken)
            const getDados = async () => {
                if (storeRole ===("client")) {
                    console.log("entrou")
                    const resposta = await API.get(`client/${storeCPF}`, { headers: { Authorization: storeToken } })
                    setCPF(storeCPF)
                    setUsuario(resposta.data)
                    setRole(storeRole)
                    localStorage.setItem("Authorization",storeToken)
                    localStorage.setItem("CPF",storeCPF)
                    localStorage.setItem("Role",storeRole)
                } else {
                    const resposta = await API.get(`funcionario/${storeCPF}`, { headers: { Authorization: storeToken } })
                    setCPF(storeCPF)
                    setUsuario(resposta.data)
                    setRole(storeRole)
                    localStorage.setItem("Authorization",storeToken)
                    localStorage.setItem("CPF",storeCPF)
                    localStorage.setItem("Role",storeRole)
                }
            }

            getDados()
        }
    }, [storeToken, storeCPF, storeRole])





    return (
        <>
            <Form onSubmit={handleSubmit(onSubmitAdd)}>
                <AdicionarH2>Login</AdicionarH2>
                <fieldset style={{ border: "1px solid green" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username"{...register("username")} />
                        <p className="error-message"> {errors.username?.message}</p>
                        <br />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" name="password" {...register("password")} />
                        <p className="error-message"> {errors.password?.message}</p>
                    </Form.Group>
                    <Button type="submit" style={{ background: "green" }}>Enviar</Button>
                </fieldset>
            </Form>
            
        </>

    )
    }