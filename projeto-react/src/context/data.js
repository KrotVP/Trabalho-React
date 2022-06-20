import { createContext, useState } from "react"

export const DataContext = createContext(null)

export const stateContext = (props) => {
    const [CPF, setCPF] = useState('')
    const [token, setToken] = useState('')
    const [role, setRole] = useState('')

    handleSetCPF = (e) => {
        setCPF(e.target.value);
    }
    handleSetToken = (e) => {
        setToken(e.target.value);
    }
    handleSetRole = (e) => {
        setRole(e.target.value);
    }

    return (
        <DataContext.Provider value={{ CPF, setCPF, token, setToken, role, setRole }}>{props.children}</DataContext.Provider>
    )
}
