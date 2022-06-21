
import { useState, createContext,useEffect } from "react"

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

    useEffect(() => {
        if(localStorage.getItem('Authorization')) {
          setToken(localStorage.getItem("Authorization"));
          setRole(localStorage.getItem("Role"))
          setCPF(localStorage.getItem("CPF"))
        }
      }, []);

    return (
        <DataContext.Provider value={{ CPF, setCPF, token, setToken, role, setRole }}>{props.children}</DataContext.Provider>
    )

}

