import { useState, createContext } from "react"

export const estadoContexto = {
    CPF: "",
    token: "",
    role: ""
};
export const DataContext = createContext(null);

export const Context = (props) => {
    const [CPF, setCPF] = useState()
    const [token, setToken] = useState('')
    const [role, setRole] = useState('')

    const handleSetCPF = (e) => {
        setCPF(e.target.value);
    }
    const handleSetToken = (e) => {
        setToken(e.target.value);
    }
    const handleSetRole = (e) => {
        setRole(e.target.value);
    }

    return (
        <DataContext.Provider value={{ CPF, setCPF, token, setToken, role, setRole }}>{props.children}</DataContext.Provider>
    )
}