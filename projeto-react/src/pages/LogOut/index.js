import { useForm } from 'react-hook-form';
import { AdicionarH2 } from './styles';
import { Form, Button } from 'react-bootstrap'
export const LogOut=()=>{
const { register, handleSubmit, reset } = useForm()

const onSubmitLogout =()=>{
    localStorage.setItem("Authorization","")
    localStorage.setItem("CPF","")
    localStorage.setItem("Role","")
}
return(
<Form onSubmit={handleSubmit(onSubmitLogout)}>
                <AdicionarH2>LogOut</AdicionarH2>
                <fieldset style={{ border: "1px solid green" }}>
                <Button type="submit" style={{ background: "green" }}>Deslogar</Button>
                </fieldset>
            </Form>
)
}