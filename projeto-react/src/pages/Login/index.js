import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { API } from "../../services/api"
import jwt_decode from "jwt-decode";
import { DataContext } from "../../context";

export const Login = () => {
    const { setCPF, setToken, CPF, token, setRole, role } = useContext(DataContext)
    const history = useHistory()

    const [usuario, setUsuario] = useState([])
    const [storeCPF, setStoreCPF] = useState()
    const [storeToken, setStoreToken] = useState({})
    const [storeRole, setStoreRole] = useState()
    useEffect(() => {
        const dados = {
            username: '',
            password: ''
        }
        if (!CPF) {
            if (dados.username.length > 2 && dados.password.length > 2) {
                const getData = async () => {
                    const response = await API.post(`login`, dados);
                    const decoded = jwt_decode(response.headers.authorization)
                    setStoreCPF(decoded.sub?.split("-")[0])
                    setStoreToken(response.headers.authorization)
                    setStoreRole(decoded.sub?.split("-")[2])
                }
                getData()


            } else {
            }
        } else {
            console.log("Você já está logado!")
        }
    }
        , [CPF]
    )
    useEffect(() => {
        if (storeToken && storeCPF && storeRole) {
            setToken(storeToken)
            const getDados = async () => {
                const resposta = await API.get(`client/${storeCPF}`, { headers: { Authorization: storeToken } })
                setCPF(storeCPF)
                setUsuario(resposta.data)
                setRole(storeRole)
            }

            getDados()
        }
    }, [storeToken, storeCPF, storeRole])
    return (
        <h1>Oi</h1>
    )
}